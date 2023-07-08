import React, { useRef } from 'react'
import S from './Soal.module.css'

interface Soal__Inter {
    no: number,
    soal: string,
    children: React.ReactNode,
    style: string
}

export default function Soal({ no, soal, children, style = "block" }: Soal__Inter) {

    let OpsiStyle = `${style === "block" ? S['opsi__block'] : S['opsi__grid']}`



    return (
        <>
            <div className={S['layout']}>
                <div className={S['no']} >{no}.</div>
                <div className={S['soal']}>{soal}</div>
                <div></div>
                <div className={OpsiStyle}> {children}</div>
            </div>
        </>
    )
}


interface ContainedQuis__Inter {
    children: React.ReactNode
}

export function ContainedQuis({ children }: ContainedQuis__Inter) {

    return (
        <>
            <div className={S['ContainedQuis']}>
                {children}
            </div>
        </>
    )
}



export function QuisResult({ Parser }: any) {
    return (
        <div className={S['QuisResult']}
            onClick={Parser}>
            Lihat Jawaban
        </div>
    )
}