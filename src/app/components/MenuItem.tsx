import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface MenuItemProps {
    title: string
    address: string
    Icon: IconType
}

export const MenuItem = ({ title, address, Icon }: MenuItemProps) => {
    return (
        <Link href={address} className='hover:text-amber-500'>
            <Icon className="text-2xl sm:hidden" />
            <p className='uppercase hidden sm:inline text-sm'>{title}</p>
        </Link>
    )
}


