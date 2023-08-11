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
