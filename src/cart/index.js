const add = (product) => {
    const newCart = product
    if (localStorage.getItem('cart')) {
        localStorage.setItem('cart', [newCart])
    } else {
        const CART = localStorage.key('cart')
        localStorage.setItem(
            CART,
            ...newCart
        )
    }
}

const all = () => {
    return localStorage.key('cart')
}

const update = item => {
    const CART = localStorage.getItem('cart')
    const cartItem = CART.find(cart_item => cate_item.id === item.id)
    cartItem = item
    
}