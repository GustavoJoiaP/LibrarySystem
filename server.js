import app from './src/app.js'

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Servidor estudando em http://localhost:${port}`)
})
