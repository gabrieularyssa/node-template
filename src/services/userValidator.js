userValidator = (user) => {
    if (user.name === "Rodrigo") throw TypeError
}

module.exports = userValidator