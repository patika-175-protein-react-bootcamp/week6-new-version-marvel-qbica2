import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Details from "../pages/Details";

function Rooter() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/detail/:id" element={<Details />} />
        </Routes>
    );
}
  
export default Rooter;