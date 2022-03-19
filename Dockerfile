FROM node:17-alpine3.14
WORKDIR .

COPY ["package.json","package-lock.json", "./"]
RUN npm i
COPY . .
CMD npm start