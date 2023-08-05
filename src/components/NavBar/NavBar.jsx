import React from 'react';
import { Button } from '../ui/button';
import NavLink from '../NavLink/NavLink';

const navList = [
    {
        path: "/",
        title: "Home"
    },

    {
        path: "/about",
        title: "About"
    },
    {
        path: "/blogs",
        title: "Blogs"
    },
    {
        path: "/dashboard",
        title: "Dashboard"
    },
    {
        path: "/contact-us",
        title: "Contact Us"
    }

]


const NavBar = () => {


    return (
        <nav className='bg-gray-200'>
            <div className='container mx-auto p-4 flex justify-between items-center'>
                <div>
                    <h1 className='font-bold'>NextNinja</h1>
                </div>
                <ul className='flex justify-between items-center'>
                    {
                        navList.map(({ path, title }) => <li key={path}>
                            <Button variant="link" asChild>
                                <NavLink
                                    exact={path === "/"}
                                    activeClassName="text-blue-500 underline"
                                    href={path}>
                                    {title}
                                </NavLink>
                            </Button>
                        </li>)
                    }
                </ul>
                <div>
                    <Button variant="default">Login</Button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;