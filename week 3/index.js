const zod = require("zod")
function validateInput(arr) {
    const schema = zod.array(zod.number())

    const res = schema.safeParse(arr)

    console.log(res)
}


validateInput(["3", 2, 3, 4])

