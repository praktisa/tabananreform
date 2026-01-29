import React, { Fragment } from 'react'
import Soal from '../components/Quis/Soal/Soal'
import Opsi from '../components/Quis/Opsi/Opsi'


interface dummy_inter {
    data: any
    no: number,
    kunci: boolean,

}

export default function Quis({ data, no, kunci = false }: dummy_inter) {

    let dummyOpsi = ["A", "B", "C", "D", "E"]
    // console.log("DATAA", data)

    return (
        <>
            <Soal no={no} soal={data.Soal} style={"block"}>
                {
                    data.o.split('(xx)').map((opsi: any, i: number) => {
                        if (opsi != "") {

                            let TampilkanKunci =
                                kunci === true
                                    ?
                                    data.jawaban.trim() === opsi.trim() ?
                                        true
                                        :
                                        false
                                    : false



                            return (
                                <Fragment key={dummyOpsi[i] + opsi}>
                                    <Opsi
                                        opsi={opsi}
                                        idSoal={data.No}
                                        name={data.Soal}
                                        abc={dummyOpsi[i]}
                                        k={TampilkanKunci}
                                        kunci={kunci}
                                    />
                                </Fragment>
                            )
                        }
                    })
                }

                {
                    data.pembahasan && kunci === true
                        ?
                        <div >
                            <h3 style={{ margin: "10px 0" }} >Kunci dan Pembahasan</h3>
                            <p style={{ whiteSpace: "pre-line", background: "#25D36650", padding: "15px", borderRadius: "7px" }} >
                                <b>Kunci:</b> {data.jawaban}  <br />
                                <br />
                                <b>Pembahasan:</b> <br />
                                {data.pembahasan}
                            </p>
                        </div>
                        :
                        <></>
                }

            </Soal>

        </>
    )
}
