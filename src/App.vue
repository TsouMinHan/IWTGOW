<template>
  <div class="container mx-auto p-5">
    <div>
      <div class="">
        <div class="flex flex-row justify-around">
          <input type="number" placeholder="時（0 ~ 23）" v-model="PHour"
            class="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
          <input type="number" placeholder="分（0 ~ 59）" v-model="PMinute"
            class="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
          <input type="number" placeholder="秒（0 ~ 59）" v-model="PSecond"
            class="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
          <button type="button" @click="handleClickShowBtn"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">開始</button>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <SVG v-if="isShowSVG" :imageUrl="imageUrl" :text="text"></SVG>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import SVG from './components/SVG.vue';

const text = ref('');
const PHour = ref(null);
const PMinute = ref(null);
const PSecond = ref(null);

const hour = ref(0);
const minute = ref(0);
const second = ref(0);

const isShowSVG = ref(false);
const intervalId = ref(null);

const imageUrl = 'https://memeprod.ap-south-1.linodeobjects.com/user-template/3bdca86ed34a8c8578cdb00270ea9607.png';

/**
 * 產生倒數時間字串
 * 
 * 透過剩餘秒數計算出還剩多少時分秒
 * 
 * @param {Number} seconds 
 */
const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let text = '距離下班還有';

  if (hours !== 0) text += ' ' + hour + ' 時';
  if (minutes !== 0) text += ' ' + minutes + ' 分';
  if (remainingSeconds !== 0) text += ' ' + remainingSeconds + ' 秒';

  return text;
}

/**
 * 倒數計算
 * 
 * 1. 先清除掉 interval task
 * 2. 設定倒數時間
 * 3. 計算是否已超過，已超過就顯示已經下班
 * 4. 開始 interval 任務倒數計時
 * 4.1 時間還沒到就更新顯示文字
 * 4.2 時間到了就結束 interval task
 */
const countdown = () => {
  clearInterval(intervalId.value);

  const targetTime = new Date();
  targetTime.setHours(hour.value);
  targetTime.setMinutes(minute.value);
  targetTime.setSeconds(second.value);

  const currentTime = new Date();

  if (targetTime <= currentTime) {
    text.value = '已經下班了';
    return;
  }

  let countdownTime = Math.floor((targetTime - currentTime) / 1000);

  intervalId.value = setInterval(() => {
    countdownTime--;

    if (countdownTime <= 0) {
      clearInterval(intervalId.value);

      intervalId.value = null;

      return;
    }

    text.value = formatTime(countdownTime);
  }, 1000);
}

const handleClickShowBtn = () => {
  isShowSVG.value = true;
  hour.value = PHour.value;
  minute.value = PMinute.value;
  second.value = PSecond.value;

  countdown();
}

onMounted(() => {

})
</script>