import fs from 'fs';



export function CreateFileJSON(Directory: string, Data: string) {

    fs.writeFile(Directory, Data, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("DATA TERSIMPAN", Directory);
    });
}