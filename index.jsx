const client = require('socket.io')().listen(4000).sockets;


const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:4000';
const mongo = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
    // Use connect method to connect to the server
    await mongo.connect();
    console.log('Connected successfully to server');
    const db = mongo.db(dbName);
    const collection = db.collection('documents');
  
    // the following code examples can be pasted here...
  
    return 'done.';
  }

  main().then(console.log)

// Connect to mongo
// mongo.connect('mongodb://127.0.0.1/mongochat', function(err, db){
//     if(err){
//         throw err;
//     }

//     console.log('MongoDB connected...');

//     // Connect to Socket.io
//     client.on('connection', function(socket){
//         let chat = db.collection('chats');

//         // Create function to send status
//         sendStatus = function(s){
//             socket.emit('status', s);
//         }

//         // Get chats from mongo collection
//         chat.find().limit(100).sort({_id:1}).toArray(function(err, res){
//             if(err){
//                 throw err;
//             }

//             // Emit the messages
//             socket.emit('output', res);
//         });

//         // Handle input events
//         socket.on('input', function(data){
//             let name = data.name;
//             let message = data.message;

//             // Check for name and message
//             if(name == '' || message == ''){
//                 // Send error status
//                 sendStatus('Please enter a name and message');
//             } else {
//                 // Insert message
//                 chat.insert({name: name, message: message}, function(){
//                     client.emit('output', [data]);

//                     // Send status object
//                     sendStatus({
//                         message: 'Message sent',
//                         clear: true
//                     });
//                 });
//             }
//         });

//         // Handle clear
//         socket.on('clear', function(data){
//             // Remove all chats from collection
//             chat.remove({}, function(){
//                 // Emit cleared
//                 socket.emit('cleared');
//             });
//         });
//     });
// });