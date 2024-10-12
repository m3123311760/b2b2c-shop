<template>
  <section v-if="products.length > 0" class="py-8">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-4">热门商品推荐</h2>
      <div class="flex gap-6">
        <div class="w-2/3">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="product in products" :key="product.id" class="bg-white rounded-lg shadow-md overflow-hidden">
              <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
                <p class="text-gray-600 mb-2">这是一个很棒的商品描述。</p>
                <div class="flex justify-between items-center">
                  <span class="text-xl font-bold text-red-600">¥{{ product.price }}</span>
                  <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                    加入购物车
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/3 bg-gray-100 p-4 rounded-lg">
          <h3 class="text-xl font-bold mb-4">热门品牌</h3>
          <ul class="space-y-2">
            <li v-for="(brand, index) in popularBrands" :key="index">
              <router-link :to="`/brand/${brand}`" class="flex items-center justify-between text-gray-700 hover:text-gray-900">
                {{ brand }}
                <ChevronRight class="w-4 h-4" />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ChevronRight } from 'lucide-vue-next'

export default {
  name: 'FeaturedProducts',
  components: {
    ChevronRight,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    popularBrands: {
      type: Array,
      required: true,
    },
  },
}
</script>
