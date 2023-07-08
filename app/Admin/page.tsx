'use client'
import React, { useState } from 'react'
import Upload from '../feature/Upload/Upload'

export default function page() {

    const [Data, SetData] = useState([])
    const [Load, setLoad] = useState(false)


    async function Simpan(Data: any) {
        let JSON_Data = JSON.stringify(Data)

        setLoad(true)
        try {
            await fetch('http://localhost:3000/Admin/api', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON_Data,
            })
        } catch (error) {
            console.log("ERROR", error)
        }
    }

    return (
        <>

            <Upload setState={SetData} />

            <div style={{ textAlign: "center" }} >Data Masuk {Data.length}</div>
            {
                Data.length != 0
                    ?
                    <div style={{ textAlign: "center", padding: "10px 0" }}
                        onClick={() => { Load === false ? Simpan(Data) : null }}
                    >
                        Simpan Data
                    </div>
                    :
                    <></>
            }
        </>
    )
}
