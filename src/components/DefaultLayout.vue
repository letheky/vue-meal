<template>
    <div class="bg-gray-100 h-full">
        <Navbar />
        <main>
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue"
</script>

<style scoped></style>