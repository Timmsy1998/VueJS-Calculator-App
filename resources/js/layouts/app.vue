<template>
    <NavVue />
    <router-view></router-view>
    <FooterVue />
</template>

<script setup lang="ts">
import NavVue from '../components/Nav.vue';
import FooterVue from '../components/Footer.vue';
</script>