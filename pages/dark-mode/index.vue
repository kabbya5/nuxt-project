<template> 
    <div :style="isDarkMode ? { background:'black'} : null"> 
        <p> Hello wldkh  </p> 
    </div>
</template>


<script setup lang="ts">
    const {isDarkMode, togglerDarkMode} = useDarkMode;
</script>