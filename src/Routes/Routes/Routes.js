import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import Checkout from "../../Pages/CheckOut/Checkout/Checkout";
import Courses from "../../Pages/Courses/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/login/Login";
import Register from "../../Pages/Login/Register/Register";
import CourseDetail from "../../Shared/CourseDetail/CourseDetail/CourseDetail";
import Notfound from "../../Shared/NotFound/NotFound/Notfound";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://complex-edu-server.vercel.app/courseDetails')
            },
            {
                path: '/coursedetail/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(`https://complex-edu-server.vercel.app/courseDetails/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`https://complex-edu-server.vercel.app/courseDetails/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <Notfound></Notfound>
    }
])