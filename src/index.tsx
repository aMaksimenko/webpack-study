import {createRoot} from 'react-dom/client'
import {App} from '@/components/App'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {StrictMode, Suspense} from "react";
import {LazyAbout} from "@/pages/About/LazyAbout";
import {LazyShop} from "@/pages/Shop/LazyShop";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/about",
                element: <Suspense fallback={'Loading...'}><LazyAbout/></Suspense>
            },
            {
                path: "/shop",
                element: <Suspense fallback={'Loading...'}><LazyShop/></Suspense>
            },
        ]
    },
]);

const root = document.getElementById('root')

if (!root) {
    throw new Error('Root element not found')
}

const container = createRoot(root)

container.render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)


