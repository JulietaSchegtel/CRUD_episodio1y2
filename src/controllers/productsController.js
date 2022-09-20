const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const product = products.find(product => product.id === +req.params.id);
		return res.render('detail', { 
			product,
			toThousand
		})

	},

	// Create - Form to create
	create: (req, res) => {

	},
	
	// Create -  Method to store
	store: (req, res) => {
	},

	// Update - Form to edit
	edit: (req, res) => {
		const product = products.find(product => product.id === +req.params.id);
		return res.render('product-edit-form',{
			product
		})
	},
	// Update - Method to update
	update: (req, res) => {
		const {name,price,category,discount,description} = req.body;

		const productModify = products.map(product => {
			if(product.id === +req.params.id){
				return {
					...product,
					name : name.trim(),
					price : +price,
					category,
					discount : +discount,
					description : description.trim()
				}
			}
			return product
		})

		fs.writeFileSync(path.join(__dirname, '..', 'data', 'productsDataBase.json'),JSON.stringify(productModify), 'utf-8')
		return res.redirect('/')
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;