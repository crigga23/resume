FROM node:slim
ENV HOME_DIR /opt/resume
RUN mkdir -p ${HOME_DIR}

ADD . / ${HOME_DIR}/
WORKDIR ${HOME_DIR}

RUN rm -r ./node_modules && \
  npm install

EXPOSE 4200
CMD ["npm", "start", "--host", "0.0.0.0"]