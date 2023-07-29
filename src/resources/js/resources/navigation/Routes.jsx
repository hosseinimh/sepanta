import React from "react";
import { Route, Routes } from "react-router-dom";
import * as Pages from "../pages";
import PanelLayout from "../layout/PanelLayout";

export default function authRoute() {
    return (
        <Routes>
            <Route path="/" element={<Pages.HomePage />} />
            <Route path="login" element={<Pages.LoginUser />} />
            <Route path="signup" element={<Pages.Signup />} />
            <Route path="forget-password" element={<Pages.ForgetPassword />} />
            <Route path="panel" element={<PanelLayout />}>
                <Route path="dashboard" element={<Pages.Dashboard />} />
                <Route path="users" element={<Pages.Users />} />
                <Route
                    path="change-password"
                    element={<Pages.ChangePassword />}
                />
                <Route path="user/add" element={<Pages.AddUser />} />
                <Route path="edit" element={<Pages.Edituser />} />
                <Route path="cars" element={<Pages.Cars />} />
                <Route path="car/add" element={<Pages.AddCars />} />
                <Route path="car/edit" element={<Pages.EditCars />} />
                <Route path="drivers" element={<Pages.Drivers />} />
                <Route path="driver/add" element={<Pages.AddDrivers />} />
                <Route path="driver/edit" element={<Pages.EditDrivers />} />
                <Route path="tanks" element={<Pages.Tanks />} />
                <Route path="tank/add" element={<Pages.AddTanks />} />
                <Route path="tank/edit" element={<Pages.EditTanks />} />
            </Route>
        </Routes>
    );
}
