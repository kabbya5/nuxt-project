<template> 
    <div class="w-[600px] mx-auto">
        <div>
            <h1 class="text-6xl mt-24"> Create a New Listings </h1>
        </div>

        <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
            <CarAdSelect :title="'Make *'" :options="makes" name="make" @changeInput="onchangeInput" /> 
            <CarAdInput v-for="input in inputs" :key="input.id" :title="input.title" :placeholder="input.placeholder" :name="input.name" @changeInput="onchangeInput" />

            <CarAdTextArea title="discription*" placeholder="" @change-input="onchangeInput" />

            <CarAdImage  @change-input="onchangeInput"/>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
   layout:'custom', 
});

const {makes} = useCars();

const info = useState('adInFo', () => {
    return {
        make:'',
        model:'',
        miles:'',
        price:'',
        city:'',
        seats:'',
        features:'',
        description:'',
        image:'',
    };
});

const onchangeInput = (data, name) =>{
    info.value[name] = data;
};

const inputs = [
    {
        id:1,
        title:"model *",
        name:"model",
        placeholder:'Civic',
    },

    {
        id:2,
        title:"Year *",
        name:"year",
        placeholder:'Year',
    },

    {
        id:3,
        title:"Miles *",
        name:"miles",
        placeholder:'miles',
    },
    {
        id:4,
        title:"City *",
        name:"City",
        placeholder:'Austin',
    },

    {
        id:5,
        title:"City *",
        name:"City",
        placeholder:'Austin',
    },

    {
        id:6,
        title:"Number of Seats *",
        name:"seats",
        placeholder:'5',
    },

    {
        id:7,
        title:"Featurs*",
        name:"features",
        placeholder:'Austin',
    },

    {
        id:7,
        title:"Price*",
        name:"price",
        placeholder:'price',
    },
]

</script>