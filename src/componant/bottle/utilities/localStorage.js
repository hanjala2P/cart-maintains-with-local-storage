// 1. local storage theke kisu pete hole , tahole ei sob data pabo string hisebe
// 2. convert korte hobe ei  gulake js obj/array te

const getCartFromLocalStorage=()=>{
    const storedCartString=localStorage.getItem('cart');
    if(storedCartString){
        const storedCart=JSON.parse(storedCartString);
        return storedCart;
    }

    return [];
}
const saveCartToLocalStorage=cart=>{
    const cartStringfied=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringfied);
}
// add item to local storage
const addItemToLocalStorage =id =>{
    const cart =getCartFromLocalStorage();
    // cart.push(id);
    // push or
    const newCart = [...cart,id];
    saveCartToLocalStorage(newCart);
}
export{getCartFromLocalStorage as getStoreCart,
    addItemToLocalStorage as addToStoredCart}