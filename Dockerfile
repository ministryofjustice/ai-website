FROM node:23.6-alpine AS base-node

# This copies all files in our root to the working directory in the container
# it will ingore all files and directories defined in .dockerignore
COPY --chown=node:node ./ /home/node/
WORKDIR /home/node/

RUN chmod +x ./bin/app-install.sh



FROM base-node AS dev

RUN npm i nodemon -g

USER 1000

ENTRYPOINT ["ash", "-c", "/home/node/bin/app-install.sh"]



FROM base-node AS build-prod

RUN npm i

# Build the site
RUN npm run build

USER 1000

ENTRYPOINT ["ash", "-c", "npm run start"]
