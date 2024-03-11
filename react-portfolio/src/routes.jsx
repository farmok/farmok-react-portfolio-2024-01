import { Home } from './pages/home';
import { Design } from './pages/design';
import { Leadership } from './pages/leadership';
import { About } from './pages/about';

import { Routes, Route } from 'react-router-dom';

export const Nav_Route = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/design' element={<Design />} />
            <Route path='/leadership' element={<Leadership />} />
            <Route path='/about' element={<About />} />
        </Routes>
    );
}