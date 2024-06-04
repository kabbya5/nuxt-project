<template> 
    <div>
        <div class="flex flex-col w-full mt-2">
            <label for="" class="text-cyan-500 mb-1 text-sm"> {{ title }} </label>

            <input type="text" class="p-2 border w-full rounded" :placeholder="placeholder" v-model="state" :name="name" @input="onChange">
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title:String,
    name:String,
    placeholder:String,
})

const emits = defineEmits(['chageInpur']);
const state = ref('');

const onChange = () =>{
    emits('changeInput', state.value, props.name);
}
</script>