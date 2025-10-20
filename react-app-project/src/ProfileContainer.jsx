// src/components/ProfileContainer.jsx

import React from "react";
import ProfileCard from "./ProfileCard";

function ProfileContainer() {
  const profiles = [
    { name: "Alex", age: 25, bio: "A software engineer who loves hiking." },
    { name: "Taylor", age: 30, bio: "A designer passionate about photography." },
    { name: "Jordan", age: 28, bio: "A teacher who enjoys writing and coffee." },
  ];

  return (
    <div className="profile-container">
      <h1>User Profiles</h1>
      <div className="profile-list">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileContainer;
