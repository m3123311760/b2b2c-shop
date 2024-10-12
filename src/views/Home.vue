<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader :navigation-categories="navigationCategories" />

    <main class="flex-grow">
      <CarouselSection :slides="carouselSlides" />
      <FeaturedCategories :categories="featuredCategories" />
      <LiveStreams :streams="liveStreams" />
      <FeaturedProducts 
        :products="featuredProducts" 
        :popular-brands="popularBrands" 
      />
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useHomeData } from '@/composables/useHomeData'
import TheHeader from '@/components/TheHeader.vue'
import CarouselSection from '@/components/CarouselSection.vue'
import FeaturedCategories from '@/components/FeaturedCategories.vue'
import LiveStreams from '@/components/LiveStreams.vue'
import FeaturedProducts from '@/components/FeaturedProducts.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    TheHeader,
    CarouselSection,
    FeaturedCategories,
    LiveStreams,
    FeaturedProducts,
  },
  setup() {
    const { 
      navigationCategories,
      carouselSlides,
      featuredCategories,
      featuredProducts,
      liveStreams,
      popularBrands,
    } = useHomeData()

    return {
      navigationCategories,
      carouselSlides,
      featuredCategories,
      featuredProducts,
      liveStreams,
      popularBrands,
    }
  }
})
</script>
