<template>
  <section v-if="slides.length > 0" class="bg-gray-100 py-8">
    <div class="container mx-auto px-4">
      <div class="relative h-96 rounded-lg overflow-hidden"
           @mouseenter="stopAutoSlide"
           @mouseleave="startAutoSlide">
        <img :src="slides[currentSlideIndex].image" :alt="slides[currentSlideIndex].title" class="w-full h-full object-cover" />
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-50"></div>
        <div class="absolute top-1/2 left-8 transform -translate-y-1/2 text-white">
          <h2 class="text-4xl font-bold mb-4">{{ slides[currentSlideIndex].title }}</h2>
          <p class="text-xl mb-6">{{ slides[currentSlideIndex].description }}</p>
          <button class="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
            立即抢购
          </button>
        </div>
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button
            v-for="(slide, index) in slides"
            :key="slide.id"
            @click="setCurrentSlide(index)"
            class="w-3 h-3 rounded-full"
            :class="index === currentSlideIndex ? 'bg-white' : 'bg-gray-300'"
          ></button>
        </div>
        <button @click="prevSlide" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
          <ChevronLeft class="w-6 h-6" />
        </button>
        <button @click="nextSlide" class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
          <ChevronRight class="w-6 h-6" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

export default {
  name: 'CarouselSection',
  components: {
    ChevronLeft,
    ChevronRight,
  },
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const currentSlideIndex = ref(0)
    const autoSlideInterval = ref(null)

    const nextSlide = () => {
      currentSlideIndex.value = (currentSlideIndex.value + 1) % props.slides.length
    }

    const prevSlide = () => {
      currentSlideIndex.value = (currentSlideIndex.value - 1 + props.slides.length) % props.slides.length
    }

    const setCurrentSlide = (index) => {
      currentSlideIndex.value = index
    }

    const startAutoSlide = () => {
      autoSlideInterval.value = setInterval(nextSlide, 5000)
    }

    const stopAutoSlide = () => {
      if (autoSlideInterval.value) {
        clearInterval(autoSlideInterval.value)
      }
    }

    onMounted(() => {
      if (props.slides.length > 0) {
        startAutoSlide()
      }
    })

    onUnmounted(() => {
      stopAutoSlide()
    })

    watch(() => props.slides, () => {
      if (props.slides.length > 0) {
        stopAutoSlide()
        startAutoSlide()
      }
    })

    return {
      currentSlideIndex,
      nextSlide,
      prevSlide,
      setCurrentSlide,
      startAutoSlide,
      stopAutoSlide,
    }
  },
}
</script>
