
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles }) => {
  return (
    <div className="list">
      {profiles.map((user) => (
        <ProfileCard key={user.id} />
      ))}
    </div>
  );
};

export default ProfileList;
