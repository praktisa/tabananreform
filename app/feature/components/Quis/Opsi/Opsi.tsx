
import React, { useRef } from 'react'
import O from './Opsi.module.css'

interface Opsi__Inter {
    idSoal: string,
    opsi: string,
    name: string,
    abc: string,
    k: boolean,
    kunci: boolean
}

export default function Opsi({ idSoal, opsi, name, abc, k, kunci }: Opsi__Inter) {

    const Check = useRef<null | HTMLInputElement>(null)

    // review buatkan array Opsi harusnya dibungkus dengan div yang engandung useRef
    function SetCheck(idSoal: string, id: string, kunci: boolean) {

        if (kunci === false) {
            if (Check.current != undefined) {
                let Opsi = document.querySelectorAll('[name="' + idSoal + '"]')

                // console.log("OPSI", Opsi)

                for (var i = 0; i < Opsi.length; i++) {

                    if (Opsi[i].id === id) {
                        Opsi[i].setAttribute('checked', "true")
                    }
                    else {
                        Opsi[i].setAttribute('checked', "false")
                    }
                }
            }
            if (Check.current != undefined) {
                Check.current.checked = true
            }
        }

    }


    return (
        <>
            <div className={O['layout']}>
                <input
                    // disabled={kunci}
                    onChange={() => SetCheck(idSoal, abc + idSoal, kunci)}

                    type="radio" id={kunci === false ? abc + idSoal : "X"} ref={Check} name={idSoal} value={opsi} />
                <label
                    style={k === true ? { background: "#25D366", color: "#121212", fontWeight: "bold" } : {}}
                    htmlFor={abc + idSoal}

                // onClick={(Check.current) => SetCheck(Check.current)}

                >
                    <span>{abc}.</span> {opsi}</label>
            </div>

        </>
    )
}
