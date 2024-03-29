import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const users = [
  {
    months: "Mar",
    revenue: 0,
    users: 50,
  },
  {
    months: "Apr",
    revenue: 0,
    users: 150,
  },
  {
    months: "May",
    revenue: 0,
    users: 300,
  },
  {
    months: "June",
    revenue: 0,
    users: 500,
  },
  {
    months: "July",
    revenue: 0,
    users: 750,
  },
  {
    months: "Aug",
    revenue: 0,
    users: 1000,
  },
];

const Graph = () => {
  return (
    <div className="w-full h-full md:w-[10px] lg:w-4/4">
      <ResponsiveContainer
        width={550}
        height={650}
        className="bg-white lg:px-8 md:px-2 pt-4 pb-[1rem] rounded-md"
      >
        <LineChart
          width={50}
          height={100}
          data={users}
          margin={{
            right: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="months" stroke="#F7B32B" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="users" stroke="#3A5743" />
        </LineChart>
      </ResponsiveContainer>
    </div>
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
          <span className="ml-2">${payload[1]?.value}</span>
        </p>
      </div>
    );
  }
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
  label: PropTypes.string,
};
