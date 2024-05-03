<template> 
    <div>
        <!-- CAR HERO  -->
        <div class="mt-10">
            <img :src="car.url" alt="" class="w-full">
        </div> 
        <div class="px-10">
            <h1 class="mt-10 text-4xl"> {{ car.name }} </h1>
            <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
                <div class="flex items-center">
                    <p class="px-1"> {{ car.seats }} </p>
                    <p class="px-1">|</p>
                    <p class="px-1"> {{ car.miles }} </p>
                </div>
                <div>
                    <p class="font-bold text-slate-700"> {{ car.price }} </p>
                </div>
            </div>
        </div>
    <!-- CAR HERO  -->
    </div>
</template>

<script setup>
const props = defineProps({
    car:Object,
})
</script>