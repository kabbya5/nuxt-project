<template> 
       <!-- CAR CARDS  -->
       <div class="w-full" v-if="cars">
            <CarCard v-for="car in cars" :key="car.id" :car="car" @favor="handelFavorite" :favoried="car.id in favorite" />   
        </div>
        <!-- CAR CARDS -->
</template>

<script setup>
const {cars} = useCars();

const favorite = useLocalStorage('favorite', {});

const handelFavorite = (id) =>{
    if(id in favorite.value){
        delete favorite.value[id];
    }else{
        favorite.value = {
            ...favorite.value,
            [id]:true,
        }
    }

}
</script>