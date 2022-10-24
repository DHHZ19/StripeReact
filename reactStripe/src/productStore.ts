const productsArray: { id: number, title: string, price: number }[] = [
    {
        id: 1,
        title: "coffee",
        price: 4.99
    },
    {
        id: 1,
        title: "capuccino",
        price: 4.99
    },
    {
        id: 1,
        title: "Bread",
        price: 4.99
    }
];

function getProductData(id: number){
    let prodcutData = productsArray.find(el => el.id === id);

    return prodcutData;
}

export {productsArray, getProductData};
