import Background from "../../assets/footer_bakcground.svg";
import title from "../../assets/odyssey_title.png";
import logo from "../../assets/odyssey_logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#A03232] text-white overflow-hidden">
      {/* Absolutely positioned yellow silhouette SVG */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] -z-10">
        <img
          src={Background}
          alt="Footer background silhouette"
          className="w-full h-auto"
        />
      </div>

      {/* Main footer content container */}
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-12 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left side: Odyssey title & date */}
        <div className="md:w-1/2">
          <img
            src={title}
            alt="Odyssey Title"
            className="h-12 md:h-16 object-contain"
          />
          <p className="text-2xl md:text-3xl font-bold mt-2">8th - 9th March</p>
        </div>

        {/* Middle: Address & IIITD logo */}
        <div className="md:w-1/2 md:pr-8">
          <div className="mt-4 space-y-1 text-lg">
            <p>IIIT–Delhi</p>
            <p>Okhla Industrial Estate Phase – III</p>
            <p>Near Govind Puri Metro Station</p>
            <p>New Delhi, India – 110020</p>
          </div>

          <div className="mt-4">
            <img
              src={logo}
              alt="IIITD Logo"
              className="h-10 object-contain"
            />
          </div>

          <div className="mt-4 text-lg">
            <p className="font-semibold">Contact:</p>
            <p>odyssey@iiitd.ac.in</p>
            <p>+91 6060606069</p>
            <p>+91 6969696969</p>
          </div>
        </div>

        {/* Right side: Social links (example placeholders) */}
        <div className="md:w-1/3">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Social Links:</h3>
          <ul className="space-y-2 text-lg">
            <li>Instagram: @iiitdodyssey</li>
            <li>Twitter: @odyssey_iiitd</li>
            <li>LinkedIn: IIITD Odyssey</li>
            {/* etc. */}
          </ul>
        </div>
      </div>
    </footer>
  );
}
