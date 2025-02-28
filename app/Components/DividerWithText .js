import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const DividerWithText = () => {
  return (
    <div className="relative flex items-center my-4 mt-10">
      {/* Smaller HR */}
      <hr className="md:w-32 w-12 border-gray-300" />

      <div className="flex flex-row md:flex-row items-center text-center bg-white px-3 whitespace-nowrap flex-shrink-0 gap-2 md:gap-3">
        {/* Stars */}
        <div className="flex">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl flex-shrink-0 w-6" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl flex-shrink-0 w-6" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl flex-shrink-0 w-6" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl flex-shrink-0 w-6" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl flex-shrink-0 w-6" />
        </div>

        <span className="md:text-xl text-sm font-medium" style={{ color: "#140152" }}>
          90+ Brands & Counting
        </span>
      </div>

      {/* Full-width HR */}
      <hr className="flex-grow border-gray-300" />
    </div>
  );
};

export default DividerWithText;
