import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Homepage from "./pages/Homepage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./Auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout showHero><Homepage /></Layout>} />
            <Route path="/auth-callback" element={<Layout><AuthCallbackPage /></Layout>} />
            <Route element={<ProtectedRoute />}>
                <Route path="/user-profile" element={<Layout><UserProfilePage /></Layout>} />
                <Route path="/manage-restaurant" element={<Layout><ManageRestaurantPage /></Layout>} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
};

export default AppRoutes;
