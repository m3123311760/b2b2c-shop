<template>
  <div class="home pt-20 md:pt-24">
    <Carousel :slides="carouselSlides" class="mb-8 w-full h-48 md:h-96 lg:h-[500px]" />
    
    <section class="featured-categories py-8 md:py-12 bg-white md:bg-gray-100">
      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 lg:mb-8 text-center">热门分类</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div v-for="category in featuredCategories" :key="category.id" class="flex md:block items-center bg-white md:bg-gray-100 shadow-md overflow-hidden">
          <img :src="category.image" :alt="category.name" class="w-24 h-24 md:w-full md:h-32 lg:h-40 object-cover">
          <div class="p-2 md:p-3 lg:p-4 flex-grow">
            <h3 class="text-sm md:text-base lg:text-lg font-semibold">{{ category.name }}</h3>
          </div>
        </div>
      </div>
    </section>
    
    <section class="featured-products py-8 md:py-12 lg:py-16 bg-gray-100 md:bg-white">
      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 lg:mb-10 text-center">热门商品</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div v-for="product in featuredProducts" :key="product.id" class="flex md:block bg-white md:bg-gray-100 shadow-md overflow-hidden">
          <img :src="product.image" :alt="product.name" class="w-24 h-24 md:w-full md:h-40 lg:h-48 object-cover">
          <div class="p-2 md:p-3 lg:p-4 flex-grow">
            <h3 class="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2">{{ product.name }}</h3>
            <p class="text-red-600 font-bold text-base md:text-lg lg:text-xl">¥{{ product.price.toFixed(2) }}</p>
            <button class="mt-2 md:mt-3 lg:mt-4 w-full bg-blue-600 text-white py-1 md:py-2 rounded-md text-sm md:text-base lg:text-lg hover:bg-blue-700 transition duration-300">加入购物车</button>
          </div>
        </div>
      </div>
    </section>
    
    <section class="live-streams py-8 md:py-12 lg:py-16 bg-white md:bg-gray-100">
      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 lg:mb-10 text-center">正在直播</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="stream in liveStreams" :key="stream.id" class="bg-gray-100 md:bg-white shadow-md overflow-hidden">
          <div class="relative">
            <img :src="stream.thumbnail" :alt="stream.title" class="w-full h-40 md:h-48 lg:h-56 object-cover">
            <div class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-md text-xs md:text-sm">直播中</div>
          </div>
          <div class="p-2 md:p-3 lg:p-4">
            <h3 class="text-sm md:text-base lg:text-lg font-semibold mb-1 md:mb-2">{{ stream.title }}</h3>
            <p class="text-gray-600 text-xs md:text-sm lg:text-base">{{ stream.viewerCount }} 观看</p>
            <button class="mt-2 md:mt-3 lg:mt-4 w-full bg-green-600 text-white py-1 md:py-2 rounded-md text-sm md:text-base lg:text-lg hover:bg-green-700 transition duration-300">观看直播</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Carousel from '../components/Carousel.vue';
import { fetchHomeData } from '../api/mock';

export default {
  name: 'Home',
  components: {
    Carousel
  },
  setup() {
    const carouselSlides = ref([]);
    const featuredCategories = ref([]);
    const featuredProducts = ref([]);
    const liveStreams = ref([]);

    const loadHomeData = async () => {
      try {
        const data = await fetchHomeData();
        carouselSlides.value = data.carouselSlides;
        featuredCategories.value = data.featuredCategories;
        featuredProducts.value = data.featuredProducts;
        liveStreams.value = data.liveStreams;
      } catch (error) {
        console.error('Error loading home data:', error);
      }
    };

    onMounted(() => {
      loadHomeData();
    });

    return {
      carouselSlides,
      featuredCategories,
      featuredProducts,
      liveStreams
    };
  }
};
</script>