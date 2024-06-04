<template>
    <div class="flex flex-col w-[48%] mt-2">
        <label for="" class="text-cyan-500 mb-1 text-sm">{{ title }} </label>
        <textarea class="p-2 border w-full rounded" 
        v-model="state" :placeholder="placeholder" :name="name" @input="onChange" cols="30" rows="10">

        </textarea>
    </div>
</template>

<script setup>
    const props = defineProps({
        title:String,
        placeholder:String,
        name:String,
    });

    const state = ref('')

    const onChange = () =>{
        emits(onchange(state.value,props.name));
    }
</script>