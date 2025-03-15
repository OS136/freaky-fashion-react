import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAfrica,
  faJetFighter,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";

const DeliveryBadges = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly lg:flex-nowrap gap-5 mx-2">
      {/* First Item */}
      <a className="flex sm:flex-row sm:items-center sm:w-[47%] lg:w-auto w-full">
        <div className="flex-none">
          <FontAwesomeIcon icon={faEarthAfrica} className="w-12 h-7 mr-3" />
        </div>
        <span className="whitespace-nowrap flex-[1_1_80%] p-5">
          Gratis frakt och returer
        </span>
      </a>

      {/* Second Item */}
      <a className="flex sm:flex-row sm:items-center sm:w-[47%] lg:w-auto w-full">
        <div className="flex-none">
          <FontAwesomeIcon icon={faJetFighter} className="w-12 h-7 mr-3" />
        </div>
        <span className="whitespace-nowrap flex-[1_1_80%] p-5">
          Express frakt
        </span>
      </a>

      {/* Third Item */}
      <a className="flex sm:flex-row sm:items-center sm:w-[47%] lg:w-auto w-full">
        <div className="flex-none">
          <FontAwesomeIcon icon={faShieldHalved} className="w-12 h-7 mr-3" />
        </div>
        <span className="whitespace-nowrap flex-[1_1_80%] p-5">
          Säkra betalningar
        </span>
      </a>

      {/* Fourth Item */}
      <a className="flex sm:flex-row sm:items-center sm:w-[47%] lg:w-auto w-full">
        <div className="flex-none">
          <FontAwesomeIcon icon={faFaceSmile} className="w-12 h-7 mr-3" />
        </div>
        <span className="whitespace-nowrap flex-[1_1_80%] p-5">
          Nyheter varje dag
        </span>
      </a>
    </div>
  );
};

export default DeliveryBadges;
