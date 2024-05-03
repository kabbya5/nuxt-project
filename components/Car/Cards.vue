<template> 
       <!-- CAR CARDS  -->
       <div class="w-full" v-if="cars">
            <CarCard v-for="car in cars" :key="car.id" :car="car"/>   
        </div>
        <!-- CAR CARDS -->
</template>

<script setup>
const {cars} = useCars();
</script>