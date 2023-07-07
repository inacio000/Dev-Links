import { Routes, Route } from "react-router-dom";
import { Projects } from "./Pages/Projects";
import { Header } from "./components/HeaderLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                {/* <Route path="/" element={<Header />} /> */}
                <Route path="projects" element={<Projects />} />
            </Route>
        </Routes>
    )
}