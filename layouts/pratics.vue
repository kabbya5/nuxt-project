<template> 
<div>
    <div class="container mx-auto my-4">
        <NavBar/>
        <div class="flex justify-center items-center">
            <NuxtLink :to="{name:'pratics-modal'}" class="font-semibold text-xl text-blue-800"> Modal </NuxtLink>
        </div>

        <slot />
    </div>
</div>
</template>
