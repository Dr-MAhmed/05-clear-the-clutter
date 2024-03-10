// This will do the same work as we see in the index.js file..
const fs = require("fs").promises;
const fsn = require("fs");
const path = require("path");

const basepath =
  "F:\\sigma web\\02-Sigma Backend\\02-Express.js\\05-clear the clutter";

async function organizeFiles() {
  try {
    const files = await fs.readdir(basepath);

    for (const file of files) {
      const extension = path.extname(file).slice(1);
      const isJsOrJson = extension === "js" || extension === "json";

      if (!isJsOrJson && extension) {
        const directoryPath = path.join(basepath, extension);

        if (!fsn.existsSync(directoryPath)) {
          fsn.mkdirSync(directoryPath);
        }

        const oldFilePath = path.join(basepath, file);
        const newFilePath = path.join(directoryPath, file);

        fsn.renameSync(oldFilePath, newFilePath);
      }
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

organizeFiles();
