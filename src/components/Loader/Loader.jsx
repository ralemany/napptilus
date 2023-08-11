import './Loader.scss'
function Loader () {
  return (
    <div className="flex flex-wrap flex-column align-items-center justify-content-center h-6rem p-6 text-center gap-3">
      <span className="spinnerLoader"></span>
      <span className='text-center'>Loading data</span>
    </div>
  )
}

export default Loader
