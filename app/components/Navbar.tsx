'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


export default function NavigationMenu() {
    const pathName = usePathname()
    return (
        <div className="bg-base-200/30 px-5 md:px-[10%] py-4">
            <div className="flex justify-between items-center">
                <div className="md:flex">
                    <Link href={'/messages'} className={`block font-medium ${pathName === "/messages" ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`}
                    >Messages</Link>

                    <Link href={'/'} className={`block font-medium ${pathName === "/" ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`}
                    >Today's Task</Link>

                    <Link href={'/last-activity'} className={`block font-medium ${pathName === "/messages" ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`}
                    >Last Activity</Link>
                </div>
            </div>
        </div>
    )
} 