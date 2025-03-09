import  { useState } from 'react';

const UserSearch = () => {
    const [user, setUser] = useState('');
    const [Info, setInfo] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = () => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (!response.ok) {
                    console.log('User not found');
                }
                return response.json();
            })
            .then(data => {
                setInfo(data);
                setError('');
            })
            .catch(error => {
                setInfo(null);
                setError(error.message);
            });
    };

    return (
        <div>
            <input
                type="text"
                
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter user"
            />
            <button  onClick={handleSearch}>Search</button>

            

            {Info && (
                <div id="userInfo">
                    <img  src={Info.avatar_url} alt="User Avatar" />
                    <p>{Info.login}</p>
                    <p>{Info.bio || 'No bio available'}</p>
                    <p>Public Repositories: {Info.public_repos}</p>
                    <a  href={Info.html_url} target="_blank">View Profile</a>
                </div>
            )}
        </div>
    );
};

export default UserSearch;
