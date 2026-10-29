import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage";

import AuthenticationPage from "./features/authentication/AuthenticationPage.jsx";
import ExperiencePage from "./features/experiences/ExperiencePage.jsx";

export default function App() {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/authentication"} element={<AuthenticationPage />} />

            <Route path={"/experiences"} element={<ExperiencePage />} />
        </Routes>
    )
}