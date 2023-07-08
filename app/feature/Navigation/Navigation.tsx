
import React, { Fragment } from 'react'
import N from './Navigation.module.css'
import Nav from './Nav'

export default function Navigation() {

    const Probis: string[] = [
        "Visi Misi PSIAP",
        "Registrasi",
        "Pengelolaan SPT",
        "Tax Account Management (TAM)",
        "Pembayaran",
        "Layanan - Administratif",
        "Layanan - Edukasi",
        "Layanan - Inquiry Complaint Suggestion Appreciation",
        "Data Quality Management",
        "Document Management System",
        "Business Intelligence",
        "Compliance Risk Management (CRM)",
        "Penilaian",
        //Pengawasan dan Ekstensifikasi
        "Penagihan",
        "Penegakan Hukum Pidana Pajak",
        "Keberatan dan Banding",
        "Non Keberatan",
        "Manajemen Pengetahuan",
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
