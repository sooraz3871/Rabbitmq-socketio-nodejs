# Rabbitmq-socket.io-Nodejs-Reactjs


## About the application Architecture
It simulates a high-volume data input environment. It has a Nodejs publisher which publishes information to the queue. Rabbitmq is implemented as a message queue here. Another Nodejs backend is implemented as a subscriber which subscribes from the queue. The message is then filtered based upon the priority and sent to the client through socket.io.
Reactjs acts as a client.



### To run the app
1. Clone the repo on your local machine - master branch </br> 
2. Make sure your local machine has the Docker running.
3. Run docker-compose up </br> 
4. Check the terminal logs if rabbitmq is connected and authorized for guest. 
5. Goto http://localhost:15673
6. login with username and password - guest 
7. create a new exchange  'random_message_exchange'
8. create a new queue 'random_message_queue'
9. bind the exchange with the queue with the routing key 'AA2022'
10. You should see the published messages in the queue after some time in the rabbitmq management ui
11. check http://localhost:3000



## Performing health checks 

1. for publisher check http://localhost:4000/v1/api/health-check </br>
2. for subscriber check http://localhost:4001/v1/api/health-check
