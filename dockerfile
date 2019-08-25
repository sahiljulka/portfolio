FROM node:12.7.0-alpine as builder
WORKDIR /src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# To copy the files from build folder to directory where nginx could serve up the files
FROM nginx 
EXPOSE 80
COPY --from=builder  /src/app/dist/portfolio /usr/share/nginx/html