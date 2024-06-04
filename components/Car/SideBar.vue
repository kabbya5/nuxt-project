<template> 
<div>
    <!-- CAR SIDE BAR  -->
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Location</h3>
            <h3 @click="updateModal('location')" class="text-blue capitalize"> {{ route.params.city }} </h3>

            <div v-if="modal.location" class="aboslute border shadow left-56 p-5 top-1 -m-1">
                <input type="text" class="border p-1 rounded" v-model="city">
                <button @click="changeLocation" class="bg-blue-400 w-full mt-2 rounded text-white p-1"> Apply </button>
            </div>
        </div>
        <!-- Make  -->
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Make</h3>
            <h3 class="text-blue capitalize" @click="updateModal('make')"> 
                {{ route.params.make || 'Any' }}
            </h3>

            <div v-if="modal.make" class="absolute border-2 shadow left-56 p-5 top-1 -m-1 bg-white z-50">
                <div class="w-[600px] flex justify-between flex-wrap w-[100%]">
                    <h4 v-for="make in makes" :key="make" class="w-1/3 text-black" @click="onChangeMake(make)"> {{ make }} </h4>
                </div>           
            </div>
        </div>

        <!-- Make  -->

        <!-- Price  -->
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3> Price </h3>
            <h3 class="text-blue capitalize" @click="updateModal('price')"> 
                {{ priceRangeTest }}
            </h3>

            <div v-if="modal.price" class="absolute border shadow left-56 p-5 top-1 -m-1 z-[100] bg-white">
                <div class="w-[300px] flex flex-col w-[100%] shadow">
                    <input class="border-2 p-1 rounded" type="number" v-model="priceRange.min">
                    <input class="border-2 p-1 rounded mt-2" type="number" v-model="priceRange.max">

                    <button @click="onChangePrice" class="bg-blue-400 w-full mt-2 rounded text-white p-1"> Apply </button>
                </div>           
            </div>
        </div>

        <!-- Price  -->
    </div>
    <!-- CAR SIDE BAR  -->
</div>
</template>


<script setup> 
    const {makes} = useCars();
    const modal = ref({
        make:false,
        location:false,
        price:false,
    });

    const city = ref("");
    const priceRange = ref({
        min:'',
        max:'',
    });
    const route = useRoute();
    const router = useRouter();
    const priceRangeTest = computed(() => {
        const minPrice = route.query.minPrice;
        const maxPrice = route.query.maxPrice;

        if(!minPrice && !maxPrice) return "Any";
        else if(!minPrice && !maxPrice){
            return `< $${maxPrice}`;
        }else{
            return  `> $${minPrice}--$${maxPrice}`;
        }
    });
    const updateModal = (key) =>{
        modal.value[key] = !modal.value[key];
    }

    const changeLocation = () => {
        if(!city.value) return;
        if(!isNaN(parseInt(city.value))){
            throw createError({
                statusCode:404,
                message:"Invalid City format",
            });
        }
        updateModal('location');
        navigateTo(`/city/${city.value}/car/${route.params.make}`);
        city.value = ' ';
         
    }

    const onChangeMake = (make) =>{
        updateModal('make');
        navigateTo(`/city/${route.params.city}/car/${make}`);
    }

    const onChangePrice = (price) =>{
        updateModal('price');
        if(priceRange.value.max && priceRange.value.min){
            if(priceRange.value.min > priceRange.value.max) return ;
        }

        router.push({
            query:{
                minPrice: priceRange.value.min,
                maxPrice:priceRange.value.max,
            }
        })

    }
    
     
</script>