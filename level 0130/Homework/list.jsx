
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles }) => {
  return (
    <div className="profile-list">
      {profiles.map((user) => (
        <ProfileCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default ProfileList;
