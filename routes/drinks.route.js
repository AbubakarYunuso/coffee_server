const {Router} = require('express')
const {drinksController} = require(`../controllers/drinks.controllers.js`)

const router = Router()

router.get(`/drinks`,drinksController.getAllDrinks)
router.get(`/drinks/:id`,drinksController.getDrinkById)
router.get(`/drinks/in/stock/`,drinksController.getInStockDrink)
router.post(`/drinks`,drinksController.addDrink)
router.delete(`/drinks/:id`,drinksController.deleteDrink)
router.patch(`/drinks/:id`,drinksController.upgradeDrink)

module.exports = router