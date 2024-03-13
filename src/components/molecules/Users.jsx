import User from "../atoms/User";
import Notifications from "../../assets/Frame 1000002157.svg";
import Profile from "../../assets/Frame 1000002357.svg";

const Users = () => {
  return (
    <div>
      <div className="bg-[#fff] flex items-center justify-between p-6 pb-6">
        <p>Welcome Dexter Admin,</p>
        <div className="flex gap-4 items-center">
          <img src={Notifications} alt="Notifications" />
          <img src={Profile} alt="Profile" />
        </div>
      </div>
      <div className="bg-white p-4 flex flex-row items-center justify-between border-b">
        <h2 className="text-sm text-[#8D9091] font-normal">Name</h2>
        <div className="flex flex-row items-center justify-between w-3/5">
          <p className="text-[#8D9091] text-sm">Location</p>
          <p className="text-[#8D9091] text-sm">Date Joined</p>
          <p className="text-[#8D9091] text-sm">Service Requests</p>
          <p className="text-[#8D9091] text-sm">Action</p>
        </div>
      </div>

      <User
        name="John doe"
        location="Lagos"
        dateJoined="09-9-1990"
        numServiceRequests={1}
      />
    </div>
  );
};

export default Users;
