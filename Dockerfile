# Node.js 20をベースイメージとして使用
FROM node:20

WORKDIR /app

# node_modules を除外するため package.json だけコピーしてインストール
COPY package.json package-lock.json ./
RUN npm install

# 残りのソースコードをコピー
COPY . .

# Prisma のスキーマを生成
RUN npx prisma generate

EXPOSE 8080
EXPOSE 5555

CMD [ "sh", "-c", "npx prisma migrate deploy && npm run dev" ]