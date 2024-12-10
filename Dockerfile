FROM node:18.20.5-alpine as build
ENV NODE_ENV=production
WORKDIR /opt/
COPY ./package.json ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm install -g npm@10.9.2
RUN npm ci --omit=dev --verbose
WORKDIR /opt/app
COPY ./ .
RUN npm run build
FROM node:18.20.5-alpine
ENV NODE_ENV=production
WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
ENV PATH /opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY --from=build /opt/app ./
EXPOSE 1337
CMD ["npm", "run", "start"]
