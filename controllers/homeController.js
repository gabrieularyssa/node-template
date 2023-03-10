

exports.paginaInicial = (req, res) => {
    res.send(`<form action="/" method="POST">
    Nome do cliente: <input type="text" name="qualquercoisa"><br>
    <button>Olá</button>` )
}

exports.postTest = (req, res) => {
    res.send('oi, eu sou o post')
}

