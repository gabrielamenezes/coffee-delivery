import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './pages/Cart'
export const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={DefaultLayout}>
        <Route path="/" Component={Home} />
        <Route path="/cart" Component={Cart} />
      </Route>
    </Routes>
  )
}
