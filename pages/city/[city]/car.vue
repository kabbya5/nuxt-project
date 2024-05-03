<template> 
    <div>
        <!-- CAR PAGE  -->
        <div class="w-full flex justify-center mt-0">
            <div class="mx-auto w-[1200px] space-y-4 px-4">
                <div class="mt-32 flex">
                    <CarSideBar/>
                    <NuxtPage/>
                </div>
            </div>
        </div>
        <!-- CAR PAGE  -->
    </div>
</template>


<script setup>
const route = useRoute();
const {toTitleCase} = useUtilities();

useHead({
    title:`${route.params.make ? toTitleCase(route.params.make) : 'Cars' } 
     in ${toTitleCase(route.params.city)}`,
});

definePageMeta({
    layout:"custom"
})

</script>
