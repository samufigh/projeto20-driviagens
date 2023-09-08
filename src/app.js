import express from "express"
import "express-async-errors"
import router from "./routes/index.routes.js"
import errorHandlingMiddleware from "./middlewares/errorsMiddleware.js"

const app = express()

app.use(express.json())
app.use(router)
app.use(errorHandlingMiddleware)

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})