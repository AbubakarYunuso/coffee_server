const express = require(`express`)
const mongoose = require(`mongoose`)
const port = 4000

const app = express()

app.use(express.json())
app.use(require(`./routes/drinks.route.js`))

async function  startServerandDataBase () {
    try {
        await app.listen(port)
        await mongoose.connect(`mongodb+srv://abubakar:abk1234@cluster0.qxkuuhm.mongodb.net/Coffee`)
        console.log(`Server and data base start!!!`)
    } catch (error) {
        console.log(error)
    }
}
startServerandDataBase()