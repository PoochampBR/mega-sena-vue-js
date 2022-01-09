const servidor = require("express")()
const router = require("./routes/router")
const cors = require("cors")

servidor.use(cors())
servidor.use(router)

servidor.listen(4000)