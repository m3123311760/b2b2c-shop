<template>
  <div class="w-full md:w-1/2 px-4 mb-8">
    <div class="relative" @mousemove="zoomImage" @mouseleave="resetZoom">
      <img :src="selectedImage" :alt="productName" class="w-full h-auto" ref="mainImage" />
      <div v-if="isZoomed" class="absolute inset-0 bg-no-repeat bg-cover" :style="zoomStyle"></div>
    </div>
    <div class="flex mt-4 space-x-2 overflow-x-auto">
      <img 
        v-for="(image, index) in images" 
        :key="index" 
        :src="image" 
        :alt="`${productName} - 图片 ${index + 1}`"
        class="w-20 h-20 object-cover cursor-pointer border-2"
        :class="{ 'border-blue-500': selectedImage === image, 'border-transparent': selectedImage !== image }"
        @click="selectImage(image)" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  productName: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['selectImage'])

const selectedImage = ref(props.images[0])
const isZoomed = ref(false)
const zoomStyle = ref({})
const mainImage = ref(null)

const selectImage = (image) => {
  selectedImage.value = image
  emit('selectImage', image)
}

const zoomImage = (event) => {
  if (!mainImage.value) return

  const { left, top, width, height } = mainImage.value.getBoundingClientRect()
  const x = (event.clientX - left) / width * 100
  const y = (event.clientY - top) / height * 100

  zoomStyle.value = {
    backgroundImage: `url(${selectedImage.value})`,
    backgroundPosition: `${x}% ${y}%`,
    backgroundSize: '200%'
  }

  isZoomed.value = true
}

const resetZoom = () => {
  isZoomed.value = false
}
</script>
