import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(), 
    VitePWA({
      manifest: {
        "theme_color": "#ffffff",
        "background_color": "#ffffff",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "short_name": "Video Compress",
        "description": "Compress is a video converter, compressor, and transcoder that allows you to convert almost any video file into a different format.",
        "name": "Video Compress",
        "icons": [
            {
              "src": "/icon-48x48.png",
              "sizes": "48x48",
              "type": "image/png"
            },
            {
                "src": "/icon-128x128.png",
                "sizes": "128x128",
                "type": "image/png"
            },
            {
                "src": "/icon-256x256.png",
                "sizes": "256x256",
                "type": "image/png"
            }
        ],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
  },
});