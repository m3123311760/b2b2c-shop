# B2B2C商城项目-后端设计方案

## API 基础信息

- RESTful API 基础URL: `https://api.b2b2c-mall.com/v1`
- GraphQL API 端点: `https://api.b2b2c-mall.com/graphql`
- 认证方式: JWT (JSON Web Token)
- 数据格式: JSON
- 错误处理: 使用标准HTTP状态码，错误详情在响应体中提供

## 技术栈和外部服务

### API网关
- 技术: Go (使用gin或echo框架)
- 外部服务:
  - Redis (用于缓存和速率限制)

### 微服务
1. 用户服务
   - 技术: Java Spring Boot
   - 外部服务:
     - MySQL (用户数据存储)
     - Redis (缓存)
     - Kafka (事件发布)

2. 商品服务
   - 技术: Java Spring Boot
   - 外部服务:
     - MySQL (商品数据存储)
     - Elasticsearch (商品搜索)
     - Redis (缓存)
     - MinIO (商品图片存储)

3. 订单服务
   - 技术: Java Spring Boot
   - 外部服务:
     - MySQL (订单数据存储)
     - Redis (缓存)
     - Kafka (订单事件)

4. 支付服务
   - 技术: Go
   - 外部服务:
     - MySQL (支付记录)
     - Redis (缓存)
     - 第三方支付网关

5. 直播拍卖服务
   - 技术: Go
   - 外部服务:
     - MySQL (拍卖数据)
     - Redis (实时数据和缓存)
     - Kafka (事件流)

6. 商家服务
   - 技术: Java Spring Boot
   - 外部服务:
     - MySQL (商家数据)
     - Redis (缓存)

7. 管理后台服务
   - 技术: Java Spring Boot
   - 外部服务:
     - MySQL (系统数据)
     - Redis (缓存)
     - Elasticsearch (日志和搜索)

## RESTful API 端点设计

### 1. 用户管理

#### 1.1 用户注册
- 端点: `/users/register`
- 方法: POST
- 请求体:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string",
    "phone": "string"
  }
  ```
- 响应: 201 Created

#### 1.2 用户登录
- 端点: `/users/login`
- 方法: POST
- 请求体:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- 响应: 200 OK
  ```json
  {
    "token": "string",
    "user": {
      "id": "string",
      "username": "string",
      "email": "string"
    }
  }
  ```

#### 1.3 获取用户信息
- 端点: `/users/{userId}`
- 方法: GET
- 认证: 需要
- 响应: 200 OK

#### 1.4 更新用户信息
- 端点: `/users/{userId}`
- 方法: PUT
- 认证: 需要
- 请求体: 包含要更新的字段
- 响应: 200 OK

### 2. 商品管理

#### 2.1 获取商品列表
- 端点: `/products`
- 方法: GET
- 查询参数: 
  - `category`: 商品类别
  - `page`: 页码
  - `limit`: 每页数量
  - `sort`: 排序方式
- 响应: 200 OK

#### 2.2 获取商品详情
- 端点: `/products/{productId}`
- 方法: GET
- 响应: 200 OK

#### 2.3 创建商品 (商家使用)
- 端点: `/products`
- 方法: POST
- 认证: 需要 (商家权限)
- 请求体: 商品详细信息
- 响应: 201 Created

#### 2.4 更新商品 (商家使用)
- 端点: `/products/{productId}`
- 方法: PUT
- 认证: 需要 (商家权限)
- 请求体: 更新的商品信息
- 响应: 200 OK

#### 2.5 删除商品 (商家使用)
- 端点: `/products/{productId}`
- 方法: DELETE
- 认证: 需要 (商家权限)
- 响应: 204 No Content

### 3. 购物车

#### 3.1 获取购物车
- 端点: `/cart`
- 方法: GET
- 认证: 需要
- 响应: 200 OK

#### 3.2 添加商品到购物车
- 端点: `/cart/items`
- 方法: POST
- 认证: 需要
- 请求体:
  ```json
  {
    "productId": "string",
    "quantity": number
  }
  ```
- 响应: 201 Created

#### 3.3 更新购物车商品数量
- 端点: `/cart/items/{itemId}`
- 方法: PUT
- 认证: 需要
- 请求体:
  ```json
  {
    "quantity": number
  }
  ```
- 响应: 200 OK

#### 3.4 删除购物车商品
- 端点: `/cart/items/{itemId}`
- 方法: DELETE
- 认证: 需要
- 响应: 204 No Content

### 4. 订单管理

#### 4.1 创建订单
- 端点: `/orders`
- 方法: POST
- 认证: 需要
- 请求体: 订单信息（商品列表、地址等）
- 响应: 201 Created

#### 4.2 获取订单列表
- 端点: `/orders`
- 方法: GET
- 认证: 需要
- 查询参数: 
  - `status`: 订单状态
  - `page`: 页码
  - `limit`: 每页数量
- 响应: 200 OK

#### 4.3 获取订单详情
- 端点: `/orders/{orderId}`
- 方法: GET
- 认证: 需要
- 响应: 200 OK

#### 4.4 取消订单
- 端点: `/orders/{orderId}/cancel`
- 方法: POST
- 认证: 需要
- 响应: 200 OK

### 5. 支付

#### 5.1 创建支付
- 端点: `/payments`
- 方法: POST
- 认证: 需要
- 请求体: 
  ```json
  {
    "orderId": "string",
    "paymentMethod": "string"
  }
  ```
- 响应: 200 OK （返回支付链接或信息）

#### 5.2 查询支付状态
- 端点: `/payments/{paymentId}`
- 方法: GET
- 认证: 需要
- 响应: 200 OK

### 6. 直播和拍卖

#### 6.1 获取直播列表
- 端点: `/livestreams`
- 方法: GET
- 查询参数:
  - `status`: 直播状态
  - `page`: 页码
  - `limit`: 每页数量
- 响应: 200 OK

#### 6.2 获取直播详情
- 端点: `/livestreams/{livestreamId}`
- 方法: GET
- 响应: 200 OK

#### 6.3 创建拍卖
- 端点: `/auctions`
- 方法: POST
- 认证: 需要 (商家权限)
- 请求体: 拍卖信息（商品、起拍价、时间等）
- 响应: 201 Created

#### 6.4 获取拍卖信息
- 端点: `/auctions/{auctionId}`
- 方法: GET
- 响应: 200 OK

#### 6.5 提交竞价
- 端点: `/auctions/{auctionId}/bids`
- 方法: POST
- 认证: 需要
- 请求体:
  ```json
  {
    "amount": number
  }
  ```
- 响应: 201 Created

### 7. 评价和评论

#### 7.1 提交商品评价
- 端点: `/products/{productId}/reviews`
- 方法: POST
- 认证: 需要
- 请求体: 评价内容和评分
- 响应: 201 Created

#### 7.2 获取商品评价列表
- 端点: `/products/{productId}/reviews`
- 方法: GET
- 查询参数:
  - `page`: 页码
  - `limit`: 每页数量
- 响应: 200 OK

### 8. 商家管理 (B端)

#### 8.1 商家注册
- 端点: `/merchants/register`
- 方法: POST
- 请求体: 商家信息
- 响应: 201 Created

#### 8.2 商家登录
- 端点: `/merchants/login`
- 方法: POST
- 请求体: 登录信息
- 响应: 200 OK （返回JWT token）

#### 8.3 获取商家信息
- 端点: `/merchants/{merchantId}`
- 方法: GET
- 认证: 需要 (商家权限)
- 响应: 200 OK

#### 8.4 更新商家信息
- 端点: `/merchants/{merchantId}`
- 方法: PUT
- 认证: 需要 (商家权限)
- 请求体: 更新的商家信息
- 响应: 200 OK

### 9. 管理后台 (总管理)

#### 9.1 获取用户列表
- 端点: `/admin/users`
- 方法: GET
- 认证: 需要 (管理员权限)
- 查询参数: 过滤和分页
- 响应: 200 OK

#### 9.2 获取商家列表
- 端点: `/admin/merchants`
- 方法: GET
- 认证: 需要 (管理员权限)
- 查询参数: 过滤和分页
- 响应: 200 OK

#### 9.3 审核商家申请
- 端点: `/admin/merchants/{merchantId}/approve`
- 方法: POST
- 认证: 需要 (管理员权限)
- 响应: 200 OK

#### 9.4 查看系统日志
- 端点: `/admin/logs`
- 方法: GET
- 认证: 需要 (管理员权限)
- 查询参数: 时间范围、日志类型等
- 响应: 200 OK

## GraphQL API

GraphQL API主要用于复杂的数据查询，特别是需要在一个请求中获取多个资源的场景。

### 端点
- URL: `https://api.b2b2c-mall.com/graphql`
- 方法: POST

### 主要查询

1. 获取商品详情及相关信息
```graphql
query getProductDetails($productId: ID!) {
  product(id: $productId) {
    id
    name
    description
    price
    stock
    category {
      id
      name
    }
    merchant {
      id
      name
    }
    reviews {
      id
      rating
      comment
      user {
        id
        username
      }
    }
  }
}
```

2. 获取用户订单历史及详情
```graphql
query getUserOrderHistory($userId: ID!) {
  user(id: $userId) {
    id
    username
    orders {
      id
      status
      totalAmount
      createdAt
      items {
        product {
          id
          name
          price
        }
        quantity
      }
    }
  }
}
```

3. 获取直播拍卖信息
```graphql
query getLiveAuctionDetails($auctionId: ID!) {
  auction(id: $auctionId) {
    id
    status
    startTime
    endTime
    currentPrice
    product {
      id
      name
      description
    }
    bids {
      amount
      user {
        id
        username
      }
      createdAt
    }
  }
}
```

### 主要变更

1. 创建订单
```graphql
mutation createOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
    status
    totalAmount
    items {
      product {
        id
        name
      }
      quantity
    }
  }
}
```

2. 更新商品信息
```graphql
mutation updateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    id
    name
    description
    price
    stock
  }
}
```

### 技术实现
- 使用 Java Spring Boot 与 graphql-java 库实现
- 外部服务:
  - MySQL (数据存储)
  - Redis (缓存查询结果)

## WebSocket API

### 1. 实时竞价

- 连接URL: `wss://api.b2b2c-mall.com/v1/ws/auctions/{auctionId}`
- 认证: 通过URL参数传递JWT token

#### 事件类型:
1. 新竞价 (server -> client)
2. 竞价成功 (server -> client)
3. 竞价失败 (server -> client)
4. 拍卖结束 (server -> client)

### 2. 直播聊天

- 连接URL: `wss://api.b2b2c-mall.com/v1/ws/livestreams/{livestreamId}/chat`
- 认证: 通过URL参数传递JWT token

#### 事件类型:
1. 新消息 (双向)
2. 用户加入/离开 (server -> client)
3. 直播状态更新 (server -> client)

## 注意事项

1. 所有API都应实现适当的错误处理和验证。
2. 敏感操作应该使用HTTPS。
3. 实现速率限制以防止API滥用。
4. 对于大量数据的请求，考虑实现分页。
5. 使用缓存来提高频繁访问的数据的响应速度。
6. 实现日志记录以便于调试和监控。
7. GraphQL API应注意查询复杂度，防止过于复杂的查询影响系统性能。
8. 考虑使用数据加载器（如DataLoader）优化GraphQL查询中的N+1问题。

## 外部服务集成

1. MySQL
   - 用途: 主要数据存储
   - 实现: 使用 Java 服务的 JPA/Hibernate，Go 服务的 GORM

2. Redis
   - 用途: 缓存、会话存储、限流
   - 实现: 使用 Spring Data Redis (Java) 和 go-redis 库 (Go)

3. Elasticsearch
   - 用途: 商品搜索、日志分析
   - 实现: 使用 Spring Data Elasticsearch (Java) 和 olivere/elastic 库 (Go)

4. Kafka
   - 用途: 事件流、服务间通信
   - 实现: 使用 Spring Kafka (Java) 和 Shopify/sarama 库 (Go)

5. MinIO
   - 用途: 对象存储（如商品图片）
   - 实现: 使用官方 SDK

6. 第三方支付网关
   - 用途: 处理支付
   - 实现: 根据具体选择的支付服务商提供的 SDK 或 API

这个更新后的API设计文档现在包括了GraphQL API的设计，明确了每个服务使用的技术栈，并详细说明了需要集成的外部服务。这个设计充分考虑了复杂查询的需求，同时保持了RESTful API的简洁性。通过使用不同的技术栈（Java Spring Boot和Go）来实现不同的服务，可以根据每个服务的特点选择最适合的技术。

在实施过程中，需要特别注意服务之间的通信、数据一致性以及性能优化。例如，可以考虑使用服务网格（如Istio）来管理服务间通信，使用分布式事务来确保跨服务操作的一致性，并充分利用缓存和消息队列来优化性能。
