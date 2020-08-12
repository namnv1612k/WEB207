import axios from 'axios'

const add = (id) => {
    axios.get('http://localhost:8080/products/' + id)
        .then(({data}) => {
            if (!localStorage.getItem('cart')) {
                localStorage.setItem('cart', [data])
            } else {
                const CART = localStorage.key('cart')
                localStorage.setItem(
                    CART,
                    ...data
                )
            }
        })
        .catch((error) => {
            console.log('Add cart fail: ', error)
        })
    
}

const all = () => {
    return localStorage.key('cart')
}

const update = item => {
    const CART = localStorage.getItem('cart')
    const cartItem = CART.find(cart => cart.id === item.id)
    cartItem = item
    
}

const remove = (id) => {
    const CART = localStorage.getItem('cart')

}

export default {
    add,
    all,
    update,
    remove
}