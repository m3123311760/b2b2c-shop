<template>
  <div v-if="product" class="container mx-auto px-4 py-8">
    <div class="flex flex-wrap -mx-4">
      <ProductImages 
        :images="product.images" 
        :productName="product.name"
        @select-image="selectImage"
      />
      <ProductInfo 
        :product="product" 
        :selectedOptions="selectedOptions"
        @select-option="selectOption"
        @add-to-cart="addToCart"
        @buy-now="buyNow"
      />
    </div>

    <ProductTabs 
      :product="product" 
      :activeTab="activeTab"
      :tabs="tabs"
      @change-tab="changeTab"
    />
  </div>
  <div v-else class="container mx-auto px-4 py-8 text-center">
    加载中...
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ProductImages from '@/components/ProductDetail/ProductImages.vue'
import ProductInfo from '@/components/ProductDetail/ProductInfo.vue'
import ProductTabs from '@/components/ProductDetail/ProductTabs.vue'
import { fetchProductDetail } from '@/api/mock'

const route = useRoute()
const product = ref(null)
const selectedOptions = reactive({})
const activeTab = ref('商品详情')
const tabs = ['商品详情', '规格参数', '用户评价']

onMounted(async () => {
  try {
    const productId = parseInt(route.params.id)
    product.value = await fetchProductDetail(productId)
  } catch (error) {
    console.error('Failed to fetch product details:', error)
    // 这里可以添加错误处理逻辑，比如显示一个错误消息
  }
})

const selectImage = (image) => {
  // 实现选择图片的逻辑
}

const selectOption = (optionName, value) => {
  selectedOptions[optionName] = value
}

const addToCart = () => {
  console.log('加入购物车', selectedOptions)
  // 实现加入购物车逻辑
}

const buyNow = () => {
  console.log('立即购买', selectedOptions)
  // 实现立即购买逻辑
}

const changeTab = (tab) => {
  activeTab.value = tab
}
</script>
