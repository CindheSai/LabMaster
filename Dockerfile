# LabMaster — static host for the standalone (double-click) build
FROM node:24-alpine

WORKDIR /app

# Refresh OS packages in this stage before dropping privileges
RUN apk upgrade --no-cache

COPY serve-standalone.mjs ./
COPY dist/LabMaster ./public

ENV PORT=3000
ENV NODE_ENV=production
EXPOSE 3000

USER node

CMD ["node", "serve-standalone.mjs"]
