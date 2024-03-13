import PropTypes from "prop-types";
import RatingIcon from "../../assets/rating.svg";

const Ratings = ({ userImage, userName, profession }) => {
  return (
    <div className=" flex items-center p-2 gap-4">
      <img
        src={userImage}
        alt={`Profile of ${userName}`}
        className="w-12 h-12 object-cover rounded-full"
      />
      <h2 className="text-base font-semibold text-center">{userName}</h2>
      <p className="text-gray-500 text-base text-center">{profession}</p>
      <div className="flex items-center justify-center">
        <img src= {RatingIcon} alt="ratings" />
      </div>
    </div>
  );
};

Ratings.propTypes = {
  userImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
};

export default Ratings;
