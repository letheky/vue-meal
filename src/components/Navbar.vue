<template>
    <header class="bg-white shadow-md h-16 flex justify-between items-center">
        <router-link :to="{ name: 'home' }" class="flex items-center h-full transition-colors hover:bg-purple-200 px-5">
            Home
        </router-link>
        <div class="flex self-stretch">
            <router-link :to="{ name: 'byName' }"
                class="flex items-center px-2 h-full transition-colors hover:bg-purple-200">Search
                meals</router-link>
            <router-link :to="{ name: 'byLetter' }"
                class="flex items-center px-2 h-full transition-colors hover:bg-purple-200">Meals By
                Letter</router-link>
            <router-link :to="{ name: 'byIngredient' }"
                class="flex items-center px-2 h-full transition-colors hover:bg-purple-200">Meals By
                ingredients</router-link>
        </div>

    </header>
</template>

<script setup lang="ts">

</script>

<style scoped></style>