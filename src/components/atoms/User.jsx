import PropTypes from "prop-types";
import Icon from "../../assets/ellipsis-vertical.svg";

const User = ({
  first_name,
  last_name,
  location,
  created_at,
  numServiceRequests,
}) => {
  return (
    <div className="bg-white p-4 flex flex-row items-center justify-between border-b border-[#8BB17480] gap-[10rem] mx-4">
      <div className="flex items-center flex-row gap-2">
        <h2 className="text-[#8D9091] text-sm font-normal items-center">{first_name}</h2>
        <h2 className="text-[#8D9091] text-sm font-normal items-center">{last_name}</h2>
      </div>
      <div className="flex flex-row items-center justify-between w-3/5">
        <p className="text-[#8D9091] text-sm">{location}</p>
        <p className="text-[#8D9091] text-sm"> {created_at}</p>
        <p className="text-[#8D9091] text-sm"> {numServiceRequests}</p>
        <img src={Icon} alt="menu" />
      </div>
    </div>
  );
};

User.propTypes = {
  first_name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  numServiceRequests: PropTypes.number.isRequired,
};

export default User;
