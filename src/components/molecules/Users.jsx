import { useState, useEffect } from "react";
import User from "../atoms/User";
import Notifications from "../../assets/Frame 1000002157.svg";
import Profile from "../../assets/Frame 1000002357.svg";
import moment from "moment/moment";
import Filter from "../atoms/Filter";
import Loader from "../atoms/Loader";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_APP_DEXTER_API)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data?.data);
        setFilteredUsers(data?.data);
        setLoading(false);
        console.log(data?.data, "users");
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const handleFilter = (filterOption) => {
    setLoading(true);
    if (filterOption === "") {
      setFilteredUsers(users);
      setLoading(false);
    } else {
      const filtered = users.filter((user) => user[filterOption] === null);
      setFilteredUsers(filtered);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <div className="bg-[#fff] flex items-center justify-between rounded-lg mx-4 my-6 p-2">
        <p>Users</p>
        <div className="flex gap-4 items-center">
          <img src={Notifications} alt="Notifications" />
          <img src={Profile} alt="Profile" />
        </div>
      </div>
      <div className="bg-white p-4 flex flex-row items-center justify-between border-b mx-4 rounded-t-lg">
        <h2 className="text-sm text-[#8D9091] font-normal">Name</h2>
        <div className="flex flex-row items-center justify-between w-[60%]">
          <p className="text-[#8D9091] text-sm">Location</p>
          <p className="text-[#8D9091] text-sm">Date Joined</p>
          <p className="text-[#8D9091] text-sm">Service Requests</p>
          <p className="text-[#8D9091] text-sm">Action</p>
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        filteredUsers.map((user) => (
          <User
            key={user.id}
            name={user.name}
            first_name={user.first_name}
            email={user.email}
            full_address={user.shop?.contact_address?.full_address}
            last_name={user.last_name}
            created_at={moment(user.created_at).format("DD-MM-YYYY")}
            numServiceRequests={user.numServiceRequests}
          />
        ))
      )}

      <Filter handleFilter={handleFilter} />

      <div className="flex-grow"></div>
      <div className="bg-[#fff] flex items-center justify-between p-4 rounded-lg mx-4 my-6">
        <p className="text-[#8D9091] text-xs">1-11 of 1897 items</p>
        <div className="flex gap-4 items-center"></div>
      </div>
    </div>
  );
};

export default Users;
