// // import { useEffect, useState,  useRef} from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // function Home({ setUser }) {
// //   const [message, setMessage] = useState("");
// //   const navigate = useNavigate();
// //   const hasFetched = useRef(false); // Ref to track if fetchHome has been called


// //   useEffect(() => {
// //     const fetchHome = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         const response = await axios.get("http://127.0.0.1:8000/api/auth/profile/", {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         setMessage(response.data.message);
// //       } catch (error) {
// //         alert("Session expired. Please login again.");
// //         handleLogout();
// //       }
// //     };

// //     if (!hasFetched.current) {
// //       fetchHome();
// //       hasFetched.current = true; // Mark as fetched
// //     }
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     setUser(null);
// //     navigate("/login");
// //   };





// //   // useEffect(() => {
// //   //   const fetchHome = async () => {
// //   //     try {
// //   //       const token = localStorage.getItem("token");
// //   //       const response = await axios.get("http://127.0.0.1:8000/api/auth/home/", {
// //   //         headers: { Authorization: `Bearer ${token}` },
// //   //       });
// //   //       setMessage(response.data.message);
// //   //     } catch (error) {
// //   //       alert("Session expired. Please login again.");
// //   //       handleLogout();
// //   //     }
// //   //   };
// //   //   fetchHome();
// //   // }, []);

// //   // const handleLogout = () => {
// //   //   localStorage.removeItem("token");
// //   //   setUser(null);
// //   //   navigate("/login");
// //   // };

// // //   return (
// // //     <div className="body">
// // //     <div className="home_container">
// // //       {/* Navigation Bar */}
// // //       <div className="logout_nav">
// // //         {/* Logo Section */}
// // //         <div className="logo">
// // //           <img src="vizo_home.png" alt="Logo" />
// // //         </div>

// // //         {/* Logout Button */}
// // //         <nav>
// // //           <button className="home-btn-login" onClick={handleLogout}>
// // //             <i className="fas fa-sign-out-alt"></i> Logout
// // //           </button>
// // //         </nav>
// // //       </div>

// // //       {/* Welcome Message */}
// // //       <div>
// // //         <h1>{message}</h1>
// // //       </div>
// // //     </div>
// // //     </div>
// // //   );

// // return (
// //   <div className="container-fluid bg-light">
// //     {/* Navbar */}
// //     <nav className="navbar navbar-dark bg-dark px-3">
// //       <a className="navbar-brand mx-auto" href="#">Vizo</a>
// //       <input type="text" className="form-control w-25" placeholder="Search" />
      
// //       <button className="btn btn-dark" onClick={handleLogout}>
// //             <i className="fas fa-sign-out-alt"></i> Logout
// //            </button>
         
// //     </nav>

// //     <div className="container mt-4 d-flex">
// //       {/* Sidebar */}
// //       <div className="col-md-3">
// //         <div className="card p-3">
// //           <img
// //             src="src\assets\images\ashif_pf.jpg"
// //             className="rounded mx-auto d-block w-50 h-50"
// //             alt="User"
// //           />
// //           <h5 className="text-center mt-2">Jane Smith</h5>
// //           <p className="text-center text-muted">@janesmith</p>
// //           <button className="btn btn-success w-100">Following</button>
// //           <hr />
// //           <p><strong>330</strong> Posts</p>
// //           <p><strong>2,090</strong> Followers</p>
// //           <p><strong>901</strong> Following</p>
// //         </div>
// //       </div>

// //       {/* Feed */}
// //       <div className="col-md-6">
// //         <div className="d-flex justify-content-between mb-3">
// //           <button className="btn btn-dark"><i className="fas fa-home"></i> Home</button>
// //           <button className="btn btn-dark"><i className="fas fa-search"></i> Explore</button>
// //           <button className="btn btn-dark"><i className="fas fa-plus-square"></i> Upload</button>
// //           <button className="btn btn-dark"><i className="fas fa-user-friends"></i> Following</button>
// //           <button className="btn btn-dark"><i className="fas fa-user"></i> Profile</button>
// //         </div>
// //         <div className="row g-2">
// //           <div className="col-6">
// //             <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Post" />
// //           </div>
// //           <div className="col-6">
// //             <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Post" />
// //           </div>
// //           <div className="col-6">
// //             <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Post" />
// //           </div>
// //           <div className="col-6">
// //             <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Post" />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Suggestions */}
// //       <div className="col-md-3">
// //         <h5>Suggestions</h5>
// //         <ul className="list-group">
// //           <li className="list-group-item">Adeline Charles <span className="text-muted">Brooklyn, NY</span></li>
// //           <li className="list-group-item">Keren Suer <span className="text-muted">San Francisco, CA</span></li>
// //           <li className="list-group-item">Sam Soffes <span className="text-muted">Los Angeles, CA</span></li>
// //         </ul>
// //       </div>
// //     </div>
// //   </div>
// // );
// // }
// // export default Home;



// // // import { useState } from "react";
// // // import { FaHome, FaSearch, FaPlusSquare, FaUserFriends, FaUser } from "react-icons/fa";

// // // export default function InstagramClone() {
// // //   return (
// // //     <div className="bg-gray-100 min-h-screen flex flex-col items-center">
// // //       {/* Navbar */}
// // //       <nav className="w-full bg-white shadow-md flex justify-between items-center p-4 px-10">
// // //         <h1 className="text-xl font-bold text-blue-600">Instagram</h1>
// // //         <div className="flex gap-6 text-gray-600 text-xl">
// // //           <FaHome className="hover:text-black cursor-pointer" />
// // //           <FaSearch className="hover:text-black cursor-pointer" />
// // //           <FaPlusSquare className="hover:text-black cursor-pointer" />
// // //           <FaUserFriends className="hover:text-black cursor-pointer" />
// // //           <FaUser className="hover:text-black cursor-pointer" />
// // //         </div>
// // //       </nav>
      
// // //       {/* Content */}
// // //       <div className="flex mt-10 w-full px-10 gap-8">
// // //         {/* Left Panel - Profile */}
// // //         <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
// // //           <img
// // //             src="https://via.placeholder.com/100"
// // //             className="w-24 h-24 rounded-full mx-auto"
// // //             alt="Profile"
// // //           />
// // //           <h2 className="text-center mt-2 font-semibold text-gray-800">Jane Smith</h2>
// // //           <p className="text-center text-gray-500">@janesmith</p>
// // //           <button className="w-full bg-green-500 text-white p-2 mt-3 rounded-lg hover:bg-green-600">
// // //             Following
// // //           </button>
// // //           <div className="flex justify-around mt-4">
// // //             <div className="text-center">
// // //               <p className="font-bold text-gray-800">330</p>
// // //               <p className="text-gray-500">Posts</p>
// // //             </div>
// // //             <div className="text-center">
// // //               <p className="font-bold text-gray-800">2,090</p>
// // //               <p className="text-gray-500">Followers</p>
// // //             </div>
// // //             <div className="text-center">
// // //               <p className="font-bold text-gray-800">901</p>
// // //               <p className="text-gray-500">Following</p>
// // //             </div>
// // //           </div>
// // //         </div>
        
// // //         {/* Middle Panel - Posts Grid */}
// // //         <div className="flex-1 grid grid-cols-3 gap-4">
// // //           {Array(9).fill().map((_, i) => (
// // //             <img
// // //               key={i}
// // //               src={`https://source.unsplash.com/random/300x300?sig=${i}`}
// // //               className="w-full h-40 object-cover rounded-lg hover:opacity-80 cursor-pointer"
// // //               alt="Post"
// // //             />
// // //           ))}
// // //         </div>
        
// // //         {/* Right Panel - Suggestions */}
// // //         <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
// // //           <h3 className="text-lg font-semibold text-gray-800">Suggestions</h3>
// // //           {Array(5).fill().map((_, i) => (
// // //             <div key={i} className="flex items-center gap-3 mt-4">
// // //               <img
// // //                 src="https://via.placeholder.com/40"
// // //                 className="w-10 h-10 rounded-full"
// // //                 alt="User"
// // //               />
// // //               <div>
// // //                 <p className="font-semibold text-gray-700">User {i + 1}</p>
// // //                 <p className="text-sm text-gray-500">@user{i + 1}</p>
// // //               </div>
// // //               <button className="ml-auto bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
// // //                 Follow
// // //               </button>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // // export default function InstagramClone() {
// // //   return (
// // //     <div className="container-fluid bg-light">
// // //       {/* Navbar */}
// // //       <nav className="navbar navbar-dark bg-dark px-3">
// // //         <a className="navbar-brand mx-auto" href="#">Vizo</a>
// // //         <input type="text" className="form-control w-25" placeholder="Search" />
        
// // // //           <button className="home-btn-login" onClick={handleLogout}>
// // // //             <i className="fas fa-sign-out-alt"></i> Logout
// // // //           </button>
// // // //         
// // //       </nav>

// // //       <div className="container mt-4 d-flex">
// // //         {/* Sidebar */}
// // //         <div className="col-md-3">
// // //           <div className="card p-3">
// // //             <img
// // //               src="src\assets\images\ashif_pf.jpg"
// // //               className="rounded mx-auto d-block w-50 h-50"
// // //               alt="User"
// // //             />
// // //             <h5 className="text-center mt-2">Jane Smith</h5>
// // //             <p className="text-center text-muted">@janesmith</p>
// // //             <button className="btn btn-success w-100">Following</button>
// // //             <hr />
// // //             <p><strong>330</strong> Posts</p>
// // //             <p><strong>2,090</strong> Followers</p>
// // //             <p><strong>901</strong> Following</p>
// // //           </div>
// // //         </div>

// // //         {/* Feed */}
// // //         <div className="col-md-6">
// // //           <div className="d-flex justify-content-between mb-3">
// // //             <button className="btn btn-dark"><i className="fas fa-home"></i> Home</button>
// // //             <button className="btn btn-dark"><i className="fas fa-search"></i> Explore</button>
// // //             <button className="btn btn-dark"><i className="fas fa-plus-square"></i> Upload</button>
// // //             <button className="btn btn-dark"><i className="fas fa-user-friends"></i> Following</button>
// // //             <button className="btn btn-dark"><i className="fas fa-user"></i> Profile</button>
// // //           </div>
// // //           <div className="row g-2">
// // //             <div className="col-6">
// // //               <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Post" />
// // //             </div>
// // //             <div className="col-6">
// // //               <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Post" />
// // //             </div>
// // //             <div className="col-6">
// // //               <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Post" />
// // //             </div>
// // //             <div className="col-6">
// // //               <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Post" />
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Suggestions */}
// // //         <div className="col-md-3">
// // //           <h5>Suggestions</h5>
// // //           <ul className="list-group">
// // //             <li className="list-group-item">Adeline Charles <span className="text-muted">Brooklyn, NY</span></li>
// // //             <li className="list-group-item">Keren Suer <span className="text-muted">San Francisco, CA</span></li>
// // //             <li className="list-group-item">Sam Soffes <span className="text-muted">Los Angeles, CA</span></li>
// // //           </ul>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// import { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Home({ setUser }) {
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();
//   const hasFetched = useRef(false); // Ref to track if fetchHome has been called

//   useEffect(() => {
//     const fetchHome = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("http://127.0.0.1:8000/api/auth/profile/", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setMessage(response.data.message);
//       } catch (error) {
//         alert("Session expired. Please login again.");
//         handleLogout();
//       }
//     };

//     if (!hasFetched.current) {
//       fetchHome();
//       hasFetched.current = true; // Mark as fetched
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <div className="container-fluid bg-light">
//       {/* Navbar */}
//       <nav className="navbar navbar-dark bg-dark px-3">
//         <a className="navbar-brand mx-auto" href="#">Vizo</a>
//         <input type="text" className="form-control w-25" placeholder="Search" />
//         <button className="btn btn-dark" onClick={handleLogout}>
//           <i className="fas fa-sign-out-alt"></i> Logout
//         </button>
//       </nav>

//       <div className="container mt-4 d-flex">
//         {/* Sidebar */}
//         <div className="col-md-3">
//           <div className="card p-3">
//             <img
//               src="src/assets/images/ashif_pf.jpg"
//               className="rounded mx-auto d-block w-50 h-50"
//               alt="User"
//             />
//             <h5 className="text-center mt-2">Jane Smith</h5>
//             <p className="text-center text-muted">@janesmith</p>
//             <button className="btn btn-success w-100">Following</button>
//             <hr />
//             <p><strong>330</strong> Posts</p>
//             <p><strong>2,090</strong> Followers</p>
//             <p><strong>901</strong> Following</p>
//           </div>
//         </div>

//         {/* Feed */}
//         <div className="col-md-6">
//           <div className="d-flex justify-content-between mb-3">
//             <button className="btn btn-dark"><i className="fas fa-home"></i> Home</button>
//             <button className="btn btn-dark"><i className="fas fa-search"></i> Explore</button>
//             <button className="btn btn-dark"><i className="fas fa-plus-square"></i> Upload</button>
//             <button className="btn btn-dark"><i className="fas fa-user-friends"></i> Following</button>
//             <button className="btn btn-dark"><i className="fas fa-user"></i> Profile</button>
//           </div>
//           <div className="row g-2">
//             <div className="col-6">
//               <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Post" />
//             </div>
//             <div className="col-6">
//               <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Post" />
//             </div>
//             <div className="col-6">
//               <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Post" />
//             </div>
//             <div className="col-6">
//               <img src="https://via.placeholder.com/300" className="img-fluid rounded" alt="Post" />
//             </div>
//           </div>
//         </div>

//         {/* Suggestions */}
//         <div className="col-md-3">
//           <h5>Suggestions</h5>
//           <ul className="list-group">
//             <li className="list-group-item">Adeline Charles <span className="text-muted">Brooklyn, NY</span></li>
//             <li className="list-group-item">Keren Suer <span className="text-muted">San Francisco, CA</span></li>
//             <li className="list-group-item">Sam Soffes <span className="text-muted">Los Angeles, CA</span></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home({ setUser }) {
  const [profile, setProfile] = useState(null); // Store user profile
  const navigate = useNavigate();
  const hasFetched = useRef(false); // Prevent multiple fetches

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://127.0.0.1:8000/api/auth/profile/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data); // Store profile data
      } catch (error) {
        console.log("Profile not found or session expired.");
      }
    };

    if (!hasFetched.current) {
      fetchUserProfile();
      hasFetched.current = true;
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="container-fluid bg-light">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-3">
        <a className="navbar-brand mx-auto" href="#">Vizo</a>
        <input type="text" className="form-control w-25" placeholder="Search" />
        <button className="btn btn-dark" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </nav>

      <div className="container mt-4 d-flex">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="card p-3">
            {profile ? (
              <>
                <img
                  src={profile.profile_picture || "src/assets/images/ashif_pf.jpg"}
                  className="rounded mx-auto d-block w-50 h-50"
                  alt="User"
                />
                <h5 className="text-center mt-2">{profile.user.username}</h5>
                <p className="text-center text-muted">@{profile.user.username}</p>
                <button className="btn btn-success w-100">Following</button>
                <hr />
                <p><strong>{profile.posts || 0}</strong> Posts</p>
                <p><strong>{profile.followers.length}</strong> Followers</p>
                <p><strong>{profile.following || 0}</strong> Following</p>
              </>
            ) : (
              <div className="text-center">
                <p>No profile found.</p>
                <button className="btn btn-primary" onClick={() => navigate("/create-profile")}>
                  Create Profile
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Feed */}
        <div className="col-md-6">
          <div className="d-flex justify-content-between mb-3">
            <button className="btn btn-dark"><i className="fas fa-home"></i> Home</button>
            <button className="btn btn-dark"><i className="fas fa-search"></i> Explore</button>
            <button className="btn btn-dark"><i className="fas fa-plus-square"></i> Upload</button>
            <button className="btn btn-dark"><i className="fas fa-user-friends"></i> Following</button>
            <button className="btn btn-dark" onClick={() => navigate("/create-profile")}><i className="fas fa-user"></i> Profile</button>
          </div>
          <div className="row g-2">
            <div className="col-6">
              <img src="src/assets/images/ashif_pf.jpg" className="img-fluid rounded" alt="Post" />
            </div>
            <div className="col-6">
              <img src="src/assets/images/ashif_pf.jpg" className="img-fluid rounded" alt="Post" />
            </div>
            <div className="col-6">
              <img src="src/assets/images/ashif_pf.jpg" className="img-fluid rounded" alt="Post" />
            </div>
            <div className="col-6">
              <img src="src/assets/images/ashif_pf.jpg" className="img-fluid rounded" alt="Post" />
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="col-md-3">
          <h5>Suggestions</h5>
          <ul className="list-group">
            <li className="list-group-item">Adeline Charles <span className="text-muted">Brooklyn, NY</span></li>
            <li className="list-group-item">Keren Suer <span className="text-muted">San Francisco, CA</span></li>
            <li className="list-group-item">Sam Soffes <span className="text-muted">Los Angeles, CA</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
