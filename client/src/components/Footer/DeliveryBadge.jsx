import {
  faEarthAfrica,
  faJetFighter,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DeliveryBadges = () => {
  return (
    <div className="flex flex-col mx-4 mb-4 sm:flex-row sm:flex-wrap sm:justify-left md:justify-evenly md:gap-5 lg:flex-nowrap">
      <div className="grid md:grid-flow-col md:grid-rows-2  md:gap-x-24 lg:grid-rows-1 lg:gap-x-0 lg:w-full lg:place-items-center">
        {/* First Item */}
        <a className="flex items-center sm:flex-row sm:items-center sm:w-[246px]">
          <div className="flex-none">
            <FontAwesomeIcon icon={faEarthAfrica} className="w-12 h-7 mr-3" />
          </div>
          <span className="whitespace-nowrap p-5">
            Gratis frakt och returer
          </span>
        </a>

        {/* Second Item */}
        <a className="flex items-center sm:flex-row sm:items-center sm:w-[246px]">
          <div className="flex-none">
            <FontAwesomeIcon icon={faJetFighter} className="w-12 h-7 mr-3" />
          </div>
          <span className="whitespace-nowrap p-5">Express frakt</span>
        </a>

        {/* Third Item */}
        <a className="flex items-center sm:flex-row sm:items-center sm:w-[246px]">
          <div className="flex-none">
            <FontAwesomeIcon icon={faShieldHalved} className="w-12 h-7 mr-3" />
          </div>
          <span className="whitespace-nowrap p-5">Säkra betalningar</span>
        </a>

        {/* Fourth Item */}
        <a className="flex items-center sm:flex-row sm:items-center sm:w-[246px]">
          <div className="flex-none">
            <FontAwesomeIcon icon={faFaceSmile} className="w-12 h-7 mr-3" />
          </div>
          <span className="whitespace-nowrap p-5">Nyheter varje dag</span>
        </a>
      </div>
    </div>
  );
};

export default DeliveryBadges;
