

<template> 
  <div class="container mx-auto">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below</p>

    <div class="options-container">
      <div class="option-container">
        <h4>1) Choose A gender</h4>
        <button :class="options.gender === Gender.BOY ? 'option-active' : ''" @click="options.gender = 'Boy'">Boy</button>
        <button :class="options.gender === Gender.UNISEX ? 'option-active' : ''" @click="options.gender = 'Unisex'">Unisex</button>
        <button :class="options.gender === Gender.GIRL  ? 'option-active' : ''" @click="options.gender = 'Girl'">Girl</button>
      </div>
    </div>

    <div class="options-container">
      <div class="option-container">
        <h4>2) Choose the name's popularity</h4>
        <button :class="options.popularity === Popularity.TRENDY ? 'option-active' : ''" @click="options.popularity = 'Trendy'">Trendy</button>
        <button :class="options.popularity === Popularity.UNIQUE ? 'option-active' : ''" @click="options.popularity = 'Unique'">Unique</button>
      </div>
    </div>

    <div class="options-container">
      <div class="option-container">
        <h4>3) Choose name's length</h4>
        <button :class="options.length === Length.LONG ? 'option-active' : ''" @click="options.length = 'Long'">Long</button>
        <button :class="options.length === Length.ALL ? 'option-active' : ''" @click="options.length = 'All'">All</button>
        <button :class="options.length === Length.SHORT ? 'option-active' : ''" @click="options.length = 'Short'">Short</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

enum Gender {
  GIRL = "Girl",
  BOY = "Boy",
  UNISEX = "Unisex"
}

enum Popularity {
  TRENDY = "Trendy",
  UNIQUE = 'Unique'
}

enum Length {
  ALL = "All",
  LONG = "Long",
  SHORT = "Short"
}
interface OptionsState{
   gender:Gender;
   popularity:Popularity;
   length:Length;
}
const obj: OptionsState = {
  gender: Gender.GIRL,
  length:Length.ALL,
  popularity:Popularity.UNIQUE,
}
const options = reactive <OptionsState>({
    gender: Gender.GIRL,
    length:Length.ALL,
    popularity:Popularity.UNIQUE,
});
</script>

<style scoped>
.container{
    font-family: Arial, Helvetica, sans-serif;
    padding:40px 20px;
    max-width: 51rem;
    text-align: center;
    color: rbg(17,60,138);
}

h1{
    font-size:4rem;
}

.options-container{
    background-color: rgb(255,238,236);
    border-radius: 2rem;
    padding: 1rem;
    width: 95%;
    margin: 0 auto;
    margin-top: 4rem;
    position: relative;

}

.option-container{
    padding-bottom: 1rem;
}

.option-container button{
    background-color: #fff;
    outline: 0.15rem solid rgb(249,87,89);
    border: none;
    padding:0.75rem;
    font-size: 1rem;
    width: 12rem;
    color: rgb(27,46,78);
    margin:10px 0;
}

.option-active{
    background-color: rgb(249,87,89) !important;
    color: #fff !important;
}
</style>