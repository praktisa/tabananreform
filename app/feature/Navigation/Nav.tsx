'use client'
import React from 'react'
import Link from 'next/link'

interface Nav__Inter {
    href: string,
    display: string
}

export default function Nav({ href, display }: Nav__Inter) {

    let Nilai: any = ""

    if (typeof window !== 'undefined') {
        Nilai = localStorage.getItem(href) === null
            ? "0" : localStorage.getItem(href)
    }



    return (
        <>
            <Link href={href}>
                <div >
                    {display}
                    <span>{Nilai.replaceAll('"', "") + "%"}</span>
                </div>
            </Link>
        </>
    )
}
