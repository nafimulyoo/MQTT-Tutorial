const express = require('express');
const mqtt = require('mqtt');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const port = 3000;

// MQTT Broker
const mqttClient = mqtt.connect('tcp://broker.emqx.io');
const topic = 'berkembang-hmft/mqtt-tutorial';

// WebSocket server
const wss = new WebSocket.Server({ noServer: true });

let connectedClients = [];

mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker');
  mqttClient.subscribe(topic, (err) => {
    if (!err) {
      console.log(`Subscribed to topic "${topic}"`);
    }
  });
});

// Forward MQTT messages to WebSocket clients
mqttClient.on('message', (t, message) => {
  if (t === topic) {
    console.log(`Message from MQTT: ${message.toString()}`);
    connectedClients.forEach(ws => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(message.toString());
      }
    });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');
  connectedClients.push(ws);

  ws.on('message', (message) => {
    console.log(`Received message from WebSocket client: ${message}`);
    mqttClient.publish(topic, message);
  });

  ws.on('close', () => {
    connectedClients = connectedClients.filter(client => client !== ws);
  });
});
