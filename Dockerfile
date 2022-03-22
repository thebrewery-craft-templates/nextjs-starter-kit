# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM docker.io/node:lts-alpine AS base

RUN mkdir -p /src
WORKDIR /src

# To handle 'not get uid/gid'
RUN npm config set unsafe-perm true

# Copy local packages
COPY . /src

# Install dependencies
RUN yarn

# Build static web
RUN yarn build

ENV NODE_ENV production
# Tell Docker about the port we'll run on.
EXPOSE 3000
# Run the next server
CMD ["yarn", "start"]