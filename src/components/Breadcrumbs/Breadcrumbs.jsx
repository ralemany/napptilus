import { useLocation, Link } from 'react-router-dom'
import { ROUTES } from 'src/constants/routes'
import './Breadcrumbs.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function Breadcrumbs () {
  const location = useLocation()

  let currentLink = ''

  const crumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`
      // Check if exist on our Routes Object to link or not
      const valueExists = Object.values(ROUTES).includes(`${currentLink}`)

      return (
        <div className='crumb capitalize' key={crumb}>
          {
            valueExists
              ? <Link to={currentLink} >{crumb}</Link>
              : crumb
          }
        </div>
      )
    })

  const homeIcon = <FontAwesomeIcon icon={faHome} className='cursor-pointer'/>

  return (
    <div className="breadcrumbs flex justify-content-center">
      <div className='crumb'>
        <Link to={ROUTES.list}>
          {homeIcon}
        </Link>
      </div>
      {crumbs}
    </div>
  )
}

export default Breadcrumbs
