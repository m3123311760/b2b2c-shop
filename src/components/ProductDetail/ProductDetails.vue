<template>
  <div class="mt-12">
    <div class="border-b border-gray-200">
      <nav class="flex -mb-px">
        <button v-for="tab in tabs" :key="tab"
          class="py-4 px-6 font-medium text-sm"
          :class="{ 'border-b-2 border-blue-500 text-blue-600': activeTab === tab,
                    'text-gray-500 hover:text-gray-700': activeTab !== tab }"
          @click="changeTab(tab)">
          {{ tab }}
        </button>
      </nav>
    </div>

    <div class="mt-6">
      <!-- 商品详情 -->
      <div v-if="activeTab === '商品详情'" v-html="product.description"></div>

      <!-- 规格参数 -->
      <div v-if="activeTab === '规格参数'">
        <table class="w-full border-collapse">
          <tr v-for="(value, key) in product.specifications" :key="key" class="border-b">
            <td class="py-2 px-4 font-semibold">{{ key }}</td>
            <td class="py-2 px-4">{{ value }}</td>
          </tr>
        </table>
      </div>

      <!-- 用户评价 -->
      <div v-if="activeTab === '用户评价'">
        <div class="flex items-center mb-4">
          <div class="text-4xl font-bold text-yellow-500 mr-4">{{ product.rating.toFixed(1) }}</div>
          <div class="flex-1">
            <div v-for="i in 5" :key="i" class="flex items-center">
              <span class="w-20 text-sm text-gray-600">{{ 6 - i }} 星</span>
              <div class="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-yellow-400" :style="{ width: `${product.ratingDistribution[6-i]}%` }"></div>
              </div>
              <span class="w-12 text-sm text-gray-600 text-right">{{ product.ratingDistribution[6-i] }}%</span>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div v-for="review in product.reviews" :key="review.id" class="border-b pb-4">
            <div class="flex items-center mb-2">
              <img :src="review.avatar" :alt="review.username" class="w-10 h-10 rounded-full mr-3" />
              <div>
                <div class="font-semibold">{{ review.username }}</div>
                <div class="text-yellow-500">
                  <span v-for="i in 5" :key="i" class="text-lg">
                    {{ i <= review.rating ? '★' : '☆' }}
                  </span>
                </div>
              </div>
            </div>
            <p class="text-gray-700">{{ review.comment }}</p>
          </div>
        </div>
      </div>
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
  activeTab: {
    type: String,
    required: true
  },
  tabs: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['changeTab'])

const changeTab = (tab) => {
  emit('changeTab', tab)
}
</script>
