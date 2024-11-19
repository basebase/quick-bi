import React from 'react';
import { Grid } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from './menu'
import Header from './header';
import Footer from './footer';
import Core from './core';


import { Home, Haha, Kill } from '../test/test1'

import './main.css';


export default function Main() {
   return (
    <div className='main'>
        <div className='menu'>
            <Sidebar />
        </div>
        <div className='core'>
            <div className='header'>
                <Header />
            </div>
            <div className='context'>
                {/* <Home /> */}
                <Outlet />
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </div>
    </div>
   )
}