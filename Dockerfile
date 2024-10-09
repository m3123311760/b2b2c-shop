# 使用 Node.js 作为基础镜像
FROM node:lts

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制所有文件到工作目录
COPY . .

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["npm", "run", "server"]
