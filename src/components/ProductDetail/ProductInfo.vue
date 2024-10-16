<template>
  <div class="w-full md:w-1/2 px-4">
    <div class="text-left">
      <h1 class="text-3xl font-bold mb-4">{{ product.name }}</h1>
      <p class="text-2xl text-red-600 font-semibold mb-4">¥{{ product.price.toFixed(2) }}</p>
      <p class="mb-4">库存: {{ product.stock }} 件</p>

      <!-- 规格选择 -->
      <div v-for="(option, optionName) in product.options" :key="optionName" class="mb-4">
        <h3 class="font-semibold mb-2">{{ optionName }}:</h3>
        <div class="flex flex-wrap gap-2">
          <button v-for="value in option" :key="value"
            class="px-4 py-2 border rounded-md border-gray-300"
            :class="{ 'bg-blue-500 text-white border-blue-500': selectedOptions[optionName] === value,
                      'bg-white text-gray-700 hover:border-blue-500': selectedOptions[optionName] !== value }"
            @click="selectOption(optionName, value)">
            {{ value }}
          </button>
        </div>
      </div>
    </div>

    <!-- 购买按钮 -->
    <div class="flex space-x-4 mt-6">
      <button @click="addToCart" class="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
        加入购物车
      </button>
      <button @click="buyNow" class="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors">
        立即购买
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  selectedOptions: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['selectOption', 'addToCart', 'buyNow'])

const selectOption = (optionName, value) => {
  emit('selectOption', optionName, value)
}

const addToCart = () => {
  emit('addToCart')
}

const buyNow = () => {
  emit('buyNow')
}
</script>
