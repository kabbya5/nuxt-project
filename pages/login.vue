<template>
    <div class="flex justify-center items-center">
      <div class="w-[600px] py-6">
        <h2 class="text-center font-semibold text-2xl text-gray-800"> Login </h2>
  
        <div class="form-group p-4">
          <label for=""> Email </label>
          <input type="email" @input="validateEmail"
            class="p-1 mt-2 border-2 focus:outline-none w-full"
            :class="error.email ? 'border-red-500' : 'border-green-800'"
            v-model="login.email">
          <span v-if="error.email"> {{ error.email }} </span>
        </div>
  
        <div class="form-group p-4">
          <label for=""> Password </label>
          <div class="mt-2 relative w-full">
            <input @input="validatePassword"
              :type="showPassword ? 'password' : 'text'"
              :class="error.password ? 'border-red-500' : 'border-green-800'"
              class="p-1 pl-2 pr-2 relative w-full border border-gray-300 focus:outline-none rounded"
              v-model="login.password"
              placeholder="Enter your password" />
            <!-- Eye icon toggle -->
            <button type="button" class="absolute top-1 right-0 px-2 py-1 focus:outline-none"
              @click="showPassword = !showPassword">
              <fa :icon="['far', showPassword ? 'eye-slash' : 'eye']" />
            </button>
            <span v-if="error.password"> {{ error.password }} </span>
          </div>
        </div>
  
        <div class="flex justify-between items-center p-4">
          <p class="text-lg font-xl underline text-slate-800"> Don't have an account? Create one </p>
          <p class="text-lg font-xl underline text-slate-800"> Forget your password? </p>
        </div>
  
        <div class="mt-6 px-4">
          <button @click="handleLogin" class="bg-green-800 text-white w-full p-1 uppercase"> Login </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const login = ref({
    email: '',
    password: '',
  });
  
  const showPassword = ref(true);
  const error = ref({
    email: '',
    password: '',
  });


  const handleLogin = () => {
    var email = login.value.email;
    var password = login.value.password;

    document.cookie = `email=${email}`;
    document.cookie = `password=${password}`;

    navigateTo('/');
};
  
const validateEmail = () => {
    if (!login.value.email) {
      error.value.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(login.value.email)) {
      error.value.email = 'Email is invalid';
    } else {
      error.value.email = '';
    }
};
  
const validatePassword = () => {
    if (!login.value.password) {
      error.value.password = 'Password is required';
    } else if (login.value.password.length < 6) {
      error.value.password = 'Password must be at least 6 characters long';
    } else {
      error.value.password = '';
    }
};
</script>
  
<style scoped>
  span{
        color: red;
  }
</style>