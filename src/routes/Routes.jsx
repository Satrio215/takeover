import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Home from "../pages/Home";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <PageLayout>
                <Home />
            </PageLayout>
        ),
    },
]);

export default Routes;
