const InputPrompt = require("../model/input-model")
const openai = require("../config/openai")
const mysql = require('mysql2');
const db = require('../config/db');

// Exemplo de consulta ao banco de dados

module.exports = {
    async sendText(req, res) {

        const openaiAI = openai.configuration()
        const inputModel = new InputPrompt(req.body)

        try {
            const response = await openaiAI.createCompletion(openai.textCompletion(inputModel))

            return res.status(200).json({
                sucess: true,
                data: response.data.choices[0].text
            })
        } catch (error) {
            return res.status(400).json({
                sucess: false,
                error: error.response ? error.response.data : 'Erro no servidor'
            })
        }
    },

    async getObjects(req, res) {
        try {
            const results = await new Promise((resolve, reject) => {
                db.query('SELECT * FROM objects', (error, results) => {
                    if (error) {
                        console.error('Não foi possível executar a consulta:', error);
                        return reject(error);
                    }
                    return resolve(results);
                });
            });
            return res.status(200).json(results);
        } catch (error) {
            return res.status(400).json({
                sucess: false,
                error: error.response ? error.response.data : 'Erro na busca dos dados do banco'
            });
        }
    }
}