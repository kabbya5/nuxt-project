<template>
    <div>
        <button @click="showModal=true">Open Modal</button>

        <div v-if="showModal" class="modal-overlay" @click="handleOverlayClick">
            <div class="modal">
                <h2>Modal Title</h2>
                <p>This is a modal content</p>
                <button @click="showModal = false">Close Modal</button>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'pratics'
});

const showModal = ref(false);

const handleOverlayClick = (event) => {
  if (event.target.classList.contains('modal-overlay')) {
    showModal.value = false
  }
}

</script>

<style scoped>
   .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    }

    .modal {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
</style>