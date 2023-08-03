import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';


const NavBar = () => {
    return (
        <div className='bg-gray-200'>
            <div className='container mx-auto p-4 flex justify-between items-center'>
                <div>
                    <h1 className='font-bold'>NextNinja</h1>
                </div>
                <div className='flex justify-between items-center'>
                    <Button variant="link" asChild>
                        <Link href="/">Home</Link>
                    </Button>
                    <Button variant="link" asChild>
                        <Link href="/about">About Us</Link>
                    </Button>
                    <Button variant="link" asChild>
                        <Link href="/blog">Blog</Link>
                    </Button>
                    <Button variant="link" asChild>
                        <Link href="/contact-us">Contact Us</Link>
                    </Button>
                </div>
                <div>
                    <Button variant="default">Login</Button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;