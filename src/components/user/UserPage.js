import React from 'react';
import './UserPage.css'; // Import the CSS file

const UserPage = ({user,logout}) => {
  //  const user = {
      ///  name: 'John Doe',
//email: 'john.doe@example.com',
       // lastLogin: 'November 12, 2024',
  //  };

    const activities = [
        { id: 1, action: 'Logged in to the platform' },
        { id: 2, action: 'Updated profile information' },
        { id: 3, action: 'Made a purchase' },
        { id: 4, action: 'Subscribed to the newsletter' },
    ];

    return (
        <div className="user-container">
            <div className="user-sidebar">
                <h2>Dashboard</h2>
                <ul>
                    <li><a href="/user">Profile</a></li>
                    <li><a href="/user/settings">Settings</a></li>
                    <li><a href="/user/activities">Activities</a></li>
                    <li><a    onClick={()=>logout()}   >Logout</a></li>
                </ul>
            </div>

            <div className="user-main">
                <h1>Welcome, {user.name}!</h1>

                {/* Profile Section */}
                <div className="profile-info">
                    <p><span>Name:</span> {user.name}</p>
                    <p><span>Email:</span> {user.email}</p>
                    <p><span>Last Login:</span> {user.lastLogin}</p>
                </div>

                {/* Edit Button */}
                <button className="edit-button">Edit Profile</button>

                {/* Activity Log */}
                <div className="activity-log">
                    <h2>Your Recent Activities</h2>
                    <ul>
                        {activities.map((activity) => (
                            <li key={activity.id}>
                                <span>{activity.action}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
