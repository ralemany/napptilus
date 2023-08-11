import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Details, List } from './components'
import { ROUTES } from 'src/constants'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.root} element={<List />}> </Route>
          <Route path={ROUTES.list} element={<List />}> </Route>
          <Route path={ROUTES.detail} element={<Details />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App