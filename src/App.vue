<template>
  <div class="container mx-auto">
    <div>

    </div>
    <div class="flex items-center justify-center">
      <SVG :imageUrl="imageUrl" :text="text"></SVG>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import SVG from './components/SVG.vue';

const text = ref('');

const imageUrl = 'https://memeprod.ap-south-1.linodeobjects.com/user-template/2362b8214643f1a9e6c8f2ceca9841e7.png';

onMounted(() => {
  setInterval(() => {
    console.log('Interval')
    text.value = new Date().toString();
  }, 1000);
})
</script>