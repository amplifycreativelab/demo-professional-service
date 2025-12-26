import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = 'src/assets/images';

fs.readdir(imagesDir, (err, files) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    files.forEach((file, index) => {
        if (path.extname(file).toLowerCase() === '.png') {
            const inputFile = path.join(imagesDir, file);
            const outputFile = path.join(imagesDir, path.basename(file, '.png') + '.webp');

            sharp(inputFile)
                .webp({ quality: 80 })
                .toFile(outputFile)
                .then(() => {
                    console.log(`Converted ${file} to WebP`);
                    // Optional: delete original png
                    // fs.unlinkSync(inputFile);
                })
                .catch(err => {
                    console.error(`Error converting ${file}:`, err);
                });
        }
    });
});
