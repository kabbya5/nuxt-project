<template> 
    <div>
        <!-- NAVBAR -->
        <header class="sticky top-0 z-50 flex justify-between items-enter space-x-1 border-b bg-white p-4 shadow-md">
            <NuxtLink to="/" href="#" class="text-3xl font-momo"> Cartrader </NuxtLink>
            <div v-if="user.email" class="flex justify-between w-48">
                <NuxtLink :to="{ name: 'profile-listings' }" class="text-2xl font-momo">Profile</NuxtLink>
                <NuxtLink @click="logout" class="text-2xl font-momo"> Logout </NuxtLink>
            </div>
            
            <NuxtLink v-else :to="{name:'login'}" class="text-2xl font-momo"> Login </NuxtLink>
            
        </header>
        <!-- NAVBAR -->
    </div>
</template> 

<script setup>

const user = useUser();

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
