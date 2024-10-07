import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { MenuItem } from './MenuItem';

export const Menu = () => {
    return (
        <div className='flex gap-4'>
            <MenuItem title='home' address='/' Icon={AiFillHome} />
            <MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill} />
        </div>
    )
}


