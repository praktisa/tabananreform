'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface Nav__Inter {
    href: string,
    display: string
}

export default function Nav({ href, display }: Nav__Inter) {

    // let Nilai: any = ""
    const [Nilai, setNilai] = useState<string>("0")


    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem(href) !== null) {
                setNilai((localStorage.getItem(href)?.replaceAll('"', "") as string))
            }
        }
    }, [])



    return (
        <>
            <Link href={href}>
                <div >
                    {display}
                    <span>{Nilai + "%"}</span>
                </div>
            </Link>
        </>
    )
}
