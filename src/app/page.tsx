'use client';
import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import * as htmlToImage from 'html-to-image';

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

export default function Home() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  const downloadQRCode = async () => {
    const qrCodeElement = document.getElementById('qr-code');
    if (qrCodeElement) {
      try {
        const dataUrl = await htmlToImage.toPng(qrCodeElement);
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center gap-8">
      <main className="w-full max-w-2xl flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold text-center">URL to QR Code Converter</h1>

        {/* AdSense Ad */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-2976969141373216"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />

        <div className="w-full space-y-4">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your URL here"
            className="w-full p-3 border rounded-lg dark:bg-gray-800"
          />

          <div className="flex flex-col items-center gap-4">
            {url.trim() && (
              <>
                <div
                  id="qr-code"
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg"
                >
                  <QRCodeSVG
                    value={url}
                    size={256}
                    level="H"
                    includeMargin={true}
                    className="dark:bg-white p-2 rounded"
                  />
                </div>

                <button
                  onClick={downloadQRCode}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Download QR Code
                </button>
              </>
            )}
          </div>
        </div>

        {/* Bottom AdSense Ad */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-2976969141373216"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </main>
    </div>
  );
}
