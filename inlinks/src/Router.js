import { Routes, Route } from "react-router-dom";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="order" element={<Order />} />
                <Route path="deliver" element={<Deliver />} />
            </Route>
        </Routes>
    )
}