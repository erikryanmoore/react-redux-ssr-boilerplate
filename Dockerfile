FROM node:10-alpine

WORKDIR /app
RUN npm i -g yarn@1.13.0
COPY package.json yarn.lock ./
RUN yarn
COPY . .
EXPOSE 3000

RUN yarn prod
CMD ["npm", "run", "start"]
