// import PropTypes from "prop-types";

// const DashboardCard = ({ icon, num, text }) => {
//   return (
//     <div className="bg-white p-4 min-w-[250px] min-h-[150px] rounded-lg shadow-md">
//       <div className="flex  flex-col  items-center justify-center mb-4">
//         <img src={icon} alt={icon} className="flex-start" />
//         <div className="flex flex-col">
//           <h3>{num}</h3>
//           <h3 className="text-lg font-semibold">{text}</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// DashboardCard.propTypes = {
//   icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
//   num: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//   text: PropTypes.string.isRequired,
// };

// export default DashboardCard;


// import PropTypes from "prop-types";

// const DashboardCard = ({ icon, num, text }) => {
//   return (
//     <div className="bg-white p-4 min-w-[250px] min-h-[150px] rounded-lg shadow-md">
//       <div className="flex flex-col items-start justify-start mb-4">
//         <img src={icon} alt={icon} className="mr-4" />
//         <div className="flex flex-col items-center">
//           <h3>{num}</h3>
//           <h3 className="text-lg font-semibold">{text}</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// DashboardCard.propTypes = {
//   icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
//   num: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//   text: PropTypes.string.isRequired,
// };

// export default DashboardCard;


import PropTypes from "prop-types";

const DashboardCard = ({ icon, num, text }) => {
  return (
    <div className="bg-white p-4 min-w-[250px] min-h-[150px] rounded-lg shadow-md flex items-center justify-center">
      <div className="flex flex-col items-start">
        <img src={icon} alt={icon} className="mr-4" />
        <div className="flex flex-col items-center">
          <h3>{num}</h3>
          <h3 className="text-lg font-semibold">{text}</h3>
        </div>
      </div>
    </div>
  );
};

DashboardCard.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  num: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  text: PropTypes.string.isRequired,
};

export default DashboardCard;
