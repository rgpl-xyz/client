################################
### create build environment ###
################################

# get latest node
FROM node:16 as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json /app/
RUN npm install -g @angular/cli@14
RUN npm install

# copy working folder to /app
COPY . /app

# generate dist
RUN npm run build-prod

# generate self-signed certificates
FROM nginx:alpine
RUN apk update && apk add --no-cache openssl && \
    openssl req \
    -newkey rsa:2048 -nodes -sha256 -x509 \
    -out /etc/nginx/localhost.crt \
    -keyout /etc/nginx/localhost.key \
    -days 3650 \
    -subj '/CN=localhost' \
    -extensions EXT \
    -config <(printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/client /usr/share/nginx/html

# expose port
EXPOSE 8080

# run nginx
CMD ["nginx", "-g", "daemon off;"]
