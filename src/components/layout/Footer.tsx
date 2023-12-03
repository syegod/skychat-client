import React from 'react'
import CustomInput from '../inputs/CustomInput'

const Footer = () => {
    return (
        <div className='fixed bottom-0 h-[3.5rem] w-full sm:pl-[12rem] xl:pl-[15rem] bg-white'>
            <div className='border-t flex justify-between items-center w-full h-full px-3'>
                <div className='w-full'>
                    <CustomInput type='text' id='search' value='4902809385' color='primary' fullWidth />
                </div>
            </div>
        </div>
    )
}

export default Footer