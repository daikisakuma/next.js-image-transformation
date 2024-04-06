"use client";

import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='py-5 px-10 border-b flex justify-between items-center sticky top-0 z-10 bg-slate-700'>
            <div>
                <h1 className='text-2xl font-extrabold'>
                    <Link href="/">Next Image Transformation</Link>
                </h1>
            </div>
        </header>
    )
}

export default Header