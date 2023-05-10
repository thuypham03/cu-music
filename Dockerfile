FROM node:18.14.2

RUN mkdir /usr/app
WORKDIR /usr/app

COPY . .

RUN npm install --legacy-peer-deps

RUN npm run build

CMD npm run dev