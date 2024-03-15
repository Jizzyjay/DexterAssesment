import PropTypes from "prop-types";
import RatingIcon from "../../assets/rating.svg";

const UserRatings = ({ userImage, userName }) => {
  return (
    <div className=" flex items-center justify-between p-2">
      <div className="flex items-center gap-4">
        <img
          src={userImage}
          alt={`Profile of ${userName}`}
          className="w-8 h-8 object-cover rounded-full"
        />
        <h2 className="lg:text-sm md:text-xs text-[#4C4C4C] font-medium text-center">{userName}</h2>
      </div>
      <div className="flex items-center justify-center">
        <img src={RatingIcon} alt="ratings" />
      </div>
    </div>
  );
};

UserRatings.propTypes = {
  userImage: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default UserRatings;
