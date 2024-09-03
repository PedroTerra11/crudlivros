const express = require("express")
const estudante_router = require("./routes/estudante_route.js")
const livro_router = require("./routes/livro_route.js")
const aluguel_router = require("./routes/aluguel_route.js")
const app = express()
const port = 5000

app.use(express.json())

app.use("/aluguel", aluguel_router)
app.use("/livro", livro_router)
app.use("/estudante", estudante_router)

app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})