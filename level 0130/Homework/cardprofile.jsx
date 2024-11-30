
import './ProfileCard.css';

const ProfileCard = ({ name, age, occupation }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
};

export default ProfileCard;
