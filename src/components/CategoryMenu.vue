<template>
  <div
    class="relative group"
    @mouseenter="showMenu"
    @mouseleave="hideMenu"
  >
    <div
      class="text-gray-700 hover:text-gray-900 flex items-center cursor-pointer"
      @click="toggleCategory"
    >
      {{ category.name }}
      <ChevronDown class="w-4 h-4 ml-1" />
    </div>
    <div
      v-show="isMenuActive"
      class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
    >
      <div class="py-1">
        <template v-for="subCategory in category.children" :key="subCategory.id">
          <SubCategoryMenu 
            v-if="subCategory.children && subCategory.children.length > 0"
            :sub-category="subCategory"
          />
          <router-link
            v-else
            :to="subCategory.link"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {{ subCategory.name }}
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { ChevronDown } from 'lucide-vue-next'
import { useMenu } from '@/composables/useMenu'
import SubCategoryMenu from './SubCategoryMenu.vue'

export default defineComponent({
  name: 'CategoryMenu',
  components: {
    ChevronDown,
    SubCategoryMenu,
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter()
    const { isMenuActive, showMenu, hideMenu } = useMenu()

    const toggleCategory = () => {
      if (!props.category.children || props.category.children.length === 0) {
        router.push(props.category.link)
      }
    }

    return {
      isMenuActive,
      showMenu,
      hideMenu,
      toggleCategory,
    }
  },
})
</script>
