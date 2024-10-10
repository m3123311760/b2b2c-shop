<template>
  <div class="user-profile p-4 w-full">
    <h1 class="text-2xl font-bold mb-4">我的账户</h1>
    <!-- 用户信息和其他功能 -->

    <div class="mt-8 space-y-2">
      <button @click="toggleInfo('aboutUs')" class="w-full py-2 px-4 bg-gray-200 text-left rounded">
        关于我们
      </button>
      <div v-if="showInfo.aboutUs" class="p-4 bg-gray-100 rounded">
        <p>B2B2C商城是一个创新的电商平台，为用户提供优质的购物体验。</p>
      </div>

      <button @click="toggleInfo('contactUs')" class="w-full py-2 px-4 bg-gray-200 text-left rounded">
        联系我们
      </button>
      <div v-if="showInfo.contactUs" class="p-4 bg-gray-100 rounded">
        <p>邮箱：support@b2b2c.com</p>
        <p>电话：400-123-4567</p>
      </div>

      <button @click="toggleInfo('followUs')" class="w-full py-2 px-4 bg-gray-200 text-left rounded">
        关注我们
      </button>
      <div v-if="showInfo.followUs" class="p-4 bg-gray-100 rounded flex space-x-4">
        <a href="#" class="text-gray-600"><i class="fab fa-weixin text-2xl"></i></a>
        <a href="#" class="text-gray-600"><i class="fab fa-weibo text-2xl"></i></a>
        <a href="#" class="text-gray-600"><i class="fab fa-qq text-2xl"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'UserProfile',
  setup() {
    const showInfo = ref({
      aboutUs: false,
      contactUs: false,
      followUs: false
    })

    const toggleInfo = (key) => {
      showInfo.value[key] = !showInfo.value[key]
    }

    return {
      showInfo,
      toggleInfo
    }
  }
}
</script>