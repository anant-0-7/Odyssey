import castle from "../assets/castle.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

const VenueSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white space-y-8">
      {/* Castle SVG */}
      <img src={castle} alt="Castle" className="w-40 h-40 mb-4" />

      <h1 className="text-4xl font-bold text-center text-[#2D2D2D]">VENUE</h1>

      <div className="text-center space-y-2 max-w-2xl">
        <p className="text-lg text-[#555555] leading-relaxed">
          FOLLOW US ON SOCIAL MEDIA TO STAY UPDATED ON ALL THE EXCITING
        </p>
        <p className="text-lg text-[#555555] leading-relaxed">
          DEVELOPMENTS AND SNEAK PEEKS LEADING UP TO THE GRAND EVENT
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-4">
        <a href="#" className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#e0e0e0] transition">
          <img src={instagram} className="w-6 h-6" alt="Instagram" />
        </a>
        <a href="#" className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#e0e0e0] transition">
          <img src={twitter} className="w-6 h-6" alt="Twitter" />
        </a>
        <a href="#" className="p-2 rounded-full bg-[#F5F5F5] hover:bg-[#e0e0e0] transition">
          <img src={linkedin} className="w-6 h-6" alt="LinkedIn" />
        </a>
      </div>

      <h2 className="text-2xl font-semibold text-[#333333] mt-8">GOOGLE MAP LOCATION</h2>

      {/* Google Map Container - Exact dimensions */}
      <div className="w-full max-w-4xl h-96 bg-gray-100 rounded-xl border-2 border-[#E0E0E0]">
        {/*<GoogleMapComponent />*/}
      </div>

      <div className="text-center space-y-1 text-[#444444] mt-6">
        <p className="font-semibold text-lg tracking-tight">
          INDOAPRASTHA INSTITUTE OF INFORMATION TECHNOLOGY DELHI
        </p>
        <p className="text-sm">OKHLA INDUSTRIAL ESTATE PHASE III</p>
        <p className="text-sm">NEAR GOVIND PURI METRO STATION</p>
      </div>
    </div>
  );
};

/*
 * 
 *

// Google Maps Component (Separate file)
const GoogleMapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div className="w-full h-full flex items-center justify-center text-gray-500">Loading Map...</div>;
  
  return (
    <GoogleMap
      zoom={15}
      center={{ lat: 28.5443, lng: 77.2726 }}
      mapContainerClassName="w-full h-full rounded-xl"
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      }}
    />
  );
};
 */
export default VenueSection;