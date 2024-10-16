// 模拟延迟
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 模拟商品数据库
const products = [
  {
    id: 1,
    name: "高级智能手机",
    price: 4999.00,
    stock: 100,
    image: 'https://via.placeholder.com/300x300?text=智能手机',
    isFeatured: true,
    images: [
      "https://via.placeholder.com/500x500?text=手机正面",
      "https://via.placeholder.com/500x500?text=手机背面",
      "https://via.placeholder.com/500x500?text=手机侧面",
    ],
    options: {
      颜色: ["黑色", "白色", "蓝色"],
      存储容量: ["128GB", "256GB", "512GB"]
    },
    description: "<p>这是一款高性能智能手机，搭载最新的处理器和先进的相机系统。</p><p>屏幕采用全面屏设计，色彩鲜艳，画质清晰。</p>",
    specifications: {
      屏幕: "6.7英寸 OLED",
      处理器: "最新旗舰芯片",
      摄像头: "后置三摄 + 前置单摄",
      电池: "5000mAh",
      系统: "最新移动操作系统"
    },
    rating: 4.7,
    ratingDistribution: {
      5: 70,
      4: 20,
      3: 5,
      2: 3,
      1: 2
    },
    reviews: [
      { id: 1, username: "用户A", avatar: "https://via.placeholder.com/50x50?text=A", rating: 5, comment: "非常好用的手机，性能强大，相机效果出色！" },
      { id: 2, username: "用户B", avatar: "https://via.placeholder.com/50x50?text=B", rating: 4, comment: "整体不错，但电池续航可以再提升一下。" },
      { id: 3, username: "用户C", avatar: "https://via.placeholder.com/50x50?text=C", rating: 5, comment: "设计很漂亮，手感很好，很满意这次的购买。" }
    ]
  },
  // 添加更多商品...
  {
    id: 2,
    name: "超薄笔记本电脑",
    price: 6999.00,
    stock: 50,
    image: 'https://via.placeholder.com/300x300?text=笔记本电脑',
    isFeatured: true,
    images: [
      "https://via.placeholder.com/500x500?text=手机正面",
      "https://via.placeholder.com/500x500?text=手机背面",
      "https://via.placeholder.com/500x500?text=手机侧面",
    ],
    // ... 其他详细信息
    options: {
      颜色: ["黑色", "白色", "蓝色"],
      存储容量: ["128GB", "256GB", "512GB"]
    },
    description: "<p>这是一款高性能智能手机，搭载最新的处理器和先进的相机系统。</p><p>屏幕采用全面屏设计，色彩鲜艳，画质清晰。</p>",
    specifications: {
      屏幕: "6.7英寸 OLED",
      处理器: "最新旗舰芯片",
      摄像头: "后置三摄 + 前置单摄",
      电池: "5000mAh",
      系统: "最新移动操作系统"
    },
    rating: 4.7,
    ratingDistribution: {
      5: 70,
      4: 20,
      3: 5,
      2: 3,
      1: 2
    },
    reviews: [
      { id: 1, username: "用户A", avatar: "https://via.placeholder.com/50x50?text=A", rating: 5, comment: "非常好用的手机，性能强大，相机效果出色！" },
      { id: 2, username: "用户B", avatar: "https://via.placeholder.com/50x50?text=B", rating: 4, comment: "整体不错，但电池续航可以再提升一下。" },
      { id: 3, username: "用户C", avatar: "https://via.placeholder.com/50x50?text=C", rating: 5, comment: "设计很漂亮，手感很好，很满意这次的购买。" }
    ]
  },
  {
    id: 3,
    name: "无线蓝牙耳机",
    price: 999.00,
    stock: 200,
    image: 'https://via.placeholder.com/300x300?text=蓝牙耳机',
    isFeatured: false,
    images: [
      "https://via.placeholder.com/500x500?text=手机正面",
      "https://via.placeholder.com/500x500?text=手机背面",
      "https://via.placeholder.com/500x500?text=手机侧面",
    ],
    // ... 其他详细信息
    options: {
      颜色: ["黑色", "白色", "蓝色"],
      存储容量: ["128GB", "256GB", "512GB"]
    },
    description: "<p>这是一款高性能智能手机，搭载最新的处理器和先进的相机系统。</p><p>屏幕采用全面屏设计，色彩鲜艳，画质清晰。</p>",
    specifications: {
      屏幕: "6.7英寸 OLED",
      处理器: "最新旗舰芯片",
      摄像头: "后置三摄 + 前置单摄",
      电池: "5000mAh",
      系统: "最新移动操作系统"
    },
    rating: 4.7,
    ratingDistribution: {
      5: 70,
      4: 20,
      3: 5,
      2: 3,
      1: 2
    },
    reviews: [
      { id: 1, username: "用户A", avatar: "https://via.placeholder.com/50x50?text=A", rating: 5, comment: "非常好用的手机，性能强大，相机效果出色！" },
      { id: 2, username: "用户B", avatar: "https://via.placeholder.com/50x50?text=B", rating: 4, comment: "整体不错，但电池续航可以再提升一下。" },
      { id: 3, username: "用户C", avatar: "https://via.placeholder.com/50x50?text=C", rating: 5, comment: "设计很漂亮，手感很好，很满意这次的购买。" }
    ]
  },
  // 可以继续添加更多商品...
];

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
      { id: 1, name: '电子产品', image: 'https://via.placeholder.com/200x200'},
      { id: 2, name: '服装', image: 'https://via.placeholder.com/200x200' },
      { id: 3, name: '家居', image: 'https://via.placeholder.com/200x200' },
      { id: 4, name: '食品', image: 'https://via.placeholder.com/200x200' },
      { id: 5, name: '美妆', image: 'https://via.placeholder.com/200x200' },
      { id: 6, name: '运动', image: 'https://via.placeholder.com/200x200' },
    ],
    featuredProducts: products
    .filter(product => product.isFeatured)
    .map(({ id, name, price, image }) => ({ id, name, price, image })),
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

export const fetchProductDetail = async (productId) => {
  await delay(300); // 模拟网络延迟
  
  const product = products.find(p => p.id === parseInt(productId));
  
  if (!product) {
    throw new Error('Product not found');
  }
  
  return product;
};
