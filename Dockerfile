# Node.js 20をベースイメージとして使う
FROM node:20

WORKDIR /app

# パッケージインストール
COPY package.json package-lock.json ./
RUN npm install

# Prisma CLIをインストール
COPY prisma ./prisma
RUN npx prisma generate

COPY . .

EXPOSE 8080
EXPOSE 5555

CMD [ "sh", "-c", "npx prisma migrate deploy && npm run dev" ]