import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-6 gap-12">

        {/* ================= BRAND ================= */}
        <div className="col-span-full md:col-span-1 space-y-4">
          <h2 className="text-xl font-semibold">IIElevenLabs</h2>

          <button className="flex items-center gap-2 text-sm text-gray-700">
            文A <span>English</span>
          </button>
        </div>

        {/* ================= FOOTER LINKS ================= */}
        <div className="col-span-full md:col-span-5 grid grid-cols-2 md:grid-cols-4 gap-12">

          {/* RESEARCH + PRODUCTS */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm text-gray-500">Research</h3>
              <ul className="space-y-2 text-sm mt-3">
                <li>Text to Speech (TTS)</li>
                <li>Speech to Text</li>
                <li>Realtime Speech to Text</li>
                <li>Voice Changer</li>
                <li>Text to Sound Effects</li>
                <li>Voice Cloning</li>
                <li>Voice Isolator</li>
                <li>AI Music Generator</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm text-gray-500">Products</h3>
              <ul className="space-y-2 text-sm mt-3">
                <li>Studio</li>
                <li>Agents Platform</li>
                <li>Dubbing Studio</li>
                <li>Voice Library</li>
                <li>Image & Video</li>
                <li>Audio Native</li>
                <li>ElevenStudios</li>
                <li>API</li>
                <li>Voiceover Studio</li>
                <li>Mobile App</li>
                <li>AI Voice Generator</li>
              </ul>
            </div>
          </div>

          {/* SOLUTIONS + EARN AS */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm text-gray-500">Solutions</h3>
              <ul className="space-y-2 text-sm mt-3">
                <li>For Enterprise</li>
                <li>For Teams</li>
                <li>For Developers</li>
                <li>For Startups</li>
                <li>For Students</li>
                <li>Retail and E-Commerce</li>
                <li>Telecommunications</li>
                <li>Financial Services</li>
                <li>Technology</li>
                <li>Customer Support</li>
                <li>AI Voice Agents</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm text-gray-500">Earn As</h3>
              <ul className="space-y-2 text-sm mt-3">
                <li>Affiliate</li>
                <li>Voice Actor</li>
                <li>Data Partner</li>
                <li>Commercial Partner</li>
              </ul>
            </div>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-sm text-gray-500">Resources</h3>
            <ul className="space-y-2 text-sm mt-3">
              <li>API Reference</li>
              <li>Product Guides</li>
              <li>Help Centre</li>
              <li>Languages</li>
              <li>Webinars</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookie Settings</li>
            </ul>
          </div>

          {/* SOCIALS + COMPANY */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm text-gray-500">Socials</h3>
              <ul className="space-y-2 text-sm mt-3">
                <li>X</li>
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>YouTube</li>
                <li>Discord</li>
                <li>TikTok</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Reddit</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm text-gray-500">Company</h3>
              <ul className="space-y-2 text-sm mt-3">
                <li>About</li>
                <li>Safety</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Impact Program</li>
                <li>Brand and Press Kit</li>
                <li>Iconic Marketplace</li>
                <li>Modern Slavery Policy</li>
                <li>CCPA Notice</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
