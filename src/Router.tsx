import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
export const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={DefaultLayout}>
        <Route path="/" Component={Home} />
      </Route>
    </Routes>
  )
}
