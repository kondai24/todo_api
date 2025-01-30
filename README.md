# Task Management API

このプロジェクトは、Prisma と Docker を使用したタスク管理 API です。
このプロジェクトのセットアップ方法は以下の通りです。

## 環境構築手順

### 1. リポジトリをクローン

このリポジトリをクローンする

### 2. .env ファイルを作成

プロジェクトルートに .env ファイルを作成し、以下の内容を記述してください。

```.env
DATABASE_URL=file:./prisma/dev.db
```

### 3. Docker を使用して環境を構築

以下のコマンドを実行して、Docker コンテナを起動します。

```sh
docker-compose up -d --build
```

このコマンドにより、必要な依存関係のインストール、データベースのセットアップ、API サーバーの起動が自動的に行われます。

## 開発用コマンド

## コンテナの停止

```sh
docker-compose down
```

### ログの確認

```sh
docker-compose logs -f
```

### コンテナの再起動（変更を適用）

```sh
docker-compose up -d --build
```

## API エンドポイント

| メソッド | エンドポイント      | 説明                   |
| -------- | ------------------- | ---------------------- |
| GET      | `/api/v1/tasks`     | すべてのタスクを取得   |
| GET      | `/api/v1/tasks/:id` | 指定 ID のタスクを取得 |
| POST     | `/api/v1/tasks`     | 新しいタスクを作成     |
| PUT      | `/api/v1/tasks/:id` | タスクを更新           |
| DELETE   | `/api/v1/tasks/:id` | タスクを削除           |
