<template> 
    <div>
        <!-- CAR PAGE  -->
        <div class="w-full flex justify-center mt-0">
            <div class="mx-auto w-[1200px] space-y-4 px-4">
                <div class="mt-32 flex">
                    <NuxtErrorBoundary> 
                        <CarSideBar/>
                        <NuxtPage/>

                        <template #error="{error}">
                            <div class="text-center mx-auto flex flex-col">
                                <h1 class="text-5xl text-red-500"> Sorry, Something went wrong</h1>
                                <code class="my-6"> {{ error }}</code>

                                <button class="text-white bg-blue-400 px-10 py-3 rounded mt-4" @click="error.value = null"> Go Back </button>
                            </div>
                        </template>
                    </NuxtErrorBoundary>
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
    title:`${route.params.make ? toTitleCase(route.params.make) : 'Cars'} 
     in ${toTitleCase(route.params.city)}`,
});

definePageMeta({
    layout:"custom"
})

</script>
