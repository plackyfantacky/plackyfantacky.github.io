import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirPath = path.join(__dirname, '../../content/posts');

const getPosts = async () => {

    let postList = [];

    await fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.error('Unable to scan directory: ' + err);
        }
        
        files.forEach((file, index) => {
            let obj = {}, post;
            fs.readFile(`${dirPath}/${file}`, 'utf8', (err, contents) => {
                console.log(contents);
            });
        });
    });
}

getPosts(); 