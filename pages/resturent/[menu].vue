<template>
    <div class="bg-white dark:bg-black">
        <div class="container mx-auto dark:text-white py-4">
            <h2 class="font-xl text-3xl"> {{ menuName }} </h2>

            <nuxt-img :src="menu?.image_url" class="mt-4 "></nuxt-img>
        </div>
    </div>

</template>

<script setup lang="ts">
    import menus from "@/data/menuItems.json";
    const route = useRoute();
    const menuName = route.params.menu;
    const allItems = menus.flatMap(menu => menu.items);
    const menu = allItems.find(item => item.name === menuName);

    if (!menu) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Item Not Found'
        });
    }
</script>
    
