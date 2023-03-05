import { Route, Routes } from 'react-router-dom'
import { AboutPages } from './pages/AboutPage'
import { MainPage } from './pages/MainPage';
import { Navigation } from './components/Navigation';


function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/about" element={<AboutPages />} />
                <Route path='/' element={<MainPage />} />
            </Routes>
        </>
    )
}

export default App;
