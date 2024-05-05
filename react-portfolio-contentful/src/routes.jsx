import Home from './pages/home';
import Design from './pages/design';
import About from './pages/about';
import ProjectList from './pages/project_list';
import ProjectDetails from './pages/project_detail';
import Leadership from './pages/leadership';
import NotFound from './pages/not_found';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

function Nav_Route() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path='/'
                    element={<Home />} />
                <Route
                    path='/design'
                    element={<Design />} />
                <Route
                    path='/leadership'
                    element={<Leadership />} />
                <Route
                    path='/project_list'
                    element={<ProjectList />} />
                <Route
                    path='/project_detail/:id'
                    element={<ProjectDetails />} />
                <Route
                    path='/about'
                    element={<About />} />
                <Route
                    path='*'
                    element={<NotFound />} />
            </>
        )

    );

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default Nav_Route;