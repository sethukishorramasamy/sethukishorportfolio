import React from 'react'
import NavLink from './NavLink';
const MenuOverlay = ({ links }) => {
    return (
        <ul className='flex flex-col mb-5 pl-5'
            style={{
                background: "#3b5998"
            }}>
            {links.map((link, index) =>
            (
                <li key={index} className='mt-2'>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    )
}

export default MenuOverlay;