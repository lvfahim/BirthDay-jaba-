import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Main from "../Component/Main";
import Memorise from "../Component/Memorise";
import Wish from "../Component/Wish";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element:<Main></Main>
        },
        {
            path:'/memorise',
            element:<Memorise></Memorise>
        },
        {
            path:'/wishes',
            element:<Wish></Wish>
        }
    ]
  }
]);
export default router