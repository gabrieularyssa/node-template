exports.JWTChecker = {
    user : () => {
        console.log("Middleware: Checando token de usuário")
    },
    admin : () => {
        console.log("Middleware: Checando token de admin")
    }
}