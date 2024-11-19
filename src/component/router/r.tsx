import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Main from '../main/mian'
import { Home, Haha, Kill } from '../test/test1'
import { AreaChart } from '../chat/demo'
import { DataV } from '../chat/plan'
import { DataSourcePageHome } from '../datasource/datasource'

export default function R() {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route path="ybp" element={<AreaChart />} />
                <Route path="dzbg" element={<DataV />} />
                <Route path="sjy" element={<DataSourcePageHome />}/> 
            </Route>
        </Routes>
    )
}