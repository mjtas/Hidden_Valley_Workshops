<template>
<div class="green-subscription">
    <div class="subscribe"><h3>Subscribe to receive blog posts and upcoming workshop updates as a monthly newsletter</h3></div>
    <div class="subscribe">
        <label for="subscription_name">Name</label><br>
        <input type="text" id="subscription_name" name="name" class="wide-input" v-model="name"><br>
        <label for="subscription_email">Email Address</label><br>
        <input type="email" id="subscription_email" name="email" placeholder="you@example.com" class="wide-input" v-model="email" required><br>
    </div>
    <div class="subscribe">
        <button type="button" class="button button2" @click="submitForm">Subscribe</button>
    </div>
    </div>
</template>

<script>
    export default {

    }
</script>