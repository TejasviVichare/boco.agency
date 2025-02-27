import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // ✅ Correct import

const DividerWithText = () => {
  return (
    <div className="relative flex items-center my-4">
      {/* Smaller HR */}
      <hr className="w-28 border-gray-300" />


      <div className="flex items-center bg-white px-3 whitespace-nowrap flex-shrink-0 gap-3">
        {/* Stars */}
        <div className="flex ">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl flex-shrink-0 w-6" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl flex-shrink-0 w-6" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl flex-shrink-0 w-6" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl flex-shrink-0 w-6" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl flex-shrink-0 w-6" />
        </div>

    
        <span className="md:text-xl text-sm font-medium" style={{ color: '#140152' }}>
          90+ Brands & Counting
        </span>
      </div>

      {/* Full-width HR */}
      <hr className="flex-grow border-gray-300" />
    </div>
  );
};

export default DividerWithText;
