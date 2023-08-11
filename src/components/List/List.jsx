import { useState, useEffect } from 'react'
import { Header, Item, Search, Loader } from 'src/components'
import { getCartLength, fetchProducts } from 'src/services/product'

function List () {
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const [filterText, setFilterText] = useState('')
  const [cartLenth, setCartLength] = useState(getCartLength())

  useEffect(() => {
    if (isLoading) {
      fetchProducts()
        .then(res => res.json())
        .then(async res => {
          await setArticles(filteredData(res))
          setIsLoading(false)
        })
        .catch(() => {
          console.log('Something goes wrong fetching data')
        })

      setCartLength(getCartLength())
    }
  }, [isLoading])

  const filteredData =
    (data) => data.filter(el => {
      const model = el.model.toLowerCase().includes(filterText.toLowerCase().trim())
      const brand = el.brand.toLowerCase().includes(filterText.toLowerCase().trim())

      return model || brand
    })

  function handleSearchChange (e) {
    setFilterText((e.target.value))
    setIsLoading(true)
  }

  return (
    <>
      <Header cartLenth={cartLenth} />
      <div className='flex flex-wrap justify-content-end align-items-center p-3 pb-0'>
        <Search
          filterText={filterText}
          onChange={handleSearchChange}
        />
      </div>
      {
        isLoading
          ? <Loader />
          : <div className="container p-3 flex flex-wrap justify-content-between gap-3">
            {
              articles.map((element, index) => {
                return (
                  <Item key={index} item={element}/>
                )
              })
            }
          </div>
      }
    </>
  )
}

export default List
