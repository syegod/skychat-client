import React from 'react'
import { CustomBtnProps } from '../../types/props'
import clsx from 'clsx';

const CustomBtn: React.FC<CustomBtnProps> = ({ type, id, value, fullWidth, color, disabled, onClick }) => {

    function handleOnClick() {
        if (onClick) {
            onClick();
        }
    }

    return (
        <button
            type={type}
            id={id}
            disabled={disabled}
            onClick={() => handleOnClick()}
            className={clsx(
                `px-3 py-1 transition text-white rounded-md outline-none shadow-md`,
                fullWidth ? `w-full` : `w-max`,
                disabled ? `bg-sky-700` : `hover:opacity-80 active:opacity-90`,
                color == 'primary' && `bg-sky-500`,
                color == 'secondary' && `bg-gray-400 border border-gray-500`,
                color == `black` && `bg-gray-900`,
                color == `danger` && `bg-rose-500`
            )}
        >
            {value}
        </button>
    )
}

export default CustomBtn