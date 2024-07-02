<template>
    <div class="flex flex-col p-8">
        <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for meals..." />
        <div class="flex justify-center gap-3 mt-2">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter in letters" :key="letter">
                {{
                    letter
                }}
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import {  onMounted, ref } from 'vue';
import http from '../axiosClient';

const ingredients = ref([])

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

onMounted(async () => {
    const response = await http.get('list.php?i=list')
    ingredients.value = response.data.meals
})


</script>

<style scoped></style>