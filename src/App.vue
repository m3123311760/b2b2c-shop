<template>
  <div id="app" class="flex flex-col min-h-screen w-full" :class="themeClass">
    <Header class="hidden md:block" />
    <main class="flex-grow w-full bg-gray-100 md:bg-white">
      <div class="max-w-screen-2xl mx-auto w-full">
        <router-view class="w-full"></router-view>
      </div>
    </main>
    <Footer class="w-full mt-auto hidden md:block" />
    <nav class="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
      <div class="flex justify-around items-center h-16">
        <router-link to="/" class="text-center">
          <i class="fas fa-home text-xl"></i>
          <span class="block text-xs">首页</span>
        </router-link>
        <router-link to="/category" class="text-center">
          <i class="fas fa-th-large text-xl"></i>
          <span class="block text-xs">分类</span>
        </router-link>
        <router-link to="/live" class="text-center">
          <i class="fas fa-video text-xl"></i>
          <span class="block text-xs">直播</span>
        </router-link>
        <router-link to="/cart" class="text-center">
          <i class="fas fa-shopping-cart text-xl"></i>
          <span class="block text-xs">购物车</span>
        </router-link>
        <router-link to="/profile" class="text-center">
          <i class="fas fa-user text-xl"></i>
          <span class="block text-xs">我的</span>
        </router-link>
      </div>
    </nav>
    <div class="text-center text-xs py-2 bg-gray-100 md:hidden">
      © 2024 B2B2C商城. 保留所有权利. ICP备案号: 京ICP备XXXXXXXX号-X
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    themeClass() {
      return 'default-theme'
    }
  }
}
</script>

<style>
.national-day-theme {
  background-color: #ffebee;
}
</style>