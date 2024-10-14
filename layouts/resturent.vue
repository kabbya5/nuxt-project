<template>
    <NavBar/>
    <div class="shadow-lg">
        <div class="container mx-auto">
            <div class="mt-4 px-4 py-2 flex justify-between items-center">
                <NuxtLink :to="{name:'resturent'}" class="text-xl fomt-md text-black"> Home </NuxtLink>
            </div>
        </div>
    </div>
  
    <slot />
</template>