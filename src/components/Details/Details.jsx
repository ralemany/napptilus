import { useEffect, useState } from 'react'
import { Header, Loader, Image } from 'src/components'
import './Details.scss'
import { useLocation, Link } from 'react-router-dom'
import { ROUTES } from 'src/constants'
import {
  fetchProductDetail,
  addToCart,
  getCartLength,
  addCartItem
} from 'src/services/product'

function Details () {
  const location = useLocation()

  const [isLoading, setIsLoading] = useState(true)
  const [productInfo, setProductInfo] = useState([])
  const [cartLenth, setCartLength] = useState(getCartLength())

  useEffect(() => {
    fetchProductDetail(location.state)
      .then(res => res.json())
      .then(async res => {
        await setProductInfo(res)
        setIsLoading(false)
      })
      .catch(() => {
        console.log('Something goes wrong fetching data')
      })
  }, [])

  if (!location.state) {
    return <div className='flex flex-wrap flex-column align-items-center justify-content-center h-screen'>
      <span>Item not found, please back to the product list.</span>
      <Link to={ROUTES.list} className='mt-3'>Product list</Link>
    </div>
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const productId = location.state
    const color = e.target.color.value
    const storage = e.target.storage.value

    // TODO Server is returting always 1. I will control the cart with
    // localStorage directly until I can solve this problem
    addCartItem(productId, color, storage)
    setCartLength(addToCart(productId, color, storage))
  }

  const handleBack = () => {
    window.history.back()
  }
  return (
    <div>
      <Header cartLenth={cartLenth} />
      {
        isLoading
          ? <Loader />
          : <div className='max-container'>
            <div className="grid grid-nogutter shadow-2 p-3 justify-content-center">
              <div className='sm:col-12 md:col-6 text-center p-3'>
                <Image
                  imgUrl={productInfo.imgUrl}
                  model={productInfo.model}
                />
              </div>

              <div className='sm:col-12 md:col-6'>
                <div className='p-3 border-1 border-round-md border-dashed'>
                  <h2 className='m-0'>{productInfo.model} - € {productInfo.price}</h2>
                  <p><b>Brand:</b> {productInfo.brand}</p>
                  <p><b>CPU:</b> {productInfo.cpu}</p>
                  <p><b>RAM:</b> {productInfo.ram}</p>
                  <p><b>OS:</b> {productInfo.os}</p>
                  <p><b>Screen Resolution:</b> {productInfo.displaySize}</p>
                  <p><b>Battery:</b> {productInfo.battery}</p>
                  <p><b>Primary camera:</b> {productInfo.primaryCamera}</p>
                  <p><b>Secondary camera:</b> {productInfo.secondaryCmera}</p>
                  <p><b>Dimensions:</b> {productInfo.dimentions}</p>
                  <p><b>Weight:</b> {productInfo.weight} </p>
                  <div className='text-right cursor-pointer' onClick={handleBack}>Go back</div>
                </div>

                  <div className='uppercase p-3 mt-3 border-1 border-round-md border-dashed'>
                    <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap justify-content-between align-items-end gap-3">
                      <div className='flex-1'>
                        <div>Storage</div>
                        {/* TOREVAMP Create SELECT component */}
                        <select
                          name='storage'
                          className='w-full py-2 px-3 border-round-md'
                          defaultValue={Object.keys(productInfo.options.storages)[0]}>
                          {
                            productInfo.options.storages.map((el, index) => {
                              return (
                                <option key={index} value={el.code} >{el.name}</option>
                              )
                            })
                          }
                        </select>
                      </div>

                      <div className='flex-1'>
                        <div>Color</div>
                        <select
                          name='color'
                          className='w-full py-2 px-3 border-round-md'
                          defaultValue={Object.keys(productInfo.options.colors)[0]}
                        >
                        {
                          productInfo.options.colors.map((el, index) => {
                            return (
                              <option key={index} value={el.code} >{el.name}</option>
                            )
                          })
                        }
                        </select>
                      </div>

                      <div className='flex-1'>
                        {/* TOREVAMP Create BUTTON component */}
                        <button
                          className='buttonAdd px-3 border-round-md cursor-pointer w-full'
                          type='submit'
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </form>
                  </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default Details
