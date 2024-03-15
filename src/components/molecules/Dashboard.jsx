import Notifications from "../../assets/Frame 1000002157.svg";
import Profile from "../../assets/Frame 1000002357.svg";
import DashboardCard from "../atoms/DashboardCard";
import Vendo from "../../assets/icon pak.svg";
import Servic from "../../assets/serv.svg";
import Req from "../../assets/iconpa.svg";
import Use from "../../assets/iconpk.svg";
import Calander from "../../assets/u_calendar-alt.svg";
import Arrow from "../../assets/Group 5858.svg";
import RatedVendors from "../atoms/RatedVendors";
import Graph from "./Graph";
import RatedUsers from "../atoms/RatedUser";

const Dashboard = () => {
  return (
    <div className="lg:w-full md:w-3/5 m-4">
      {/* <div className="ml-[250px] w-full lg:w-4/5÷ lg:ml-[280px] "> */}
      <div className="bg-[#fff] flex items-center justify-between p-2 lg:w-full md:w-[485px] rounded-lg overflow-y-scroll">
        <p className="font-semibold">Welcome Dexter Admin,</p>
        <div className="flex gap-4 items-center">
          <img src={Notifications} alt="Notifications" />
          <img src={Profile} alt="Profile" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-1 gap-x-12 mr-4">
        <DashboardCard text="Vendors" num="350" icon={Vendo} />
        <DashboardCard
          text="Active Services"
          num="10"
          textColor="#F7B32B"
          icon={Servic}
        />
        <DashboardCard
          text="Active Services Request"
          textColor="#C1292E"
          num="56"
          icon={Req}
        />
        <DashboardCard
          text="Users"
          num="1100+"
          textColor="#34252F"
          icon={Use}
        />
      </div>

      <div className="flex flex-row lg:flex-row md:flex-col lg:gap-0 md:gap-4">
        <div className="w-full">
          <div className="bg-[#fff] lg:w-[95%] md:w-full flex items-center justify-between p-2 mb-4 rounded-lg">
            <p>Users on Dexter App</p>
            <div className="flex gap-4 items-center">
              <img src={Calander} alt="Calander" />
              <p>Last 6 months</p>
              <img src={Arrow} alt="Arrow" />
            </div>
          </div>
          <Graph />
        </div>
        <div className="md:flex-row">
          <RatedVendors />
          <RatedUsers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
