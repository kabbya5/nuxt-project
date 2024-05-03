<template> 
 <div>
    <!-- HOME SEARCH BARE  -->
    <div class="font-serif w-[800px] xl:w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
        <input type="text" 
        class="text-2xl py-3 w-full px-5 rounded-full focus:outline-none" 
        placeholder="Search by city...."
        v-model="city" :class="ciryError? 'border-red-500 border-2' : ''">
        <button class="bg-sky-500 px-10 text-white" @click="handelSearch"> Search </button>
    </div>
    <!-- HOME SEARCH BARE  -->
 </div>
</template> 

<script setup>
const city = ref('');
const ciryError = ref(false);

const handelSearch = () =>{
    if(!city.value){
        return ciryError.value = true;
    }

    navigateTo(`/city/${city.value}/car`);
    
}
</script>