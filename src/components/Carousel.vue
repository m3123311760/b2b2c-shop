<template>
  <div class="relative w-full h-96 overflow-hidden">
    <TransitionGroup name="fade" tag="div">
      <div v-for="(slide, index) in slides" :key="slide.id" v-show="currentIndex === index" class="absolute top-0 left-0 w-full h-full">
        <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover">
        <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h3 class="text-xl font-bold">{{ slide.title }}</h3>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </TransitionGroup>
    <button @click="prev" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button @click="next" class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'Carousel',
  props: {
    slides: {
      type: Array,
      required: true
    },
    interval: {
      type: Number,
      default: 5000
    }
  },
  setup(props) {
    let timer = null;

    const next = () => {
      currentIndex.value = (currentIndex.value + 1) % props.slides.length;
    };

    const prev = () => {
      currentIndex.value = (currentIndex.value - 1 + props.slides.length) % props.slides.length;
    };

    const startTimer = () => {
      timer = setInterval(next, props.interval);
    };

    onMounted(() => {
      startTimer();
    });

    onUnmounted(() => {
      clearInterval(timer);
    });

    return {
      currentIndex,
      next,
      prev
    };
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>