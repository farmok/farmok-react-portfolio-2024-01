import Home from './pages/home';
import Design from './pages/design';
import Leadership from './pages/leadership';
import About from './pages/about';
import ProjectList from './pages/project_list';
import ProjectDetails from './pages/project_detail';

import { Routes, Route } from 'react-router-dom';

function Nav_Route() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/design' element={<Design />} />
            <Route path='/leadership' element={<Leadership />} />
            <Route path='/project_detail/:id' element={<ProjectDetails />} />
            <Route path='/project_list/' element={<ProjectList />} />
            <Route path='/about' element={<About />} />
        </Routes>
    );
}

export default Nav_Route;