

const registerUser = (req, res) => {
    res.json({ message: "register a user" })
}

const loginUser = (req, res) => {
    res.json({ message: "login a user" })
}

module.exports = { registerUser, loginUser };