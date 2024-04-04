import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Layout } from './Layout/Layout'
import { Champions } from './pages/Champions'
import { Items } from './pages/Items'
import About from './pages/About'
import Register from './pages/Register'
import { ThemeProvider } from './context/ThemeProvider'
import Favorites from './pages/Favorites'
import ChampionDetails from './pages/ChampionDetails'
import NotFound from './pages/NotFound'
import ItemsDetails from './pages/ItemsDetails'
import { ItemsProvider } from './context/ItemsProvider'
import { ChampsProvider } from './context/ChampsProvider'

function App () {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ChampsProvider>

          <ItemsProvider>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='champions' element={<Champions />} />
                <Route path='items' element={<Items />} />
                <Route path='favorites' element={<Favorites />} />
                <Route path='champion/:id' element={<ChampionDetails />} />
                <Route path='item/:id' element={<ItemsDetails />} />
                <Route path='about' element={<About />} />
                <Route path='register' element={<Register />} />
                <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
          </ItemsProvider>
        </ChampsProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
