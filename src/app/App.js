import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "../sitemap";
import HomePage from "../sitemap/homepage";
import Page, { AboutPage, ContactPage, MemberPage, EventPage, RegisterPage, PageNotFound } from "../sitemap/pages";

export default function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<HomePage />} />
            <Route path="page" element={<Page />}>
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="member" element={<MemberPage />} />
                <Route path="event" element={<EventPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Route>
    ));

    return <RouterProvider router={router} />;
}
