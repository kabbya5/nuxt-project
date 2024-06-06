
<template> 
    <div>
        <CarCards v-if="cars.length" :cars="cars"/>
        <h1 v-else class="text-red-500"> No Cars Found With filters  </h1>
    </div>
</template>

<script setup>
    const route = useRoute();
    const { toTitleCase } = useUtilities();
    useHead({
        title:toTitleCase(route.params.make),
    });
    definePageMeta({
        layout:"custom",
    });

  
    const {data:cars,refresh} = await useFetchCars(route.params.city, {
        minPrice: route.query.minPrice,
        maxPrice: route.query.maxPrice,
        make: route.query.make
    });

    watch(
        () => route.query,
        // () => refresh,
        () => {
            window.location.reload(true);
        }
        
    );
    
</script>