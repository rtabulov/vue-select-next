<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { ref } from '@vue/reactivity';
import { watchEffect } from '@vue/runtime-core';
import VSelect from '../dist/VSelect.es';
import Deselect from './components/Deselect.vue';
import countries from './countryCodes';
import '../dist/style.css';

console.log(Deselect);

const selected = ref(null);
const config = ref({
  options: countries,
});

watchEffect(() => console.log(selected.value));
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <VSelect v-bind="config" v-model="selected" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
