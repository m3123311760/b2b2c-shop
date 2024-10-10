<template>
  <footer class="bg-gray-800 text-white py-8 w-full">
    <div class="max-w-screen-2xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-bold mb-4">关于我们</h3>
          <p class="text-sm">B2B2C商城是一个创新的电商平台，为用户提供优质的购物体验。</p>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">快速链接</h3>
          <ul class="text-sm space-y-2">
            <li><a href="#" class="hover:text-gray-300">首页</a></li>
            <li><a href="#" class="hover:text-gray-300">商品分类</a></li>
            <li><a href="#" class="hover:text-gray-300">购物车</a></li>
            <li><a href="#" class="hover:text-gray-300">我的账户</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">联系我们</h3>
          <p class="text-sm">邮箱：support@b2b2c.com</p>
          <p class="text-sm">电话：400-123-4567</p>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">关注我们</h3>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-gray-300"><i class="fab fa-weixin text-2xl"></i></a>
            <a href="#" class="hover:text-gray-300"><i class="fab fa-weibo text-2xl"></i></a>
            <a href="#" class="hover:text-gray-300"><i class="fab fa-qq text-2xl"></i></a>
          </div>
        </div>
      </div>
      <div class="mt-8 text-center text-sm">
        <p>© 2024 B2B2C商城. 保留所有权利. ICP备案号: 京ICP备XXXXXXXX号-X</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>