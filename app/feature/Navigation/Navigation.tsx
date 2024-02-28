
import React, { Fragment } from 'react'
import N from './Navigation.module.css'
import Nav from './Nav'

export default function Navigation() {

    const Probis: string[] = [
        "Kisi Kisi 1",
        "Kisi Kisi 2",
        "Tryout UKOM Pelaksana",
        "Tryout UKOM AR",
        "Bea Materai",
        // "AR",
        // "KUP",
        // "Pajak Penghasilan",
        // "PPN",
        // "PBB",
        // "Tata Naskah Dinas",
        // "Organisasi",
        // "Internalisasi Kepatuhan",
        // "Keuangan",
        // "TIK",
        // "Kepegawaian",

    ]

    return (
        <>
            <div className={N['layout']}   >
                <div className={N['container']}>
                    {
                        Probis.map((pro, i) => {
                            let HREF = pro.replaceAll(" ", "").toLowerCase()
                            return (
                                <Fragment key={i}>
                                    <Nav href={HREF} display={pro} />
                                </Fragment>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}
