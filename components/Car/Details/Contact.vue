<template>
    <div>
        <!-- CAR DESCRIPTION -->
        <div class="mt-10">
            <p class="py-4 text-black">{{ description }}</p>
            <div class="flex justify-between">
                <input type="text" class="type border p-1" placeholder="Name">
                <input type="text" class="type border p-1" placeholder="Email">
                <input type="text" class="type border p-1" placeholder="Phone">
                <div class="flex mt-4 w-[600px]">
                    <textarea name="" id="" cols="30" rows="10" class="border p-1 w-rull"
                        placeholder="message"></textarea>
                </div>

                <button class="bg-blue-400.text-white px-10 py-3 rounded mt-4"> Submit </button>
            </div>
        </div>
        <!-- CAR DESCRIPTION  -->
    </div>
</template>

<script setup>
    const props = defineProps({
        description:String,
    })
    
</script>