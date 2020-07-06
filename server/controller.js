module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err));
    },
    createProduct: (req, res) => {
        const { product_name, price, img_url } = req.body;
        const db = req.app.get('db');

        db.create_product({product_name, price, img_url})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    deleteProduct: (req, res) => {
        const{ id } = req.params;
        const db = req.app.get('db');

        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    }
}