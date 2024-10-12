<template>
  <section v-if="categories.length > 0" class="py-8">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-4">主要分类</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div v-for="category in categories" :key="category.id" class="bg-gray-100 p-4 rounded-lg text-center hover:bg-gray-200 transition-colors">
          <img :src="category.image" :alt="category.name" class="w-24 h-24 mx-auto mb-2" />
          <span class="font-medium">{{ category.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturedCategories',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
}
</script>
