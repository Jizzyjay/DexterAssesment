import PropTypes from "prop-types";
import Icon from "../../assets/ellipsis-vertical.svg";

const User = ({ name, location, dateJoined, numServiceRequests }) => {
  return (
    <div className="bg-white p-4 flex flex-row items-center justify-between border-b gap-[10rem]">
      <h2 className="text-[#8D9091] text-sm font-normal">{name}</h2>
      <div className="flex flex-row items-center justify-between w-3/5">
        <p className="text-[#8D9091] text-sm">{location}</p>
        <p className="text-[#8D9091] text-sm"> {dateJoined}</p>
        <p className="text-[#8D9091] text-sm"> {numServiceRequests}</p>
        <img src={Icon} alt="menu" />
      </div>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  dateJoined: PropTypes.string.isRequired,
  numServiceRequests: PropTypes.number.isRequired,
};

export default User;
