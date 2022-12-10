<template>
    <div class="container py-4">

        <div class="p-5 mb-4 bg-dark text-white rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Welcome to my Calculator Web App</h1>
                <p class="col-md-8 fs-4">Using Laravel 9, Vue.JS 3 & Boostrap 5 I have developed this web app to perform
                    calculator actions, with emojis instead of mathematical operators!</p>
                <p class="col-md-8 fs-4">This was developed as a development test for a Job Role, however I will be
                    uploading to my GitHub as a "show project"</p>
                <router-link :to="{ name: 'calculator' }" v-slot="{ href, navigate }"><button :href="href"
                        @click="navigate" class="btn btn-primary btn-lg" type="button">✨ Go to
                        the Calculator ✨</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
</script>