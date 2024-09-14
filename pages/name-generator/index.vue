

<template> 
  <div class="container mx-auto">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" button below</p>

    <Option v-for="option in OptionsArray" key="option.category" :option="option" :options="options" />
   
    <button class="primarty" @click="computeSelectedName"> Find Names </button>
  </div>

  <div class="cards-container">
      <div v-for="name in selectedNames" :key="name" class="card">
        {{ name }}v
        <p> X </p>
      </div>
  </div>

</template>

<script setup lang="ts">

import { Gender, Popularity, Length, names } from '~/data/names';

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

const selectedNames = ref<string[]>([])

const OptionsArray = [
  {
    title: "1) Choose a gender",
    category: 'gender',
    buttons:[Gender.GIRL,Gender.BOY,Gender.UNISEX]
  },
  {
    title: "2) Choose the name's popularity",
    category:'popularity',
    buttons:[Popularity.TRENDY, Popularity.UNIQUE]
  },
  {
    title: "3) Choose the name's length",
    category:'length',
    buttons:[Length.SHORT, Length.ALL, Length.ALL]
  }
]

const computeSelectedName = () => {
  const filteredNames = names
    .filter((name) => name.gender === options.gender)
    .filter((name) => name.popularity === options.popularity)
    .filter((name) => {
      if (options.length === Length.ALL) return true;
      else return name.length === options.length;
    });
  
  selectedNames.value = filteredNames.map(name => name.name);
};

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

button.primarty{
  background-color: rgb(249,87,89);
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 40px;
}

.cards-container{
  display: flex;
  margin-top: 25px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: ;
}

.card{
  background-color: rgb(27,60,138);
  width: 28%;
  color: white;
  text-align: center;
  font-size: 30px;
  border-radius: 12px;
  margin: 0  8px 0 15px;
  height: 60px;
  position: relative;
  margin: 20px 10px;
}

.card p{
  position: absolute;
  top: -30%;
  left: 92%;
  cursor: pointer;
}
</style>