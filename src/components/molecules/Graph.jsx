// import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const users = [
  {
    months: 'Mar',
    revenue: 0,
    users: 50,
  },
  {
    months: 'Apr',
    revenue: 0,
    users: 150,
  },
  {
    months: 'May',
    revenue: 0,
    users: 300,
  },
  {
    months: 'June',
    revenue: 0,
    users: 500,
  },
  {
    months: 'July',
    revenue: 0,
    users: 750,
  },
  {
    months: 'Aug',
    revenue: 0,
    users: 1000,
  },
];

const Graph = () => {
  return (
    <ResponsiveContainer width="100%" height="80%" className="bg-white px-8 pt-4 pb-[1rem] rounded-md">
      <LineChart
        width={500}
        height={300}
        data={users}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="months" stroke='#F7B32B' />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="users" stroke="#3A5743" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Revenue:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Users
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};



// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
//         <p className="text-medium text-lg">{label}</p>
//         <p className="text-sm text-blue-400">
//           Revenue:
//           <span className="ml-2">${payload[0].value}</span>
//         </p>
//         <p className="text-sm text-indigo-400">
//           Users:
//           <span className="ml-2">${payload[1].value}</span>
//         </p>
//       </div>
//     );
//   } else {
//     return null; // Return null if not active
//   }
// };

// CustomTooltip.propTypes = {
//   active: PropTypes.bool, // Validate the 'active' prop
//   payload: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.number,
//     })
//   ),
//   label: PropTypes.string,
// };

