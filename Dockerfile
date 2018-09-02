FROM mhart/alpine-node:8.11.4 as build
WORKDIR /usr/app
COPY . .
RUN npm install --only=production
RUN mv node_modules prod_modules
RUN npm install
ENV NODE_ENV production
RUN npm run build

FROM mhart/alpine-node:base-8.11.4
WORKDIR /usr/app
ENV NODE_ENV production
COPY --from=build /usr/app/prod_modules ./node_modules
COPY --from=build /usr/app/dist ./dist
COPY --from=build /usr/app/package.json ./package.json
COPY --from=build /usr/app/src/style.min.css ./src/style.min.css
EXPOSE 3007
CMD node dist/server.js