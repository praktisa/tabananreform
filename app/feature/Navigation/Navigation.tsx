
import React, { Fragment } from 'react'
import N from './Navigation.module.css'
import Nav from './Nav'

export default function Navigation() {

    const Probis: string[] = [
        "Tryout UKOM Pelaksana 1",
        "Tryout UKOM Pelaksana 2",
        "Tryout UKOM Pelaksana 3",
        "Tryout UKOM Pelaksana 4",
        "Tryout UKOM Pelaksana 5",
        "Tryout UKOM Pelaksana 6",
        "Tryout UKOM Pelaksana 7",
        "Tryout UKOM Pelaksana 8",
        "KUP BAB 2-6",
        "Pajak Penghasilan",
        "Pajak Pertambahan Nilai",
        "Pajak Bumi dan Bangunan",
        "Bea Materai",
        "Account Representative",
        // "Bea Materai",
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
