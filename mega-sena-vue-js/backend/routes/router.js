const router = require("express").Router()

function sorteio() {
    let array = []
    while (array.length < 6) {
        let numero = Math.floor(Math.random() * 50) + 1
        if (!array.includes(numero)) {
            array.push(numero)
        }
    }
    return array
}

router.get("/api-mega-sena/sorteio", (req, res) => {
    let resultado = sorteio()
    res.status(200).json({ resultado })
})

module.exports = router