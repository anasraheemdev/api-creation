const add_product = (req, res) => {
    res.send("Prodcuts Added 😁");
}

const get_product = (req, res) => {
    res.send(
        "Welcome to 1st API"
    );
}

const edit_product = (req, res) => {
    const product_id = req.params.id;
    res.send(`Product has been Updated on Id: ${product_id}`);

}

const delete_product = (req, res) => {
    const id = req.params.pro_id;
    res.send(`Thw Product of ID: ${id} has been deleted`);
}

module.exports = {
    add_product, 
    get_product, 
    edit_product, 
    delete_product,
}