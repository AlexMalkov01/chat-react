import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let count = 0

wss.on('connection', (ws) => {
    count +=1
    ws.on('message', (message) => {
        try {
            const parsedMessage = JSON.parse(message);
            console.log(`получено сообщение от ${parsedMessage.userName}: ${parsedMessage.message}`);

            wss.clients.forEach((client) => {
                if (client.readyState === ws.OPEN) {
                    client.send(JSON.stringify({...parsedMessage,count:count}));
                }
            });
        } catch (error) {
            console.error('Ошибка при обработке сообщения:', error);
        }
    });

    ws.on('close', () => {
        count-=1
        console.log('Соединение закрыто');
    });
});

