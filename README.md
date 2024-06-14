# Youtube Audio Downloader

Esta aplicación utiliza node express. El script descarga un video de YouTube y extrae el audio en formato MP3 utilizando las bibliotecas `ytdl-core`, `fluent-ffmpeg` y `ffmpeg-static`.

### Requisitos

- `ytdl-core`
- `fluent-ffmpeg`
- `ffmpeg-static`

### Instalación y Configuración

1. Clona este repositorio:
    ```bash
    git clone https://github.com/ja-alvarez/videoYoutube-a-mp3.git
    ```
2. Navega al directorio del proyecto. 
3. Instala las dependencias:
    ```bash
    npm install
    ```

### Uso

1. Modifica la variable `videoUrl` en el script con la URL del video de YouTube que deseas descargar.
2. Ejecuta el script con Node.js:
    ```bash
    node index.js
    ```

## El script realizará las siguientes acciones:

- Descargará el video de YouTube y lo guardará en un archivo temporal.
- Extraerá el audio del video y lo guardará en la carpeta `downloads` como `audio.mp3`.
- Eliminará el archivo temporal.

### Notas

- Asegúrate de tener permisos de escritura en el directorio donde se ejecuta el script.
- Puedes cambiar la calidad del audio ajustando los parámetros en `ffmpeg`.