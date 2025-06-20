
import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const locations = [
  "Wicker Arches",
  "Wicker Lane",
  "Lady's Bridge",
  "Sheffield Old Town Hall",
  "Campo Lane",
  "East Parade",
  "Cathedral",
  "Sheffield City Centre",
  "Sheffield City Hall",
  "Former Henderson's Relish Factory",
  "Firth Court",
  "Weston Park",
  "The Wave, The University of Sheffield",
  "Broomhill"
];

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-4xl shadow-lg">⚽</div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Sheffield</h1>
        <p className="text-2xl md:text-3xl font-light mb-4">Home of Football</p>
        <p className="text-lg max-w-xl">Explore the journey of the first away match in football history, and discover historical locations that shaped the sport in Sheffield.</p>
        <a href="https://sheffieldhomeoffootball.org/" target="_blank" rel="noopener noreferrer" className="mt-6 text-blue-300 underline hover:text-white">Visit Sheffield Home of Football →</a>
      </section>

      {/* VR Experience Section */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Immersive VR Experience</h2>
        <p className="mb-8 text-gray-600 max-w-2xl mx-auto">Watch the full Wonda VR experience showcasing the story of the first away football match.</p>
        <div className="max-w-5xl mx-auto aspect-video">
          <iframe
            src="https://spaces.wondavr.com/embed/?course=8182e6f0-363d-11f0-b5a5-a7a745fb836e&presenter=true"
            className="w-full h-full border-0 rounded-xl shadow-xl"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-slate-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Interactive Historical Map</h2>
        <p className="mb-8 text-gray-300 max-w-2xl mx-auto">Explore historical locations by using the interactive map or selecting them from the list below.</p>
        <div className="max-w-6xl mx-auto mb-12 aspect-video">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=14sMWFYX6m315Iwe7d-KNR9mxi5LK6No&ehbc=2E312F&noprof=1"
            className="w-full h-full border-0 rounded-xl shadow-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Locations List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {locations.map((name, index) => (
            <div key={index} className="bg-white text-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition border border-transparent hover:border-blue-300">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold flex items-center">
                  <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                  {name}
                </h3>
                <a
                  href={`https://proxy-link-to-wonda-scene.com/location-${index + 1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline flex items-center"
                >
                  View Scene <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
              <p className="text-sm text-gray-600">Click to explore the Wonda VR scene for this historic location.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white text-center py-8">
        <p className="text-sm">© 2025 Sheffield Home of Football. Built to honor the legacy of football’s roots.</p>
      </footer>
    </div>
  );
};

export default App;
