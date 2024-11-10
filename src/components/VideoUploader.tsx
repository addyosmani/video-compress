import React from 'react';
import { Upload, AlertCircle } from 'lucide-react';

interface VideoUploaderProps {
  file: File | null;
  onFileChange: (file: File | null) => void;
  error: string | null;
  loading: boolean;
  progress: number;
  isLoadingFFmpeg: boolean;
}

export default function VideoUploader({
  file,
  onFileChange,
  error,
  loading,
  progress,
  isLoadingFFmpeg
}: VideoUploaderProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith('video/')) {
      onFileChange(selectedFile);
    } else {
      onFileChange(null);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-12 bg-gray-50">
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="hidden"
          id="video-input"
        />
        <label
          htmlFor="video-input"
          className="flex flex-col items-center cursor-pointer"
        >
          <Upload className="w-12 h-12 text-gray-400 mb-4" />
          <span className="text-sm text-gray-600">
            {file ? file.name : 'Drop your video here or click to browse'}
          </span>
        </label>
      </div>

      {error && (
        <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      {(loading || isLoadingFFmpeg) && (
        <div className="space-y-3">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${isLoadingFFmpeg ? 100 : progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">
            {isLoadingFFmpeg ? 'Loading FFmpeg...' : `Converting... ${progress}%`}
          </p>
        </div>
      )}
    </>
  );
}