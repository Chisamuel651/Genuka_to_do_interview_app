'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


export default function NavigationMenu() {
    const pathName = usePathname()
    return (
        <div className="bg-white px-5 md:px-[10%] py-4 border-b">
            <div className="flex justify-between items-center">
                <div className="flex space-x-8">
                    <Link
                        href={'/messages'}
                        className={`block font-medium pb-2 ${pathName === "/messages"
                                ? "text-black border-b-2 border-black"
                                : "text-gray-500"
                            }`}
                    >
                        Messages
                    </Link>

                    <Link
                        href={'/'}
                        className={`block font-medium pb-2 ${pathName === "/"
                                ? "text-black border-b-2 border-black"
                                : "text-gray-500"
                            }`}
                    >
                        Today's Task
                    </Link>

                    <Link
                        href={'/last-activity'}
                        className={`block font-medium pb-2 ${pathName === "/last-activity"
                                ? "text-black border-b-2 border-black"
                                : "text-gray-500"
                            }`}
                    >
                        Last Activity
                    </Link>
                </div>
            </div>
        </div>
    )
} 