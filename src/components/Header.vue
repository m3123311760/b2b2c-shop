<template>
  <header class="bg-white shadow-md w-full fixed top-0 left-0 right-0 z-50">
    <div class="max-w-screen-2xl mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <span class="text-2xl font-bold">Logo</span>
          <span class="ml-3 text-2xl font-bold">B2B2C商城</span>
        </div>

        <!-- 搜索栏 -->
        <div class="w-1/3">
          <input type="text" placeholder="搜索商品" class="w-full px-4 py-2 border rounded-lg text-lg">
        </div>

        <!-- 导航链接 -->
        <nav class="flex space-x-6">
          <router-link to="/" class="text-gray-600 hover:text-gray-900 flex flex-col items-center">
            <i class="fas fa-home text-xl"></i>
            <span class="text-sm">首页</span>
          </router-link>
          <router-link to="/category" class="text-gray-600 hover:text-gray-900 flex flex-col items-center">
            <i class="fas fa-th-large text-xl"></i>
            <span class="text-sm">分类</span>
          </router-link>
          <router-link to="/live" class="text-gray-600 hover:text-gray-900 flex flex-col items-center">
            <i class="fas fa-video text-xl"></i>
            <span class="text-sm">直播</span>
          </router-link>
          <router-link to="/cart" class="text-gray-600 hover:text-gray-900 flex flex-col items-center">
            <i class="fas fa-shopping-cart text-xl"></i>
            <span class="text-sm">购物车</span>
          </router-link>
          <router-link to="/profile" class="text-gray-600 hover:text-gray-900 flex flex-col items-center">
            <i class="fas fa-user text-xl"></i>
            <span class="text-sm">我的</span>
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>