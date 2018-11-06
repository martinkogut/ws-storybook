FROM node AS build

WORKDIR /app
COPY . .
RUN yarn install
CMD ["npm run storybook-build"]

FROM nginx:stable
COPY --from=build /app/.out/ /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
