// import { useState, useEffect } from "react";
// // import PropTypes from 'prop-types';
// import User from "../atoms/User";
// import Notifications from "../../assets/Frame 1000002157.svg";
// import Profile from "../../assets/Frame 1000002357.svg";

// const Users = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://beta.getdexterapp.com/api/test")
//       .then((response) => response.json())
//       .then((data) => {
//         // Ensure data is an array
//         if (Array.isArray(data)) {
//           setUsers(data);
//           console.log(data, "users");
//         } else {
//           // If data is not an array, handle accordingly
//           console.error("Data is not an array:", data);
//         }
//       })
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);


//   return (
//     <div className="flex flex-col h-screen w-full">
//       <div className="bg-[#fff] flex items-center justify-between rounded-lg mx-4 my-6 p-2">
//         <p>Users</p>
//         <div className="flex gap-4 items-center">
//           <img src={Notifications} alt="Notifications" />
//           <img src={Profile} alt="Profile" />
//         </div>
//       </div>
//       <div className="bg-white p-4 flex flex-row items-center justify-between border-b mx-4 rounded-t-lg">
//         <h2 className="text-sm text-[#8D9091] font-normal">Name</h2>
//         <div className="flex flex-row items-center justify-between w-3/5">
//           <p className="text-[#8D9091] text-sm">Location</p>
//           <p className="text-[#8D9091] text-sm">Date Joined</p>
//           <p className="text-[#8D9091] text-sm">Service Requests</p>
//           <p className="text-[#8D9091] text-sm">Action</p>
//         </div>
//       </div>
      
//       {console.log(users, 'Userssss')}

//       {users.map((user) => (
        
//         <User
//           key={user.id} // Assuming user has an id field
//           name={user.name}
//           first_name={user.first_name}
//           location={user.location}
//           last_name={user.last_name}
//           created_at={user.created_at}
//           numServiceRequests={user.numServiceRequests}
//         /> 
//       ))}

//       <div className="flex-grow"></div>
//       <div className="bg-[#fff] flex items-center justify-between p-4 rounded-lg mx-4 my-6">
//         <p className="text-[#8D9091] text-xs">1-11 of 1897 items</p>
//         <div className="flex gap-4 items-center"></div>
//       </div>
//     </div>
//   );
// };

// export default Users;


import User from "../atoms/User";
import Notifications from "../../assets/Frame 1000002157.svg";
import Profile from "../../assets/Frame 1000002357.svg";

const Users = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="bg-[#fff] flex items-center justify-between rounded-lg mx-4 my-6 p-2">
        <p>Users</p>
        <div className="flex gap-4 items-center">
          <img src={Notifications} alt="Notifications" />
          <img src={Profile} alt="Profile" />
        </div>
      </div>
      <div className="bg-white p-4 flex flex-row items-center justify-between border-b border-[#3A5743] mx-4 rounded-t-lg">
        <h2 className="text-sm text-[#8D9091] font-normal">Name</h2>
        <div className="flex flex-row items-center justify-between w-3/5">
          <p className="text-[#8D9091] text-sm">Location</p>
          <p className="text-[#8D9091] text-sm">Date Joined</p>
          <p className="text-[#8D9091] text-sm">Service Requests</p>
          <p className="text-[#8D9091] text-sm">Action</p>
        </div>
      </div>

      <User
        name="John "
        location="Lagos"
        created_at="09-9-1990"
        numServiceRequests={1}
      />
      <User
        last_name="John "
        first_name="ggg"
        location="Lagos"
        created_at="09-9-1990"
        numServiceRequests={1}
      />
      <User
        last_name="John "
        first_name="ggg"
        location="Lagos"
        created_at="09-9-1990"
        numServiceRequests={1}
      />
      <User
        last_name="John "
        first_name="ggg"
        location="Lagos"
        created_at="09-9-1990"
        numServiceRequests={1}
      />
      <User
        last_name="John "
        first_name="ggg"
        location="Lagos"
        created_at="09-9-1990"
        numServiceRequests={1}
      />
      <User
        last_name="John doe"
        first_name="ggg"
        location="Lagos"
        created_at="09-9-1990"
        numServiceRequests={1}
      />
      <User
        last_name="John doe"
        first_name="ggg"
        location="Lagos"
        created_at="09-9-1990"
        numServiceRequests={1}
      />
      <User
        name="John "
        location="Lagos"
        created_at="09-9-1990"
        numServiceRequests={1}
      />
      <User
        name="John "
        location="Lagos"
        created_at="09-9-1990"
        numServiceRequests={1}
      />
      <div className="flex-grow"></div>
      <div className="bg-[#fff] flex items-center justify-between p-4 rounded-lg mx-4 my-6">
        <p className="text-[#8D9091] text-xs">1-11 of 1897 items</p>
        <div className="flex gap-4 items-center"></div>
      </div>
    </div>
  );
};

export default Users;