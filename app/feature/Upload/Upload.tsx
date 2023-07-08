import React from 'react'
import { read, utils } from "xlsx";

export default function Upload({ setState }: any) {

    const Soal_ExceltoJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation(); e.preventDefault();

        // function Replace(abc: string){
        //     let replacethis = ["a. ", "b. ", "c. ", "d. ", "e. "]
        //     for(var i =0; i)
        //     abc.replaceAll("a. ", "")
        // }  

        function GabungOpsi(data: string[]) {
            let Returned = []
            for (var i = 0; i < data.length; i++) {
                let x: any = data[i]
                let opsi = x['a'] + "(xx)" + x['b'] + "(xx)" + x['c'] + "(xx)" + x['d']

                delete x['a']
                delete x['b']
                delete x['c']
                delete x['d']
                delete x['e']
                Object.assign(x, { o: opsi })
                console.log("OPSI", x)
                Returned.push(x)
            }

            return Returned
        }

        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target != null) {
                    const data = e.target.result
                    const workbook = read(data, { type: "array" });
                    const sheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[sheetName];
                    const json: any = utils.sheet_to_json(worksheet, { raw: false });

                    let NEW_JSON = GabungOpsi(json)
                    console.log("json worksheet", json);

                    setState(json)
                }
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }

    }

    return (
        <div style={{ display: "grid", textAlign: "center" }} >
            <label htmlFor="upload" style={{ cursor: "pointer", padding: "10px 0" }} >Upload</label>
            <input
                style={{ display: "none" }}
                type="file"
                name="upload"
                id="upload"
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                onChange={
                    (e) => Soal_ExceltoJSON(e)
                }
            />
        </div>
    )
}
