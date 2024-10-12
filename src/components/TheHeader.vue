<template>
  <header class="bg-white shadow-sm">
    <div class="container mx-auto px-4 py-4">

      <nav class="flex justify-between items-center">
        <CategoryMenu 
          v-for="category in navigationCategories"
          :key="category.id"
          :category="category"
        />
      </nav>
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue'
import CategoryMenu from './CategoryMenu.vue'

export default defineComponent({
  name: 'TheHeader',
  components: {
    CategoryMenu,
  },
  props: {
    navigationCategories: {
      type: Array,
      required: true,
    },
  },
})
</script>
