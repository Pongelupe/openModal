FROM python:3.7.5-slim

RUN apt-get update || : && apt-get install -y git nodejs npm

WORKDIR /app
COPY . /app
RUN npm install && \
    cd client && npm install && \
    npm remove csstools/normalize.css && \
    npm install csstools/normalize.css && \
    npm run build && cd .. && \
    pip install -r requirements.txt
EXPOSE 7000/tcp 
CMD ["bash", "./start.sh"]
