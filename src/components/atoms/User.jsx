import PropTypes from "prop-types";
import Icon from "../../assets/ellipsis-vertical.svg";

const User = ({
  first_name,
  last_name,
  full_address,
  created_at,
  // numServiceRequests,
  email
}) => {
    const address = full_address || "Address not available"; 
  return (
    <div className="bg-white p-4 flex flex-row items-center justify-between border-b border-[#8BB17480] md:gap-0 mx-4">
      <div className="flex items-center flex-row gap-2">
        <h2 className="text-[#8D9091] text-sm font-normal items-center">{first_name}</h2>
        <h2 className="text-[#8D9091] text-sm font-normal items-center">{last_name}</h2>
      </div>
      <div className="flex flex-row items-center justify-between w-3/5">
        <p className="text-[#8D9091] text-sm justify-start w-[120px]">{address}</p>
        <p className="text-[#8D9091] text-sm"> {created_at}</p>
        {/* <p className="text-[#8D9091] text-sm"> {numServiceRequests}</p> */}
        <p className="text-[#8D9091] text-sm"> {email}</p>
        <img src={Icon} alt="menu" />
      </div>
    </div>
  );
};

User.propTypes = {
  first_name: PropTypes.string.isRequired,
  full_address: PropTypes.string,
  last_name: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  numServiceRequests: PropTypes.number,
  email: PropTypes.string,
};

export default User;
