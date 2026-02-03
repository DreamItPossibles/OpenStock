# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 环境变量：这些值仅用于通过构建时的语法检查
ENV MONGODB_URI="mongodb://127.0.0.1:27017/build_dummy"
ENV NEXT_TELEMETRY_DISABLED=1
ENV BETTER_AUTH_SECRET="placeholder_for_build_only_123456"
ENV BETTER_AUTH_URL="http://localhost:3000"
# 告诉代码这是构建阶段，跳过实际的数据库连接逻辑（如果代码中有处理）
ENV NEXT_PHASE=phase-production-build

# 执行构建：增加一个环境变量提示，有时 Next.js 需要这些来识别环境
RUN NEXT_PUBLIC_FINNHUB_API_KEY=dummy pnpm build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 只拷贝编译后的产物
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# 启动命令
CMD ["npm", "start"]
