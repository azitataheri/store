const shortenText = (text) => {
     return text.split(" ").slice(0, 3).join("")
}

const searchProducts = (products, search) => {
     if (!search) return products;
     const searchedProducts = products.filter((product) => product.title.toLowerCase().includes(search))
     return searchedProducts
}
export {
     shortenText,
     searchProducts
}