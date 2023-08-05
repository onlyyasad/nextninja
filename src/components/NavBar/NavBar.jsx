import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';


const NavBar = () => {

    const navMenu = [
        {
            id: 1,
            path: "/",
            title: "Home"
        },

        {
            id: 2,
            path: "/about",
            title: "About"
        },
        {
            id: 3,
            path: "/blog",
            title: "Blog"
        },
        {
            id: 4,
            path: "/dashboard",
            title: "Dashboard"
        },
        {
            id: 5,
            path: "/contact-us",
            title: "Contact Us"
        }

    ]
    return (
        <div className='bg-gray-200'>
            <div className='container mx-auto p-4 flex justify-between items-center'>
                <div>
                    <h1 className='font-bold'>NextNinja</h1>
                </div>
                <ul className='flex justify-between items-center'>
                    {
                        navMenu.map(({id, path, title}) => <li key={id}>
                            <Button variant="link" asChild>
                                <Link href={path}>{title}</Link>
                            </Button>
                        </li>)
                    }
                </ul>
                <div>
                    <Button variant="default">Login</Button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;