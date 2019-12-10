var app = require('../../../express');
var clientModel = require('../model/client.model.server');

app.get('/api/clients', findClients);
app.get('/api/client/:clientName', findClient);

function findClients(req, res) {
  clientModel.findClients().then(
    function(clients) {
      res.send(clients);
    }
  )
}

function findClient(req, res) {
  clientModel.findClient(req.params.clientName).then(
    function(client) {
      if(client.length === 0) {
        console.log("Client Not Found");
        res.send("Client Not Found");
      } else {
        res.send(client);
      }
    }
  )
}
