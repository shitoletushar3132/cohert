const express = require("express")

const app = express()

app.use(express.json())

function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

let users = [{
    name: "John",
    kidneys: [{
        healthy: false
    },
    {
        healthy: true
    }]
}]

app.get("/", (req, res) => {
    const n = req.query.n;
    const ans = sum(n)
    res.send("Your ans is " + ans)
})

app.get("/kidney", (req, res) => {
    const johnKidneys = users[0].kidneys
    const numberOfKidneys = johnKidneys.length
    const healthy = johnKidneys.filter((kidney) => kidney.healthy == true).length
    res.json({
        johnKidneys: numberOfKidneys,
        healthyKidneys: healthy,
        unHealthyKidneys: numberOfKidneys - healthy
    })
})

app.post("/kidney", (req, res) => {
    console.log(req.body)
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})

app.listen(3000, () => { console.log("server start") })