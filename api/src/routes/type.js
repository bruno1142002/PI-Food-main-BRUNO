const {Router}= require('express');
const {Type} = require('../db');
const { default: axios } = require('axios');
const {YOUR_API_KEY}= process.env; //ARREGLAR API//
const{URL_RECIPE, RECIPE_INFO}= require('../utils/path');

const route = Router();

route.get('/', async(req, res)=>{
//     Aparece todos los tipos de dieta posible
// Si  no existe ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular (API)
let allRecipes = await Type.findAll();
	return res.send(allRecipes);
})

module.exports = route;