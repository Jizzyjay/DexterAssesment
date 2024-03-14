import PropTypes from "prop-types";

const DashboardCard = ({ icon, num, text, textColor }) => {
  return (
    <div className="bg-white my-4 w-[190px] h-[160px] rounded-lg p-4 shadow-md flex items-center">
      <div className="flex flex-col gap-y-4">
        <img src={icon} alt={icon} className="mr-[5rem] w-14 h-14 items-start" />
        <div className="flex flex-col items-center">
          <h3 className={`font-semibold text-${textColor}`}>{num}</h3>
          <h3 className={`text-base font-normal text-[#5B5B5B]`}>{text}</h3>
        </div>
      </div>
    </div>
  );
};

DashboardCard.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  num: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

export default DashboardCard;
