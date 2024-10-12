import { ref, onMounted } from 'vue'
import { fetchHomeData } from '@/api/mock'

export function useHomeData() {
  const navigationCategories = ref([])
  const carouselSlides = ref([])
  const featuredCategories = ref([])
  const featuredProducts = ref([])
  const liveStreams = ref([])
  const popularBrands = ref([])

  const loadHomeData = async () => {
    try {
      const data = await fetchHomeData()
      navigationCategories.value = data.navigationCategories
      carouselSlides.value = data.carouselSlides
      featuredCategories.value = data.featuredCategories
      featuredProducts.value = data.featuredProducts
      liveStreams.value = data.liveStreams
      popularBrands.value = data.popularBrands
    } catch (error) {
      console.error('首页获取数据失败:', error)
    }
  }

  onMounted(loadHomeData)

  return {
    navigationCategories,
    carouselSlides,
    featuredCategories,
    featuredProducts,
    liveStreams,
    popularBrands,
  }
}
