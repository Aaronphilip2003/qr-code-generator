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
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <main className="w-full max-w-3xl flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-center">Free QR Code Generator</h1>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg mb-4">
            Create QR codes instantly for websites, URLs, and links. No sign-up required, completely free to use.
          </p>
        </div>

        {/* AdSense Ad */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-2976969141373216"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />

        <div className="w-full space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Generate Your QR Code</h2>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your URL here (e.g., https://www.example.com)"
            className="w-full p-3 border rounded-lg dark:bg-gray-700"
          />

          <div className="flex flex-col items-center gap-4">
            {url.trim() && (
              <>
                <div
                  id="qr-code"
                  className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
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
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                >
                  Download QR Code
                </button>
              </>
            )}
          </div>
        </div>

        <section className="w-full space-y-6 mt-8">
          <h2 className="text-2xl font-semibold">How to Use Our QR Code Generator</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="font-semibold mb-2">1. Enter Your URL</h3>
              <p>Paste any website URL into the input field above. Make sure to include https:// or http://.</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="font-semibold mb-2">2. Generate QR Code</h3>
              <p>Your QR code will be generated automatically as soon as you enter a valid URL.</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="font-semibold mb-2">3. Download Your QR Code</h3>
              <p>Click the &ldquo;Download QR Code&rdquo; button to save your QR code as a PNG image.</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="font-semibold mb-2">4. Use Anywhere</h3>
              <p>Use your QR code on business cards, posters, websites, or any marketing materials.</p>
            </div>
          </div>
        </section>

        <section className="w-full mt-8">
          <h2 className="text-2xl font-semibold mb-4">Why Use Our QR Code Generator?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Free to use - no hidden costs or subscriptions</li>
            <li>No registration required - generate QR codes instantly</li>
            <li>High-quality PNG downloads</li>
            <li>Mobile-friendly design</li>
            <li>Simple and easy to use interface</li>
          </ul>
        </section>

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
