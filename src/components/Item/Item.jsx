import './Item.scss'
import { Link } from 'react-router-dom'
import { ROUTES } from 'src/constants'
import { Image } from 'src/components'

function Item (props) {
  const { id, brand, model, price, imgUrl } = props.item

  return (
    <div className='itemContainer p-3 flex flex-wrap gap-2 flex-column justify-content-between shadow-2 border-round-md'>
      <div className="image text-center">
        <Image
          imgUrl={imgUrl}
          model={model}
        />
      </div>
      <div className='flex flex-wrap flex-column'>
        <Link
          to={ROUTES.detail}
          state={id}
        >
          <div className='flex gap-1'>
            <span className='capitalize'>{model}</span>
            <span>-</span>
            <span className='capitalize'>{brand}</span>
          </div>
        </Link>

        <div className="text-2xl">{price ? '€' : ' - '} {price}</div>
      </div>
    </div>
  )
}

export default Item
