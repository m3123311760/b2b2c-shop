// 模拟延迟
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchHomeData = async () => {
  await delay(500); // 模拟网络延迟
  return {
    carouselSlides: [
      { id: 1, image: 'https://via.placeholder.com/1200x400', title: '轮播图1', description: '描述1' },
      { id: 2, image: 'https://via.placeholder.com/1200x400', title: '轮播图2', description: '描述2' },
      { id: 3, image: 'https://via.placeholder.com/1200x400', title: '轮播图3', description: '描述3' },
      { id: 4, image: 'https://via.placeholder.com/1200x400', title: '轮播图4', description: '描述4' },
      { id: 5, image: 'https://via.placeholder.com/1200x400', title: '轮播图5', description: '描述5' },
    ],
    featuredCategories: [
      { id: 1, name: '电子产品', image: 'https://via.placeholder.com/200x200', link: ''},
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
      { id: 6, name: '商品6', price: 599.99, image: 'https://via.placeholder.com/300x300' },
    ],
    liveStreams: [
      { id: 1, title: '直播1', viewerCount: 1000, thumbnail: 'https://via.placeholder.com/300x200' },
      { id: 2, title: '直播2', viewerCount: 2000, thumbnail: 'https://via.placeholder.com/300x200' },
      { id: 3, title: '直播3', viewerCount: 3000, thumbnail: 'https://via.placeholder.com/300x200' },
      { id: 4, title: '直播4', viewerCount: 4000, thumbnail: 'https://via.placeholder.com/300x200' },
    ],
    navigationCategories: [
      {
        id: 1,
        name: '商品分类',
        link: '/categories',
        children: [
          {
            id: 11,
            name: '电子产品',
            link: '/categories/electronics',
            children: [
              { id: 111, name: '手机', link: '/categories/electronics/phones' },
              { id: 112, name: '电脑', link: '/categories/electronics/computers' },
            ]
          },
          {
            id: 12,
            name: '服装',
            link: '/categories/clothing',
            children: [
              { id: 121, name: '男装', link: '/categories/clothing/men' },
              { id: 122, name: '女装', link: '/categories/clothing/women' },
            ] 
          },
        ]
      },
      {
        id: 2,
        name: '拍卖',
        link: '/auctions',
        children: [
          { id: 21, name: '艺术品拍卖', link: '/auctions/art' },
          { id: 22, name: '珠宝拍卖', link: '/auctions/jewelry' },
        ]
      },
      {
        id: 3,
        name: '特价商品',
        link: '/bargain',
        children: [
          { id: 31, name: '今日特价', link: '/bargain/today' },
          { id: 32, name: '清仓甩卖', link: '/bargain/clearance' },
        ]
      },
      { id: 4, name: '新品上架', link: '/new-arrivals' },
      { id: 5, name: '品牌专区', link: '/brands' },
    ],
    popularBrands :['品牌A', '品牌B', '品牌C', '品牌D', '品牌E']
  };
};