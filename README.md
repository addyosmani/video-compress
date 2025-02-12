# Browser Video Compressor

A powerful, browser-based video compression tool built with React and FFMPEG.wasm. Compress videos directly in your browser with real-time preview and advanced settings - no server uploads required.

[Demo](https://compress.addy.ie)

## Features

- 🎬 Client-side video compression
- 🔒 Privacy-first (all processing happens locally)
- 👀 Real-time compression preview
- 📊 Live file size estimation
- ⚙️ Advanced compression settings:
  - Multiple compression methods:
    - Bitrate targeting
    - Quality percentage
    - File size targeting
    - CRF (Constant Rate Factor)
  - Video codec selection (H.264/H.265)
  - Audio codec options (AAC/MP3)
  - Frame rate control
  - Resolution scaling
  - Audio bitrate adjustment

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- FFMPEG.wasm
- Radix UI Components
- Lucide Icons
- Vite

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/video-compressor.git
cd video-compressor
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

> 💁‍♀️ If you cannot access your server and are running the app in a containerized environment (like a dev container), you may need to use `npm run dev:network` in order to expose the server to your host system

### Building for Production

```bash
npm run build
```

## Usage

1. Drag and drop a video file or click to browse
2. (Optional) Click the Settings button to adjust compression parameters:
   - Choose compression method:
     - Bitrate: Target a specific video bitrate
     - Quality: Set a quality percentage (1-100%)
     - File size: Target a specific output size
     - CRF: Fine-tune quality (18-51, lower is better)
   - Select video codec (H.264/H.265)
   - Choose audio settings (codec and bitrate)
   - Adjust frame rate
   - Set maximum resolution
3. Click "Compress Video" to start compression
4. Watch the real-time preview and progress
5. Download the compressed video when complete

## Technical Details

### Video Processing

- Uses FFMPEG.wasm for client-side video processing
- Supports multiple compression strategies:
  - Bitrate-based: Direct control over output bitrate
  - CRF-based: Quality-focused compression
  - Percentage-based: Simplified quality control
  - File size targeting: Automatic bitrate calculation

### Preview System

- Real-time preview during compression
- Split-view comparison (original vs. compressed)
- Progress-based preview scrubbing
- Live file size estimation

### State Management

- Efficient React state management
- Proper cleanup of resources
- Memory leak prevention
- Comprehensive error handling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [FFMPEG.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm) for browser-based video processing
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Lucide](https://lucide.dev) for icons