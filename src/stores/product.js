import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getProductDetail } from '@/api/mock'

export const useProductStore = defineStore('product', () => {
  const currentProduct = ref(null)

  const fetchProductDetail = async (productId) => {
    // 在实际应用中,这里应该是一个真实的API调用
    const productData = await getProductDetail(productId)
    currentProduct.value = productData
  }

  return {
    currentProduct,
    fetchProductDetail
  }
})
