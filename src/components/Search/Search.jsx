import './Search.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Search ({ filterText, onChange }) {
  const magnifyingGlassIcon = <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/>

  return (
    <div className='searchComponent p-3 text-left flex flex-wrap align-items-center gap-3'>
      {magnifyingGlassIcon}
      <input
        value={filterText}
        type="text" placeholder='Search by model / branch'
        className='flex-1 -mr-3 py-2 px-3'
        onChange={onChange}
        />
    </div>
  )
}

export default Search
