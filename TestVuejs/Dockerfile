FROM node:11.10.0
RUN apt-get update -y && \
    apt-get install -y \
    apt-transport-https \
    joe \
    procps && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update -y && \   
    apt-get install -y \
    yarn && \
    yarn global add @gridsome/cli
    
ENV APP_DIR=/code
WORKDIR $APP_DIR

ADD package.json package.json
ADD yarn.lock yarn.lock
RUN yarn install
RUN gridsome create my-gridsome-site 
ADD . $APP_DIR

CMD [ "node", "server.js" ]
