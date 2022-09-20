const fs = require('fs');
const path = require('path');
const {loadProducts} = require('../data/productsModule')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		const products = loadProducts();
		const inSale = products.filter(product => product.category === 'in-sale');
		const visited = products.filter(product => product.category === 'visited');

		return res.render('index', {
			inSale,
			visited,
			toThousand
		})
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
