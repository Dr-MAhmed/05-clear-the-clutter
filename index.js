// Clear the clutter... make your directory clean and neat....
import fs from "fs/promises";
import fsn from "fs";
import path from "path";


const basepath = "F:\\sigma web\\02-Sigma Backend\\02-Express.js\\05-clear the clutter";

let files = await fs.readdir(basepath);

for (const item of files) {
    let ext = item.split(".")[item.split(".").length - 1];
    if(ext != "js" && ext != "json" && item.split(".").length > 1){
        if(fsn.existsSync(path.join(basepath, ext))){
            // Move the file to this directory if its not a js or json file..
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}