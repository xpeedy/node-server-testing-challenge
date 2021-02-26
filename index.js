const server = require("./api/server")

const port = process.env.PORT || 5000
server.listen(`server runnit on port: ${port}`)