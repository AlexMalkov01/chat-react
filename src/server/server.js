import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {

    ws.on('message', (message) => {
        try {
            const parsedMessage = JSON.parse(message);
            console.log(`получено сообщение от ${parsedMessage.userName}: ${parsedMessage.message}`);

            wss.clients.forEach((client) => {
                if (client.readyState === ws.OPEN) {
                    client.send(JSON.stringify(parsedMessage));
                }
            });
        } catch (error) {
            console.error('Ошибка при обработке сообщения:', error);
        }
    });

    ws.on('close', () => {
        console.log('Соединение закрыто');
    });
});

