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
    <div>
      <div className="bg-[#fff] flex items-center justify-between pb-6">
        <p>Welcome Dexter Admin,</p>
        <div className="flex gap-4 items-center">
          <img src={Notifications} alt="Notifications" />
          <img src={Profile} alt="Profile" />
        </div>
      </div>

      <div className="flex justify-between">
        <DashboardCard text="Vendors" num="350" icon={Vendo} />
        <DashboardCard text="Active Services" num="10" icon={Servic} />
        <DashboardCard text="Active Services Request" num="56" icon={Req} />
        <DashboardCard text="Users" num="1100+" icon={Use} />
      </div>

      <div className="bg-[#fff] flex items-center justify-between pt-6 pb-6">
        <p>Users on Dexter App</p>
        <div className="flex gap-4 items-center">
          <img src={Calander} alt="Calander" />
          <p>Last 6 months</p>
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>

      <div className="flex flex-row gap-6 ">
        <div className="min-w-[1040px]">
          <div className="bg-[#fff] flex items-center justify-between pt-6 pb-6">
            <p>Users on Dexter App</p>
            <div className="flex gap-4 items-center">
              <img src={Calander} alt="Calander" />
              <p>Last 6 months</p>
              <img src={Arrow} alt="Arrow" />
            </div>
          </div>
          <Graph />
        </div>

        <div>
          <RatedVendors />
          <RatedUsers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
