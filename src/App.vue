<template>
  <div id="app" class="flex flex-col min-h-screen w-full" :class="themeClass">
    <Header class="hidden md:block w-full" />
    <main class="flex-grow w-full bg-gray-100 md:bg-white">
      <div class="w-full md:max-w-screen-2xl md:mx-auto px-4 md:px-0">
        <router-view class="w-full"></router-view>
      </div>
    </main>
    <Footer class="w-full mt-auto" />
    
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
    <div class="text-center text-xs py-2 bg-gray-100 md:hidden w-full">
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
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.national-day-theme {
  background-color: #ffebee;
}

@media (max-width: 768px) {
  #app {
    padding-bottom: 4rem; /* 为移动端底部导航栏留出空间 */
  }
}

/* 确保所有子元素不会超出屏幕宽度 */
#app > * {
  max-width: 100vw;
}

/* 添加以下样式 */
footer {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}
</style>
