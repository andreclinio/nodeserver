
const ping = (req, h) => {
    console.log("PING!");
    return h.response("ping").code(200);
}

module.exports = {
    ping
}
