
<template> 
    <div>
        <CarCards/>
    </div>
</template>

<script setup>
    const route = useRoute();
    const { toTitleCase } = useUtilities();
    useHead({
        title:toTitleCase(route.params.make),
    });
    definePageMeta({
        layout:"custom",
    });
</script>