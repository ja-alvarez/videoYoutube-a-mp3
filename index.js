import ytdl from 'ytdl-core';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Convierte import.meta.url a __filename y obtiene el directorio actual
const __dirname = dirname(fileURLToPath(import.meta.url));

// Define las rutas de los archivos temporales y de salida
const tempVideoPath = join(__dirname, 'tempVideo.mp4');
const outputPath = join(__dirname, 'downloads', 'audio.mp3');

const videoUrl = 'https://www.youtube.com/watch?v=rRFsZ1bifm0'; // Link ejemplo

// Establece la ruta de ffmpeg
ffmpeg.setFfmpegPath(ffmpegPath);

// Asegura que la carpeta de destino exista
if (!fs.existsSync(join(__dirname, 'downloads'))) {
    fs.mkdirSync(join(__dirname, 'downloads'));
};

// Descarga el video y guarda en archivo temporal
ytdl(videoUrl, { quality: 'highestaudio' })
    .pipe(fs.createWriteStream(tempVideoPath))
    .on('finish', () => {
        console.log('Video descargado, comenzando la extracción de audio...');
        // Extrae el audio usando ffmpeg
        ffmpeg(tempVideoPath)
            .audioBitrate(128)
            .format('mp3')
            .on('end', () => {
                console.log('Extracción de audio completada.');
                // Elimina el archivo temporal
                fs.unlinkSync(tempVideoPath);
            })
            .on('error', (err) => {
                console.error('Error:', err);
                // Elimina el archivo temporal en caso de error
                fs.unlinkSync(tempVideoPath);
            })
            .save(outputPath);
    });