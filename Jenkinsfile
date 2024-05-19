pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }

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
                dir('client') {
                    npm install
                }
                dir('server') {
                    npm install
                }
                dir('server') {
                    npm run build
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
        stage('Security Scan') {
            steps {
                echo 'Perform security scan using OWASP ZAP'
                echo 'zap-cli --start --spider <target_url>'
                echo 'zap-cli --active-scan <target_url>'
            }
            post{
                always{
                    emailext (
                        subject: 'Security Scan Status',
                        to: 'mjbickel@duck.com',
                        body: "${currentBuild.result}: Job ",
                        attachLog: true,
                    )
                }
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo 'Deploy application to AWS EC2 instance'
                echo 'aws deploy <staging_instance>'
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                // Install dependencies if necessary
                echo 'npm install'
        
                echo 'Run integration tests using Supertest on staging environment'
                echo 'npm run test:integration:staging'
            }
            post{
                always{
                    emailext (
                        subject: 'Integration Tests on Staging Status',
                        to: 'mjbickel@duck.com',
                        body: "${currentBuild.result}: Job ",
                        attachLog: true,
                    )
                }
            }
        }
        stage('Deploy to Production') {
            steps {
                // Deploy application to AWS EC2 instance
                echo 'aws deploy <production_instance>'
            }
        }
    }
}
