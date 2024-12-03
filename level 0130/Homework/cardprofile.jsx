
import './ProfileCard.css';

const ProfileCard = ({ name, age, work }) => {
  return (
    <div className="mee">
      <h2>{name}</h2>
      <p>{age}</p>
      <p>i work as {work}</p>
    </div>
  );
};

export default ProfileCard;
