# Video Converter Web App

A simple, browser-based video converter built with React and FFMPEG.wasm. Convert your videos directly in the browser without uploading them to any server.

[Demo](https://compress.addy.ie)

## Features

- 🎥 Browser-based video conversion
- 🔒 Privacy-focused (no server uploads)
- ⚡ Fast, client-side processing
- 📱 Responsive design
- 🎛️ Advanced conversion settings:
  - Multiple compression methods:
    - Target quality percentage (1-100%)
    - Target file size in MB
    - Quality-based compression (QP: 18-51)
    - Bitrate-based compression
  - Video codec selection (H.264/H.265)
  - Audio codec options (AAC/MP3)
  - Customizable bitrates
  - Frame rate control
  - Resolution scaling with aspect ratio preservation

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- FFMPEG.wasm
- Vite

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/addyosmani/video-compress.git
cd video-compress
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Usage

1. Click the upload area or drag and drop a video file
2. Adjust conversion settings (optional):
   - Choose a compression method:
     - Quality percentage: Adjust quality from 1-100% (lower = smaller file)
     - Target file size: Specify desired output size in MB
     - Quality-based (QP): Fine-tune quality from 18 (best) to 51 (smallest)
     - Bitrate: Set specific video bitrate
   - Select video and audio codecs
   - Set audio bitrate
   - Choose frame rate
   - Adjust resolution
3. Click "Compress" to start the conversion
4. Wait for the conversion to complete
5. The converted video will automatically download

## Technical Notes

- The app uses Web Assembly through FFMPEG.wasm for video processing
- Cross-Origin Isolation is required for SharedArrayBuffer support
- Resolution scaling maintains aspect ratio using the formula: `scale='min(target_width,iw)':'-2'`
- Video dimensions are automatically adjusted to be divisible by 2 for codec compatibility
- Quality-based compression uses FFmpeg's QP parameter for consistent results

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- [FFMPEG.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) for making browser-based video processing possible
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Lucide Icons](https://lucide.dev) for the beautiful icons