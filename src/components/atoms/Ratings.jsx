import PropTypes from "prop-types";
import RatingIcon from "../../assets/rating.svg";

const Ratings = ({ userImage, userName, profession }) => {
  return (
    <div className=" flex items-center lg:gap-[0.6rem] md:gap-10">
      <img
        src={userImage}
        alt={`Profile of ${userName}`}
        className="w-7 h-7 object-cover rounded-full"
      />
      <h2 className="lg:text-[12px] md:text-base text-[#4C4C4C] font-medium text-center">{userName}</h2>
      <p className="text-[#808080] lg:text-[12px] md:text-base text-center">{profession}</p>
      <div className="flex items-center justify-center">
        <img src={RatingIcon} className="w-20 h-20" alt="ratings" />
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
