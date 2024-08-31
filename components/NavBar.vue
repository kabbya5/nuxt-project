<template> 
    <div>
        <!-- NAVBAR -->
        <header class="sticky top-0 z-50 flex justify-between items-enter space-x-1 border-b bg-white p-4 shadow-md dark:bg-black">
            <NuxtLink to="/" href="#" class="text-3xl font-momo dark:text-white"> Cartrader </NuxtLink>
            
            <NuxtLink :to="{name:'pratics'}" class="text-2xl font-momo dark:text-white"> Pratics </NuxtLink>

            <div v-if="user.email" class="flex justify-between w-48">
                <NuxtLink :to="{ name: 'profile-listings' }" class="text-2xl font-momo dark:text-white">Profile</NuxtLink>
                <NuxtLink @click="logout" class="text-2xl font-momo dark:text-white"> Logout </NuxtLink>
            </div>
            
            <NuxtLink v-else :to="{name:'login'}" class="text-2xl font-momo dark:text-white"> Login </NuxtLink>

            <NuxtLink :to="{name:'name-generator'}" class="text-2xl font-momo dark:text-white"> Name Generator </NuxtLink>

            <div class="cursor-pointer dark:text-white"
                @click="store.toggleDarkMode">
                <fa :icon="['far', isDarkMode ? 'moon' : 'sun']" /> {{ isDarkMode }}
            </div>
        </header>
        <!-- NAVBAR -->
    </div>
</template> 

<script setup>

const user = useUser();

import { useDarkModeStore } from '~/store/darkModeStore'; // Import the store

const store = useDarkModeStore();
const isDarkMode = computed(() => store.isDarkMode);


const logout = () => {
    if (process.client) {
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        for (const cookie of cookies) {
            const [key, value] = cookie.split('=');
            if (key === 'email' || key === 'password') {
                document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            }
        }
    }

    navigateTo('/');
}
</script>
