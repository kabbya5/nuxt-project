<template>
    <div class="bg-white dark:bg-black flex items-center justify-center w-full h-screen">
        <div class="h-fit-content">
            <h1 class="text-5xl fon-bold text-black dark:text-white"> {{ error.statusCode }} </h1>
        </div>
    </div>
</template>


<script setup>
    const error = useError();

    const handelError = () => {
       clearError({
            redirect: "/",
       });
    };
</script> 
