const Users = require("./users-model")
const db = require("../../data/connection")

const tania = {
    name:"tania",
    username:"lei"
}

it("test is working",() => {
    expect(1).toBe(1)
})

it("correct enviroment",() => {
    expect(process.env.DB_ENV).toBe("testing")
})

beforeAll(async () => [
    await db.migrate.rollback(),
    await db.migrate.latest()
])

beforeEach(async () => {
    await db("users").truncate()
})

afterAll(async () => {
    await db.destroy()
})

describe("users model", () => {
    describe("get function",() => {
        it("gets an array with all the users",async () => {
            let allUsers
            await Users.get()
            allUsers = await db("users")
            expect(allUsers).toHaveLength(0)
        })
        it("get values of users correctly", async () => {
            const [id] = await db("users").insert(tania)
            const user = await db("users").where({id}).first()
            expect(user).toMatchObject({id:1,...tania})
        })
    })

    describe("add function", () => {
        it("can add new user",async () => {
            const newUser = await Users.add(tania)
            expect(newUser).toMatchObject({id:1,...tania})
        })
        it("can add user with correct values", async () => {
            const user = await Users.add(tania)
            expect(user).toHaveProperty("id",1)
            // expect(user).toHaveProperty("name","tania")
            expect(user).toHaveProperty("username","lei")
        })
    })
})