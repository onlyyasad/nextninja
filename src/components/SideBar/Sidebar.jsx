import React from 'react';
import { Button } from '../ui/button';

import NavLink from '../NavLink/NavLink';

const navList = [
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/dashboard",
        title: "Dashboard"
    },
    {
        path: "/dashboard/profile",
        title: "Profile"
    },
    {
        path: "/dashboard/add-products",
        title: "Add Products"
    },
    {
        path: "/dashboard/manage-products",
        title: "Manage Products"
    }
]

const Sidebar = () => {
    return (
        <aside className='bg-gray-200'>
            <div className='container mx-auto p-4 flex flex-col'>
                <div>
                    <h1 className='font-bold'>Dashboard</h1>
                </div>
                <ul className='flex flex-col py-4'>
                    {
                        navList.map(({ path, title }) => <li key={path}>
                            <Button variant="link" asChild>
                                <NavLink
                                    exact
                                    activeClassName="text-blue-500 underline"
                                    href={path}>
                                    {title}
                                </NavLink>
                            </Button>
                        </li>)
                    }
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;