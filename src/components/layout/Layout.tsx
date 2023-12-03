import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import SideBar from './sidebar/SideBar'
import Footer from './Footer'

const Layout = () => {
    return (
        <div className='flex h-screen'>
            <Header />
            <Footer />
            <SideBar />
            <main className='flex-1 flex sm:pl-[12rem] xl:pl-[15rem] pt-[3.8rem] pb-[3.5rem]'>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout