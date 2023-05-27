const mongoose =require(`mongoose`)

const drinkSchema = mongoose.Schema({
    name: String,
    price: Number,
    inStock:Boolean,
    inThereCoffein:Boolean,
    volume: String,
    description:String
})

const Drink = mongoose.model(`drinks`, drinkSchema)

module.exports = Drink