import React from 'react';
import type { ConversionSettings } from '../types';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Settings } from 'lucide-react';

interface VideoSettingsProps {
  settings: ConversionSettings;
  onSettingsChange: (settings: ConversionSettings) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function VideoSettings({ settings, onSettingsChange, open, onOpenChange }: VideoSettingsProps) {
  const handleSettingChange = (key: keyof ConversionSettings, value: string) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  const renderCompressionControl = () => {
    switch (settings.compressionMethod) {
      case 'percentage':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Target Quality Percentage
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={settings.targetPercentage || '100'}
              onChange={(e) => handleSettingChange('targetPercentage', e.target.value)}
              className="mt-1 block w-full"
            />
            <div className="mt-1 text-sm text-gray-500">
              {settings.targetPercentage || '100'}% quality
            </div>
          </div>
        );
      case 'filesize':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Target File Size (MB)
            </label>
            <input
              type="number"
              min="1"
              max="10240"
              value={settings.targetFilesize || '100'}
              onChange={(e) => handleSettingChange('targetFilesize', e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
        );
      case 'crf':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Video Quality (CRF)
            </label>
            <select
              value={settings.crfValue || '23'}
              onChange={(e) => handleSettingChange('crfValue', e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              {Array.from({ length: 34 }, (_, i) => i + 18).map((value) => (
                <option key={value} value={value.toString()}>
                  {value} {value === 18 ? '(Best Quality)' : value === 51 ? '(Smallest Size)' : ''}
                </option>
              ))}
            </select>
          </div>
        );
      case 'bitrate':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700">Video Bitrate</label>
            <select
              value={settings.videoBitrate}
              onChange={(e) => handleSettingChange('videoBitrate', e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="300k">300 Kbps</option>
              <option value="1000k">1 Mbps</option>
              <option value="2500k">2.5 Mbps</option>
              <option value="5000k">5 Mbps</option>
              <option value="8000k">8 Mbps</option>
            </select>
          </div>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Conversion Settings</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Compression Method</label>
            <select
              value={settings.compressionMethod}
              onChange={(e) => handleSettingChange('compressionMethod', e.target.value as any)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="bitrate">Target a max bitrate</option>
              <option value="percentage">Target a quality percentage</option>
              <option value="filesize">Target a file size (MB)</option>
              <option value="crf">Target a video quality (CRF)</option>
            </select>
          </div>
          
          <div className="md:col-span-2">
            {renderCompressionControl()}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Video Codec</label>
            <select
              value={settings.videoCodec}
              onChange={(e) => handleSettingChange('videoCodec', e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="libx264">H.264</option>
              <option value="libx265">H.265</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Audio Codec</label>
            <select
              value={settings.audioCodec}
              onChange={(e) => handleSettingChange('audioCodec', e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="aac">AAC</option>
              <option value="mp3">MP3</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Audio Bitrate</label>
            <select
              value={settings.audioBitrate}
              onChange={(e) => handleSettingChange('audioBitrate', e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="64k">64 kbps</option>
              <option value="96k">96 kbps</option>
              <option value="128k">128 kbps</option>
              <option value="192k">192 kbps</option>
              <option value="256k">256 kbps</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Frame Rate</label>
            <select
              value={settings.frameRate}
              onChange={(e) => handleSettingChange('frameRate', e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="24">24 fps</option>
              <option value="30">30 fps</option>
              <option value="60">60 fps</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Max Resolution</label>
            <select
              value={settings.resolution}
              onChange={(e) => handleSettingChange('resolution', e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="1920x1080">1080p (1920px)</option>
              <option value="1280x720">720p (1280px)</option>
              <option value="854x480">480p (854px)</option>
            </select>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function SettingsButton({ onClick }: { onClick: () => void }) {
  return (
    <Button 
      variant="outline" 
      size="icon"
      onClick={onClick}
      className="ml-2"
    >
      <Settings className="h-4 w-4" />
    </Button>
  );
}