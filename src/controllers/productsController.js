const {loadProducts, storeProducts} = require('../data/productsModule');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const products = loadProducts();
		const product = products.find(product => product.id === +req.params.id);
		return res.render('detail', { 
			product,
			toThousand
		})

	},

	// Create - Form to create
	create: (req, res) => {
		return res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const {name, price,discount,description, category} = req.body

		const newProduct = {
			id,
			name :
		}

	},

	// Update - Form to edit
	edit: (req, res) => {
		const products = loadProducts();

		const product = products.find(product => product.id === +req.params.id);
		return res.render('product-edit-form',{
			product
		})
	},
	// Update - Method to update
	update: (req, res) => {
		const products = loadProducts();
		const {name,price,category,discount,description} = req.body;

		const productsModify = products.map(product => {
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

		storeProducts(productsModify);

		return res.redirect('/products/detail/' + req.params.id)
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;