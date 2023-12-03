import React from 'react'
import { CustomInputProps } from '../../types/props'
import clsx from 'clsx';

const CustomInput: React.FC<CustomInputProps> = ({ type, id, value, fullWidth, color, placeholder, onChange, disabled }) => {

    const handleHandler = (e: any) => {
        if(onChange){
            onChange(e);
        }
    }
    
    return (
        <input
            type={type}
            id={id}
            name={id}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChange={e => handleHandler(e)}
            className={clsx(
                `outline-none transition border px-3 py-1.5 rounded-full border-gray-400`, 
                disabled && `border-gray-200`,
                fullWidth ? `w-full` : `w-[25ch] sm:w-[35ch]`,
                color == `primary` && `focus-within:ring-2 ring-sky-500`,
                color == `secondary` && `focus-within:ring-2 ring-gray-500`,
                color == `black` && `focus-within:ring-2 ring-black`,
                color == `danger` && `focus-within:ring-2 ring-rose-500`
                )}
        />
    )
}

export default CustomInput