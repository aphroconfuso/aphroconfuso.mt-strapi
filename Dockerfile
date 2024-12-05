FROM node:18.20.5-alpine as build
# Installing libvips-dev for sharp Compatability
# RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
ENV NODE_ENV=production
WORKDIR /opt/
COPY ./package.json ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm install -g npm@10.8.2
RUN npm i --omit=dev --verbose
WORKDIR /opt/app
COPY ./ .
RUN npm run build

FROM node:18.20.5-alpine
# Installing libvips-dev for sharp Compatability
# RUN apk add --no-cache vips-dev
ENV NODE_ENV=production
WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
ENV PATH /opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY --from=build /opt/app ./
EXPOSE 1337
CMD ["npm", "run","start"]
