import {
  API_BASE_URL,
  API_PRODUCT_URL,
  API_CART_URL
} from 'src/constants'

// ----------------------------------------------------------------------------
// SERVER
// ----------------------------------------------------------------------------
export const fetchProducts = async () =>
  await fetch(`${API_BASE_URL}/${API_PRODUCT_URL}`)

export const fetchProductDetail = async (id = '') =>
  await fetch(`${API_BASE_URL}/${API_PRODUCT_URL}/${id}`)

export const addCartItem = async (id, colorCode, storageCode) => {
  if (id && colorCode && storageCode) {
    const response = (await fetch(
      `${API_BASE_URL}/${API_CART_URL}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({ id, colorCode, storageCode })
      })
      .then(async res => await res.json())
      .catch(error => console.error(error))).count
    return response
  }
  return null
}

// ----------------------------------------------------------------------------
// CART - LocalStorage
// ----------------------------------------------------------------------------
const storageKey = 'napptilusCart'
const isCartExpired = (cart) => {
  const now = new Date()
  if (now.getTime() > cart.expiry) {
    localStorage.removeItem(storageKey)
    return true
  }
  return false
}

export const getCartLength = () => {
  const cart = getCart()
  return cart?.data?.length
}

export const getCart = () => {
  const cartStr = localStorage.getItem(storageKey)
  if (cartStr) {
    const cart = JSON.parse(cartStr)

    return !isCartExpired(cart) ? cart : null
  }

  return null
}

export const addToCart = (productId, color, storage) => {
  let cart = getCart()

  if (!cart) {
    cart = {
      data: [],
      expiry: ''
    }
  }
  const now = new Date()
  const ttl = 60 * 60 * 1000 // 60 min
  const newItem = {
    productId,
    color,
    storage
  }

  cart.data.push(newItem)
  cart.expiry = now.getTime() + ttl // Update life time of the cart
  localStorage.setItem(storageKey, JSON.stringify(cart))
  return cart.data.length
}
