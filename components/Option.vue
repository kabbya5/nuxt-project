<template>
    <div class="options-container">
      <div class="option-container">
        <h4>{{ option.title }}</h4>
        <button v-for="button in option.buttons" :key="button" 
            :class="options[option.category] == button && 'option-active' " 

            @click="options[option.category] = button"> {{ button }}</button>
    
      </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        option:Object,
        options:Object
    });
</script>