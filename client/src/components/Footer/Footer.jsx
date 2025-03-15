import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gray-900 text-white p-6">
      {/* Desktop Footer Menu */}
      <div className="hidden md:flex justify-between max-w-5xl mx-auto">
        {/* Column 1 */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Shopping</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Vinterjäckor
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pufferjackor
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Kappa
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Trenchcoats
              </a>
            </li>
          </ul>
        </div>
        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Mina sidor</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Mina Ordrar
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Mitt konto
              </a>
            </li>
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Kundtjänst</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Returnpolicy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Integritetspolicy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden">
        {[
          {
            title: "Shopping",
            links: ["Vinterjäckor", "Pufferjackor", "Kappa", "Trenchcoats"],
          },
          { title: "Mina sidor", links: ["Mina Ordrar", "Mitt konto"] },
          { title: "Kundtjänst", links: ["Returnpolicy", "Integritetspolicy"] },
        ].map((section, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              className="w-full flex justify-between items-center p-3 text-left text-lg font-semibold"
              onClick={() => toggleSection(index)}
            >
              {section.title}
              <FontAwesomeIcon
                icon={openSection === index ? faChevronUp : faChevronDown}
              />
            </button>
            {openSection === index && (
              <ul className="px-4 pb-3 space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Footer Copyright */}
      <div className="text-center mt-6 text-gray-400">
        &copy; Freaky Fashion
      </div>
    </footer>
  );
};

export default Footer;
