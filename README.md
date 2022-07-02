# Rabbitmq-socketio-Nodejs-Reactjs


## About the application
It simulates a high-volume data input environment. It has a Nodejs publisher which publishes information to the queue. Rabbitmq is implemented as a message queue here. Another Nodejs backend is implemented as a subscriber which subscribes from the queue. The message is then filtered based upon the priority and sent to the client through socket.io.
Reactjs acts as a client.



### To run the app
1.Run docker-compose up
2.check localhost:3000


