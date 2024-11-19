const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(bodyParser.json());

const saveToFile = (filename, data) => {
    fs.appendFile(filename, JSON.stringify({ data }) + ',' + '\n\n', (err) => {
        if (err) {
            console.error(`Erro ao salvar no arquivo ${filename}:`, err);
        } else {
            console.log(`Dados salvos no arquivo ${filename}`);
        }
    });
};
app.post('/testBots', (req, res) => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formattedDate = `${day}-${month}-${year}_${hours}h-${minutes}m-${seconds}s`;
    console.log('Recebido evento da BLIP:', req.body);
    saveToFile(`LOG_BLIP_${formattedDate}.json`, req.body);
    res.status(200).send('Evento recebido');
});

app.post('/cartReminder', (req, res) => {
    console.log('Recebido evento de cartReminder:', req.body);
    saveToFile('cartReminder.json', req.body);
    res.status(200).send('Evento recebido');
});

app.post('/orderCreated', (req, res) => {
    console.log('Recebido evento de orderCreated:', req.body);
    saveToFile('orderCreated.json', req.body);
    res.status(200).send('Evento recebido');
});

app.post('/orderUpdated', (req, res) => {
    console.log('Recebido evento de orderUpdated:', req.body);
    saveToFile('orderUpdated.json', req.body);
    res.status(200).send('Evento recebido');
});

app.post('/orderCanceled', (req, res) => {
    console.log('Recebido evento de orderUpdated:', req.body);
    saveToFile('orderCanceled.json', req.body);
    res.status(200).send('Evento recebido');
});

app.post('/orderPaid', (req, res) => {
    console.log('Recebido evento de orderUpdated:', req.body);
    saveToFile('orderPaid.json', req.body);
    res.status(200).send('Evento recebido');
});

app.post('/orderfulfilled', (req, res) => {
    console.log('Recebido evento de orderFulfilled:', req.body);
    saveToFile('orderFulfilled.json', req.body);
    res.status(200).send('Evento recebido');
});

app.post('/orderPaid', (req, res) => {
    console.log('Recebido evento de orderPaid:', req.body);
    saveToFile('orderPaid.json', req.body);
    res.status(200).send('Evento recebido');
});

app.post('/testeSchedule', (req, res) => {
    console.log('Recebido evento de testeSchedule:', req.body);
    saveToFile('testeSchedule.json', req.body);
    res.status(200).send('Evento recebido');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
