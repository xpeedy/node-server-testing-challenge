const db = require("../../data/connection")

function get() {
    return db("users")
}

function getById() {
    return db("users")
}

async function add(user) {
    const [ id ] = await db("users")
        .insert(user)
    return db("users")
        .where({ id })
        .first()
}

function remove(id) {
    return db("users")
    .where("id",id)
    .del()
}

module.exports = {
    get,
    getById,
    add,
    remove
}
