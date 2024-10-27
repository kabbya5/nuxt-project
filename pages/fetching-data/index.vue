<template> 
    <div class="bg-slate-400/60 dark:bg-black" style="background-repeat: no-repeat;background-size: cover;" :style="{ backgroundImage: `url(${background})` }">
        <div class="container mx-auto">

            <div class="h-screen relative overflow-hidden">
                <div class="absolute w-full top-0 overlay">

                </div>

                <div class="absolute w-full h-full top-0 p-48">
                    <div class="flex justify-between">
                        <div class="text-black dark:text-white">
                            <h1 class="text-7xl"> {{ city.name }}  </h1>
                            <p class="font-extralight text-2xl mt-2"> Sunday Dec 9th </p>
                            <img class="w-56 icon" :src="`http://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`" alt="">
                        </div>

                        <div class="text-black dark:text-white">
                            <p class="text-9xl font-extralight"> {{ city.main.temp }}  ° </p>
                        </div>
                    </div>

                    <div class="mt-20">
                        <input v-model="input" type="text" class="w-1/2 h-12 border border-black dark:border-white px-4" placeholder="Search City">
                        <button @click="handelClick" class="bg-sky-800 h-12 px-6 text-white border border-sky-800"> Search  </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const search = ref('Toronto');
    const input = ref('');
    const background = ref('');

    const appId = '9775dcbc340331020d4799180a5e0456'; 

    // const {data:city, error} = useFetch(
    //     () => `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=${appId}`
    // )

    const {data:city, error} = useAsyncData('city',async() =>{
        const response = await $fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=${appId}`,
        );

        const temp = response.main.temp;

        if(temp <= - 10){
           background.value = 'https://efirq7mmtwd.exactdn.com/wp-content/uploads/2023/12/snowy-landscape-385473973.jpg'; 
        }else if(temp > -10 && temp <= 10){
            background.value = 'https://media.kgw.com/assets/WTIC/images/c1adf01e-1db8-439b-bdc3-891934f4d383/c1adf01e-1db8-439b-bdc3-891934f4d383_750x422.jpg';
        }else if(temp > 0 && temp <= 10){
            background.value = 'https://cdn.britannica.com/05/155405-050-F8969EE6/Spring-flowers-fruit-trees-bloom.jpg';
        }else{
            background.value = 'https://cdn.pixabay.com/photo/2023/07/08/04/58/sunset-8113697_640.jpg'; 
        }

        return response;
    },{
        watch:[search]
    });
        
    const handelClick = () =>{
        const formatedSearch = input.value.trim().split(' ').join('+');
        search.value = formatedSearch;
        input.value = ' ';
    }
</script>