'use client'
import React, { Fragment, HtmlHTMLAttributes, useRef, useState } from 'react'
import so from '../Admin/_data/soal.json'
import { ContainedQuis, QuisResult } from '../feature/components/Quis/Soal/Soal'
import Quis from '../feature/Quis/Quis'
import Link from 'next/link'

export default function Probis({ params }: { params: { Probis: string } }) {

    // console.log("so", so, params.Probis)

    const [reveal, setReveal] = useState(false)
    const [nilai, setNilai] = useState(0)

    let SOAL = so.filter((x: any) => x.key === params.Probis)

    const Domjawaban = useRef<null | HTMLDivElement>(null)

    // console.log("Domjawaban", Domjawaban)

    function ParserDOM(text: any, SOAL: any) {

        setReveal(true)
        let DOM = new DOMParser().parseFromString(text, "text/html");
        let Tangkap = {}
        let JawabanTerpilih: any = DOM.querySelectorAll('[checked="true"]');
        let HasilAkhir = 0

        for (var i = 0; i < JawabanTerpilih.length; i++) {


            let IndeksSoal = SOAL.findIndex((key: any) => key.No === JawabanTerpilih[i]['name'])

            let K = SOAL[IndeksSoal].jawaban.replace(/(\r\n|\n|\r)/gm, "")
            let P = JawabanTerpilih[i]['value'].replace(/(\r\n|\n|\r)/gm, "")

            if (IndeksSoal > -1 && K === P) {
                HasilAkhir += 1

                Object.assign(Tangkap, { [JawabanTerpilih[i]['name']]: "Benar" })
            } else {
                Object.assign(Tangkap, { [JawabanTerpilih[i]['name']]: "Salah", ['hasil' + [JawabanTerpilih[i]['name']]]: { "Benar": K, "Dipilih": P } })
            }
        }

        setNilai(HasilAkhir)
        localStorage.setItem(params.Probis, JSON.stringify((HasilAkhir * 100 / SOAL.length).toFixed(0)))

        console.log("HasilAkhir", HasilAkhir)
    }

    return (
        <>
            <div
                ref={Domjawaban}
                style={{ marginBottom: "150px" }}
            >
                {
                    SOAL.map((dataso: any, i) => {
                        return (
                            <Fragment key={i + dataso.key}>
                                <ContainedQuis>
                                    <Quis no={i + 1} data={dataso} kunci={reveal} />
                                </ContainedQuis>
                            </Fragment>
                        )
                    })

                }


                {
                    reveal === true
                        ?
                        <>
                            <div style={
                                {
                                    display: "grid", background: "#eaeaea", color: "#121212"
                                    , textAlign: "center", fontWeight: "bold", padding: "10px",
                                    position: "fixed", bottom: "0", width: "100%", border: "2px solid #444"
                                }
                            }>
                                <div>Nilai: {nilai}/{SOAL.length}</div>
                                <Link href={"/"}>Kembali</Link>
                            </div>

                        </>
                        :
                        <>
                            {
                                SOAL.length === 0
                                    ?
                                    <>
                                        <div style={{ display: "grid", textAlign: "center" }} >
                                            <h1 >Soal {params.Probis} belum tersedia</h1>
                                            <Link href={"/"}>Kembali</Link>
                                        </div>

                                    </>

                                    :
                                    <QuisResult Parser={() => ParserDOM(Domjawaban.current?.innerHTML, SOAL)} />
                            }
                        </>

                }
            </div>





        </>
    )
}
