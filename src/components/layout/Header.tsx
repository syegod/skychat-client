import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import CustomInput from '../inputs/CustomInput'
import Avatar from '../user/Avatar'

const Header = () => {
    return (
        <header className='fixed h-[3.8rem] sm:pl-[12rem] xl:pl-[15rem] w-full bg-white'>
            <div className='flex w-full h-full gap-5 justify-between items-center border-b px-3'>
                <div className='block sm:hidden'>
                    <IoIosArrowBack className='cursor-pointer' size={20}/>
                </div>
                <div className='w-full'>
                    <CustomInput type='text' id='search' value='1' color='primary' fullWidth />
                </div>
                <Avatar />
            </div>
        </header>
    )
}

export default Header