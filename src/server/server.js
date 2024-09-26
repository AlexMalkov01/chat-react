import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Новое подключение');

    ws.on('message', (message) => {
        try {
            const parsedMessage = JSON.parse(message);
            console.log(`получено сообщение от ${parsedMessage.userName}: ${parsedMessage.message}`);

            // Отправляем сообщение всем клиентам, включая отправителя
            wss.clients.forEach((client) => {
                if (client.readyState === ws.OPEN) {
                    client.send(JSON.stringify(parsedMessage));
                }
            });
        } catch (error) {
            console.error('Ошибка при обработке сообщения:', error);
        }
    });
});

