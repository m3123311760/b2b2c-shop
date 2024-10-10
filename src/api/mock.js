// 模拟延迟
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchHomeData = async () => {
  await delay(500); // 模拟网络延迟
  return {
    carouselSlides: [
      { id: 1, image: 'https://via.placeholder.com/1200x400', title: '轮播图1', description: '描述1' },
      { id: 2, image: 'https://via.placeholder.com/1200x400', title: '轮播图2', description: '描述2' },
    ],
    featuredCategories: [
      { id: 1, name: '电子产品', image: 'https://via.placeholder.com/200x200' },
      { id: 2, name: '服装', image: 'https://via.placeholder.com/200x200' },
      { id: 3, name: '家居', image: 'https://via.placeholder.com/200x200' },
      { id: 4, name: '食品', image: 'https://via.placeholder.com/200x200' },
      { id: 5, name: '美妆', image: 'https://via.placeholder.com/200x200' },
      { id: 6, name: '运动', image: 'https://via.placeholder.com/200x200' },
    ],
    featuredProducts: [
      { id: 1, name: '商品1', price: 99.99, image: 'https://via.placeholder.com/300x300' },
      { id: 2, name: '商品2', price: 199.99, image: 'https://via.placeholder.com/300x300' },
      { id: 3, name: '商品3', price: 299.99, image: 'https://via.placeholder.com/300x300' },
      { id: 4, name: '商品4', price: 399.99, image: 'https://via.placeholder.com/300x300' },
      { id: 5, name: '商品5', price: 499.99, image: 'https://via.placeholder.com/300x300' },
    ],
    liveStreams: [
      { id: 1, title: '直播1', viewerCount: 1000, thumbnail: 'https://via.placeholder.com/300x200' },
      { id: 2, title: '直播2', viewerCount: 2000, thumbnail: 'https://via.placeholder.com/300x200' },
      { id: 3, title: '直播3', viewerCount: 3000, thumbnail: 'https://via.placeholder.com/300x200' },
      { id: 4, title: '直播4', viewerCount: 4000, thumbnail: 'https://via.placeholder.com/300x200' },
    ],
  };
};