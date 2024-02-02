# 기반 이미지
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 빌드된 파일들을 이미지로 복사
COPY ./.next/standalone ./
#COPY ./public ./public
#COPY ./.next/static ./static

# 시스템 사용자 및 그룹 설정
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# 애플리케이션 실행을 위한 사용자 권한 설정
USER nextjs

# 애플리케이션에 할당할 포트
EXPOSE 3000

# 한국 시간으로 설정
ENV TZ Asia/Seoul

# 애플리케이션 실행 명령어
CMD ["node", "server.js"]
