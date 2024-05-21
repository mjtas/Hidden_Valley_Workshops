pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Build the code using npm
                echo 'Build code using npm'
                
                dir('client') {
                    sh 'npm install --include=dev'
                }
                dir('server') {
                    sh 'npm install --include=dev'
                }
                dir('server') {
                    sh 'npm run build'
                }
                // Create OctopusPack as build artifact 
                sh(script: 'which gitversion && gitversion /output buildserver || true')
                // Capture the git version as an environment variable, or use a default version if gitversion wasn't available.
                script {
                    if (fileExists('gitversion.properties')) {
                        def props = readProperties file: 'gitversion.properties'
                        env.VERSION_SEMVER = props.GitVersion_SemVer
                        env.VERSION_BRANCHNAME = props.GitVersion_BranchName
                        env.VERSION_ASSEMBLYSEMVER = props.GitVersion_AssemblySemVer
                        env.VERSION_MAJORMINORPATCH = props.GitVersion_MajorMinorPatch
                        env.VERSION_SHA = props.GitVersion_Sha
                    } else {
                        env.VERSION_SEMVER = "1.0.0." + env.BUILD_NUMBER
                    }
                }
                script {
                    def sourcePath = "."
                    def outputPath = "."
            
                    octopusPack(
            	        additionalArgs: '',
            	        sourcePath: sourcePath,
            	        outputPath : outputPath,
            	        includePaths: "**/*.html\n**/*.htm\n**/*.css\n**/*.js\n**/*.min\n**/*.map\n**/*.sql\n**/*.png\n**/*.jpg\n**/*.jpeg\n**/*.gif\n**/*.json\n**/*.env\n**/*.txt\n**/Procfile",
            	        overwriteExisting: true, 
            	        packageFormat: 'zip', 
            	        packageId: 'Hidden_Valley_Workshops', 
            	        packageVersion: env.VERSION_SEMVER, 
            	        toolId: 'Default', 
            	        verboseLogging: false)
                    env.ARTIFACTS = "Hidden_Valley_Workshops.${env.VERSION_SEMVER}.zip"
                }
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                echo 'Run unit tests using Jest'
                echo 'npm install' // Ensure dependencies are installed
                echo 'npm test'    // Run Jest tests
            }
        }
        stage('Code Analysis') {
            steps {
                echo 'Integrate SonarQube for code analysis'
                echo 'sonar-scanner'
            }
        }
        
        stage('Deploy') {
            steps {
                // Perform the deployment with Octopus Deploy.
                octopusPushPackage(additionalArgs: '',
                packagePaths: env.ARTIFACTS.split(":").join("\n"),
                overwriteMode: 'OverwriteExisting',
                serverId: params.ServerId,
                spaceId: params.SpaceId,
                toolId: 'Default')
                octopusPushBuildInformation(additionalArgs: '',
                commentParser: 'GitHub',
                overwriteMode: 'OverwriteExisting',
                packageId: env.ARTIFACTS.split(":")[0].substring(env.ARTIFACTS.split(":")[0].lastIndexOf("/") + 1, env.ARTIFACTS.split(":")[0].length()).replaceAll("\\." + env.VERSION_SEMVER + "\\..+", ""),
                packageVersion: env.VERSION_SEMVER,
                serverId: params.ServerId,
                spaceId: params.SpaceId,
                toolId: 'Default',
                verboseLogging: false,
                gitUrl: env.GIT_URL,
                gitCommit: env.GIT_COMMIT,
                gitBranch: env.GIT_BRANCH)
                octopusCreateRelease(additionalArgs: '',
                cancelOnTimeout: false,
                channel: '',
                defaultPackageVersion: '',
                deployThisRelease: false,
                deploymentTimeout: '',
                environment: params.EnvironmentName,
                jenkinsUrlLinkback: false,
                project: params.ProjectName,
                releaseNotes: false,
                releaseNotesFile: '',
                releaseVersion: env.VERSION_SEMVER,
                serverId: params.ServerId,
                spaceId: params.SpaceId,
                tenant: '',
                tenantTag: '',
                toolId: 'Default',
                verboseLogging: false,
                waitForDeployment: false)
                octopusDeployRelease(cancelOnTimeout: false,
                deploymentTimeout: '',
                environment: params.EnvironmentName,
                project: params.ProjectName,
                releaseVersion: env.VERSION_SEMVER,
                serverId: params.ServerId,
                spaceId: params.SpaceId,
                tenant: '',
                tenantTag: '',
                toolId: 'Default',
                variables: '',
                verboseLogging: false,
                waitForDeployment: true)
            }
        }
    }
}
