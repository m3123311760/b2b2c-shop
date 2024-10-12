<template>
  <div
    class="relative group/sub"
    @mouseenter="showSubMenu"
    @mouseleave="hideSubMenu"
  >
    <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center">
      {{ subCategory.name }}
      <ChevronRight class="w-4 h-4" />
    </div>
    <div
      v-show="isSubMenuActive"
      class="absolute left-full top-0 mt-0 w-48 bg-white rounded-md shadow-lg z-10"
    >
      <div class="py-1">
        <router-link
          v-for="childCategory in subCategory.children"
          :key="childCategory.id"
          :to="childCategory.link"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {{ childCategory.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ChevronRight } from 'lucide-vue-next'
import { useMenu } from '@/composables/useMenu'

export default defineComponent({
  name: 'SubCategoryMenu',
  components: {
    ChevronRight,
  },
  props: {
    subCategory: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { isSubMenuActive, showSubMenu, hideSubMenu } = useMenu()

    return {
      isSubMenuActive,
      showSubMenu,
      hideSubMenu,
    }
  },
})
</script>
