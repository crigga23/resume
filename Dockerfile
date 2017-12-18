FROM ubuntu:16.04

#ENV HOME_DIR /opt/resume
RUN apt-get -yqq update && apt-get -yqq install curl
RUN mkdir -p /opt/resume

RUN curl -sL https://deb.nodesource.com/setup_9.x | /bin/bash
RUN apt-get -yqq install nodejs build-essential

ADD . / /opt/resume/
WORKDIR /opt/resume/

RUN rm -r ./node_modules
RUN npm install
RUN npm install @angular/cli

EXPOSE 4200
CMD ["npm", "start", "--host", "0.0.0.0"]