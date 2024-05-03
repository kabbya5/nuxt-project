<template> 
    <!-- CAR CARD  -->
    <div @click="navigateTo(`/car/${car.name}-${car.id}`)" class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
        <div class="flex h-full w-full">
            <img :src="car.url"
             alt="" 
            class="w-[300px] h-full"> 

            <div class="w-[300px] p-4 flex flex-col">
                <div>
                <h1 class="text-2xl text-blue-700">
                    {{ car.name }}
                </h1>
                <p class="text-gray-700"> {{ car.description }}</p>
                </div>
                <h1 class="mt-auto text-black"> {{ car.price }} </h1>
            </div>
        </div>
        
    </div>            
    <!-- CAR CARD  -->
</template>

<script setup> 
const props = defineProps({
    car:Object,
});
</script>