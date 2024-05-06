<template> 
    <!-- CAR CARD  -->
    <div class="shadow relative border w-full overflow-hidden mb-5 cursor-pointer h-[200px]">
        
        <div @click="emit('favor',car.id)" class="absolute  right-0 top-[-5px] z-20">
            <p class="text-black text-4xl" :class="favoried ? 'text-red-500':' text-black'"> Love </p>
        </div>

        <div class="flex h-full w-full">
            <NuxtImg :src="car.url" @click="navigateTo(`/car/${car.name}-${car.id}`)"
             alt="" 
            class="w-[300px] h-full"/> 

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
    favoried:Boolean,
});


const emit = defineEmits(['favor'])
</script>