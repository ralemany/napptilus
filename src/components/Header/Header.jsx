import { Link } from 'react-router-dom'
import logo from 'src/assets/napptilus-tech-labs-logo-xl.svg'
import { ROUTES } from 'src/constants/routes'
import { Breadcrumbs } from 'src/components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Header ({ cartLenth }) {
  const cartShoppingIcon = <FontAwesomeIcon
    icon={faCartShopping}
    size='xl'
    className='cursor-pointer'/>

  return (
    <div className="flex justify-content-center align-items-center gap-3 p-3 -mx-3 -mt-3 shadow-2" >
      <div className='m-auto ml-0 flex-1'>
        <Link to={ROUTES.list} >
          <img src={logo} width={40} />
        </Link>
      </div>
      <Breadcrumbs />

      <div className='m-auto ml-0 flex-1 text-right flex flex-wrap align-items-center justify-content-end' >
        {
          cartLenth
            ? <div className='badge mr-1'> <span>{cartLenth}</span> </div>
            : ''
        }
        {cartShoppingIcon}
      </div>
    </div>
  )
}

export default Header
