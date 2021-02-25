FROM node:12.13.0-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn install
EXPOSE 8080
CMD ["yarn", "run", "build"]