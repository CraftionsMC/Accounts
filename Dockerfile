FROM node:16
EXPOSE 5000
WORKDIR /craftions-accounts
COPY . /craftions-accounts
RUN rm -rf node_modules
RUN npm install
RUN npx webpack --mode production
ENTRYPOINT node server.js