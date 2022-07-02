# Rabbitmq-socket.io-Nodejs-Reactjs


## About the application Architecture
It simulates a high-volume data input environment. It has a Nodejs publisher which publishes information to the queue. Rabbitmq is implemented as a message queue here. Another Nodejs backend is implemented as a subscriber which subscribes from the queue. The message is then filtered based upon the priority and sent to the client through socket.io.
Reactjs acts as a client.



### To run the app
1. Clone the repo on your local machine </br> 
2. Run docker-compose up </br> 
3. check http://localhost:3000


## Performing health checks 

1. for publisher check http://localhost:4000/v1/api/health-check </br>
2. for subscriber check http://localhost:4001/v1/api/health-check
