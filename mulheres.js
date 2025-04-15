const express = require('express')
const router = express.Router()

const app = express() 
const porta = 3333

const mulheres = [
    {
        nome: "Rayssa Oliveira",
        imagem: "https://github.com/simaraconceicao.png",
        minibio: "Desenvolvedora"
    },
     {
        nome: "Gaby",
        imagem: "https://github.com/simaraconceicao.png",
        minibio: "Desenvolvedora"
     },
     {
        nome: "Francisca",
        imagem: "https://github.com/simaraconceicao.png",
        minibio: "Influencer e Desenvolvedora"
     }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)