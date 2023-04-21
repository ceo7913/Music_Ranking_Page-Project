import { useRoutes } from "react-router-dom";
import { MainPage } from "../components/pages";


function Router(){
    const routes =[
        {
            path: '/',
            element:<MainPage/>,
            
        },
    ]
    return useRoutes(routes)
}
export default Router;