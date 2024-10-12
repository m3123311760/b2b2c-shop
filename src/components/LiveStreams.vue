<template>
  <section v-if="streams.length > 0" class="bg-gray-100 py-8">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-4">热门直播拍卖</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="stream in streams" :key="stream.id" class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="relative h-48">
            <img :src="stream.thumbnail" :alt="stream.title" class="w-full h-full object-cover" />
            <div class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded-md text-sm">直播中</div>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-2">{{ stream.title }}</h3>
            <p class="text-gray-600 mb-2">观看人数: {{ stream.viewerCount }}</p>
            <button class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              观看直播
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LiveStreams',
  props: {
    streams: {
      type: Array,
      required: true,
    },
  },
}
</script>
