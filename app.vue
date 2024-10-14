<template>
  <div>
    <head>
      <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
  
</template>
   