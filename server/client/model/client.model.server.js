var mongoose = require('mongoose');
var clientSchema = require('./client.schema.server');
var Client = mongoose.model('Client', clientSchema);
Client.findClients = findClients;
Client.findClient = findClient;
module.exports = Client;

function findClients() {
  return Client.find({});
}

function findClient(clientName) {
  console.log("Client Name: " + clientName);
  return Client.find({"name": clientName})
}
