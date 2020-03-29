const express = require('express');

const app = express();

/*
# Métodos HTTP
GET: Buscar info no Backend
POST: Criar uma info no backend
PUT: Alterar info no backend
DELETE: Deletar info no backend
*/

/*
# Tipos de parâmetros


*/

app.get('/users', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack 11',
        aluno: 'Bruno Lessa'
    });
});

app.listen(3333);