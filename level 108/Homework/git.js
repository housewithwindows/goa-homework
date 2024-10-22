document.getElementById('searchButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('userInfo').style.display = 'block';
            document.getElementById('error').style.display = 'none';

            document.getElementById('avatar').src = data.avatar_url;
            document.getElementById('userName').textContent = data.login;
            document.getElementById('bio').textContent = data.bio || 'No bio available';
            document.getElementById('repoCount').textContent = data.public_repos;
            document.getElementById('profileLink').href = data.html_url;
        })
        .catch(error => {
            document.getElementById('userInfo').style.display = 'none';
            document.getElementById('error').style.display = 'block';
        });
});
