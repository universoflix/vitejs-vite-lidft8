import express from 'express';
import mysql from 'mysql2';
import { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

const db = mysql.createConnection({
    host: 'seu-host-mysql',
    user: 'seu-usuario-mysql',
    password: 'sua-senha-mysql',
    database: 'seu-banco-de-dados-mysql'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL: ' + err);
    } else {
        console.log('Conexão bem-sucedida com o MySQL');
    }
});

app.post('/cadastro', (req: Request, res: Response) => {
    const { nome, email } = req.body;

    const sql = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';
    db.query(sql, [nome, email], (err, result) => {
        if (err) {
            console.error('Erro ao inserir no MySQL: ' + err);
            res.status(500).send('Erro ao cadastrar.');
        } else {
            console.log('Registro inserido no MySQL');
            res.status(201).send('Cadastro realizado com sucesso');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
