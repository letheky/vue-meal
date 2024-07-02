<template>
    <div class="mt-3 flex flex-col flex-grow font-serif">
        <div class="h-full flex flex-col">
            <SkeletonImage
                :imageSrc="mealProp.strMealThumb"
                :imageTitle="mealProp.strMeal"
            />
            <h3 class="my-2 font-bold text-gray-700">{{ mealProp.strMeal }}</h3>
            <div class="flex-grow">
                <span
                    v-for="(ingredient, index) in ingredients"
                    :key="index"
                    class="flex justify-between leading-6"
                >
                    <p class="text-sm text-slate-700">{{ ingredient }}</p>
                    <p class="text-sm text-slate-700">
                        {{ measurements[index] }}
                    </p>
                </span>
            </div>
            <div class="flex justify-between items-center mt-3">
                <button class="bg-red-500 w-20 p-1 rounded-sm text-gray-100">
                    <a
                        v-if="meal.strSource"
                        :href="meal.strSource"
                        target="_blank"
                        >Details</a
                    >
                    <a v-else class="pointer-events-none">Details</a>
                </button>
                <button class="bg-red-500 w-20 p-1 rounded-sm text-gray-100">
                    <a :href="meal.strYoutube" target="_blank">Youtube</a>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Meal } from '../store/types';
import { ref, computed } from 'vue';
import SkeletonImage from './SkeletonImage.vue';

// Define props type for TypeScript
const props = defineProps<{
    meal: Meal;
}>();

// Use ref to clone data from prop and define its type explicitly
const mealProp = ref<Meal>({ ...props.meal });

const ingredients = computed<string[]>(() => {
    return Array.from({ length: 20 }, (_, i) => {
        let key: string = `strIngredient${i + 1}`;
        return mealProp.value[key as keyof Meal];
    }).filter(Boolean);
});
const measurements = computed<string[]>(() => {
    return Array.from({ length: 20 }, (_, i) => {
        let key: string = `strMeasure${i + 1}`;
        return mealProp.value[key as keyof Meal];
    }).filter(Boolean);
});
</script>
