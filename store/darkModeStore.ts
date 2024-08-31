import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useDarkModeStore = defineStore('darkMode', () => {
  const isClient = typeof window !== 'undefined';
  
  const initialDarkModeValue = isClient ? localStorage.getItem('darkMode') === 'true' : false;
  const isDarkMode = ref(initialDarkModeValue);

  if (isClient) {
    if (!localStorage.getItem('darkMode')) {
      localStorage.setItem('darkMode', initialDarkModeValue.toString());
    }
  }

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isClient) {
      localStorage.setItem('darkMode', isDarkMode.value.toString());
    }
    document.documentElement.classList.toggle('dark', isDarkMode.value); // Apply Tailwind classes
  };

 
  return {
    isDarkMode,
    toggleDarkMode,
  };
});