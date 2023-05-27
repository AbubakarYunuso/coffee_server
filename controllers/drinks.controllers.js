const Drink = require("../models/Drink.model.js")

module.exports.drinksController = {
    addDrink: async (req,res)=>{
        try {
            await Drink.create({
                name: req.body.name,
                price: req.body.price,
                inStock: req.body.inStock,
                inThereCoffein: req.body.inThereCoffein,
                volume: req.body.volume,
                description: req.body.description
            }),
            res.json(`Напиток добавлен`)
        } catch (error) {
            res.json("errore"+":"+"При добавлении произошла ошибка!!!")
        }
    },
    getAllDrinks: async (req,res)=>{
        try {
            let drinks = await Drink.find({})
            res.json(drinks)
        } catch (error) {
            res.json("errore"+":"+" При выводе напитков на экран произошла ошибка!!!")
        }
    },
    getDrinkById: async (req,res)=>{
        try {
            let drink =await Drink.findById(req.params.id)
            res.json(drink)
        } catch (error) {
            res.json("errore"+":"+" При выводе напитка на экран произошла ошибка!!!")
        }
    },
    getInStockDrink:async(req, res) =>{
        try {
            let drinksInStock = await Drink.find({inStock: req.params.id})
            res.json(drinksInStock)
        } catch (error) {
            res.json("errore"+":"+" При выводе напитков на экран произошла ошибка!!!")
        }
    },
    deleteDrink: async (req,res)=>{
        try {
            await Drink.findByIdAndDelete(req.params.id)
            res.json(`Напиток удалён`)
        } catch (error) {
            res.json("errore"+":"+" При удалении напитка произошла ошибка!!!")
        }
    },
    upgradeDrink:async(req,res)=>{
        try {
            await Drink.findByIdAndUpdate(req.params.id ,{
                name: req.body.name,
                price: req.body.price,
                inStock: req.body.inStock,
                inThereCoffein: req.body.inThereCoffein,
                volume: req.body.volume,
                description:req.body.description
            })
            res.json(`Напиток изменён`)
        } catch (error) {
            res.json("errore"+":"+" При изменении напитка произошла ошибка!!!")
        }
    }
}