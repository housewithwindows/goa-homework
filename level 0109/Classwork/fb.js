<<<<<<< HEAD
// ყველა პოსტის სიის შენახვა
let allPosts = [];

// სექციების ჩვენება ან დამალვა
function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

// პოსტების წამოღება და ვიზუალიზაცია
async function fetchPosts() {
  try {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();

    allPosts = data.posts; // შენახვა მთლიანი პოსტების სიის
    renderPosts(allPosts); // ყველა პოსტის ჩვენება

  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// პოსტების ვიზუალიზაცია
function renderPosts(posts) {
  const postsContainer = document.getElementById('postsContainer');
  postsContainer.innerHTML = ''; // წინა პოსტების წაშლა
  
  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p><p><strong>Tags:</strong> ${post.tags.join(', ')}</p>`;
    postsContainer.appendChild(postDiv);
  });
}

// პოსტების ფილტრაცია და ძიება
function filterPosts() {
  const titleQuery = document.getElementById('searchTitle').value.toLowerCase();
  const tagQuery = document.getElementById('searchTag').value.toLowerCase();

  const filteredPosts = allPosts.filter(post => {
    const matchesTitle = post.title.toLowerCase().includes(titleQuery);
    const matchesTag = tagQuery ? post.tags.some(tag => tag.toLowerCase().includes(tagQuery)) : true;
    return matchesTitle && matchesTag;
  });

  renderPosts(filteredPosts);
}

// პოსტების დალაგება სათაურით (A-Z)
function sortPostsByTitle() {
  const sortedPosts = [...allPosts].sort((a, b) => a.title.localeCompare(b.title));
  renderPosts(sortedPosts);
}

// ფიდის ავტომატურად გამოტანა
window.onload = function() {
  fetchPosts();
};
=======
// ყველა პოსტის სიის შენახვა
let allPosts = [];

// სექციების ჩვენება ან დამალვა
function showSection(sectionId) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

// პოსტების წამოღება და ვიზუალიზაცია
async function fetchPosts() {
  try {
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();

    allPosts = data.posts; // შენახვა მთლიანი პოსტების სიის
    renderPosts(allPosts); // ყველა პოსტის ჩვენება

  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// პოსტების ვიზუალიზაცია
function renderPosts(posts) {
  const postsContainer = document.getElementById('postsContainer');
  postsContainer.innerHTML = ''; // წინა პოსტების წაშლა
  
  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p><p><strong>Tags:</strong> ${post.tags.join(', ')}</p>`;
    postsContainer.appendChild(postDiv);
  });
}

// პოსტების ფილტრაცია და ძიება
function filterPosts() {
  const titleQuery = document.getElementById('searchTitle').value.toLowerCase();
  const tagQuery = document.getElementById('searchTag').value.toLowerCase();

  const filteredPosts = allPosts.filter(post => {
    const matchesTitle = post.title.toLowerCase().includes(titleQuery);
    const matchesTag = tagQuery ? post.tags.some(tag => tag.toLowerCase().includes(tagQuery)) : true;
    return matchesTitle && matchesTag;
  });

  renderPosts(filteredPosts);
}

// პოსტების დალაგება სათაურით (A-Z)
function sortPostsByTitle() {
  const sortedPosts = [...allPosts].sort((a, b) => a.title.localeCompare(b.title));
  renderPosts(sortedPosts);
}

// ფიდის ავტომატურად გამოტანა
window.onload = function() {
  fetchPosts();
};
>>>>>>> 15fe0073e996ee1e338a5396a2fef1dabe89efa3
