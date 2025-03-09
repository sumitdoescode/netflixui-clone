import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./Layouts/RootLayout";
import "./assets/scss/App.scss";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>page not found</h1>} />
        </Route>
    )
);
const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
