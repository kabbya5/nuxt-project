<template> 
    <div class="bg-white dark:bg-black">
        <Html lang="en-US">
            <Head> 
                <Title> Resturent </Title>
                <Meta name="description" content="My name is Kabbya" />
                <Link ref="preload" href="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1728864000&semt=ais_hybrid-rr-similar" />
            </Head>
        </Html>
        <div class="header-image">
            <nuxt-img class="w-screen h-100" src="https://t4.ftcdn.net/jpg/02/94/26/33/360_F_294263329_1IgvqNgDbhmQNgDxkhlW433uOFuIDar4.jpg" /> 
        </div>

        <div class="container mx-auto">
            <div class="data-table">
                <div v-for="menu in menus" :key="menu.menuType" class="mb-4">
                    <h2 class="text-black font-medium text-2xl dark:text-white my-4 text-center"> 
                        {{ menu.menuType }}
                    </h2>

                    <div class="mt-4 grid grid-cols-12 gap-4">
                        <div v-for="item in menu.items" :key="item.id" class="col-span-4">
                            <div class="w-100 h-[200px] lg:h-[300px] ">
                                <nuxt-img :src="item.image_url" class="w-full h-full object-cover" />
                            </div>
                            

                            <div class="flex justify-between items-center py-3 px-2">
                                <p>{{ item.name }}</p>
                                <nuxt-link :to="{name:'resturent-menu', params:{menu:item.name}}" class="text-blue-800 underline font-md dark:text-white"> View More </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'resturent',
});

const { menus } = useMenuItems();
</script>