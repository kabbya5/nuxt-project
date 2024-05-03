
<template>
    <div>
        <!-- CAR DETAILS  PAGE -->
        <CarDetailsHero :car="car"/>
        <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4">
            
            <div v-for="feature in car.features" :key="feature" class="mr-10 mt-5 border-b pb-5">
                <div class="flex text-lg mt-2 items-center">
                    <p class="text-orange-800 px-2"> Ok </p>
                    <p> {{feature}} </p>
                </div>
            </div>

            <!-- CAR ATTRIBUTES -->
            <CarDetailsContact :description="car.description"/>
            <!-- CAR ATTRIBUTES  -->
        </div>
        <!-- CAR DETAILS PAGE  -->
</div>
</template>

<script setup>
    const route = useRoute();
    const {cars} = useCars();
    const { toTitleCase } = useUtilities();

    useHead({
        title:toTitleCase(route.params.name),
    });

    const car = computed(() => {
        return cars.find((c) =>{
            return c.id === parseInt(route.params.id);
        })
    });

    if(!car.value){
        throw createError({
            statusCode: 404,
            message: `Car with id of ${route.params.id} does not exist`,
        });
    }

    definePageMeta({
        layout:"custom"
    })


</script>