import PropTypes from "prop-types";

const DashboardCard = ({ icon, num, text, textColor }) => {
  return (
    <div className="bg-white my-4 w-full md:w-[230px] lg:w-[200px] h-[160px] md:h-[180px] rounded-lg p-4 shadow-md flex items-center">
      <div className="flex flex-col gap-y-4">
        <img src={icon} alt={icon} className="w-14 h-14 md:mr-[5rem] items-start" />
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
