
import React, { Fragment } from 'react'
import N from './Navigation.module.css'
import Nav from './Nav'

export default function Navigation() {

    const Probis: string[] = [
        "Tryout UKOM Pelaksana",
        "Tryout UKOM AR",
        "AR",
        "KUP",
        "Pajak Penghasilan",
        "Bea Materai",
        "PPN",
        "PBB",
        "Tata Naskah Dinas",
        "Organisasi",
        "Internalisasi Kepatuhan",
        "Keuangan",
        "TIK",
        "Kepegawaian",

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
