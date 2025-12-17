document.addEventListener('DOMContentLoaded', function () {
    const createPostBtn = document.getElementById('createPostBtn');
    const createPostModal = document.getElementById('createPostModal');
    const closeModal = document.getElementById('closeModal');
    const postForm = document.getElementById('postForm');
    const postContainer = document.querySelector('.post-container');

    const postDetailModal = document.getElementById('postDetailModal');
    const closeDetailModal = document.getElementById('closeDetailModal');
    const detailTitle = document.getElementById('detailTitle');
    const detailDate = document.getElementById('detailDate');
    const detailDescription = document.getElementById('detailDescription');

    // NEW: Edit modal references
    const editPostModal = document.getElementById('editPostModal');
    const closeEditModal = document.getElementById('closeEditModal');
    const editPostForm = document.getElementById('editPostForm');
    const editPostId = document.getElementById('editPostId');
    const editPostTitle = document.getElementById('editPostTitle');
    const editPostCategory = document.getElementById('editPostCategory');
    const editPostDescription = document.getElementById('editPostDescription');
    const editPostBtn = document.getElementById('editPostBtn'); // button inside detail modal

    let currentEditingPost = null; // track which post is being edited

    // --- Create post ---
    createPostBtn.addEventListener('click', function () {
        createPostModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', function () {
        createPostModal.classList.add('fadeOut');
        setTimeout(() => {
            createPostModal.style.display = 'none';
            createPostModal.classList.remove('fadeOut');
        }, 500);
    });

    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const postCategory = document.getElementById('postCategory').value;
        const postTitle = document.getElementById('postTitle').value;
        const postDescription = document.getElementById('postDescription').value;

        if (postCategory.trim() === '' || postTitle.trim() === '' || postDescription.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.toLocaleString('default', { month: 'short' });
        const year = currentDate.getFullYear();
        const formattedDate = day + ' ' + month + ' ' + year;

        const newPost = document.createElement('div');
        newPost.className = 'post-box';
        newPost.innerHTML = `
            <h1 class="post-title" data-title="${postTitle}"
             data-date="${formattedDate}" data-description="${postDescription}">
             ${postTitle}</h1><br>
            <h2 class="category">${postCategory}</h2><br>
            <span class="post-date">${formattedDate}</span>
            <p class="post-description">${postDescription.substring(0, 100)}...</p>
            <button class="delete-post" data-title="${postTitle}">Delete</button>
            <span class="load-more" data-title="${postTitle}" 
            data-date="${formattedDate}" data-description="${postDescription}">
            Load more</span>
        `;

        postContainer.insertBefore(newPost, postContainer.firstChild);

        const postCreatedMessage = document.getElementById('postCreatedMessage');
        postCreatedMessage.style.display = 'block';

        createPostModal.style.display = 'none';
        postForm.reset();

        setTimeout(() => {
            postCreatedMessage.style.display = 'none';
        }, 3000);
    });

    // --- Handle click events inside posts ---
    postContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('load-more') || event.target.classList.contains('post-title')) {
            const title = event.target.getAttribute('data-title');
            const date = event.target.getAttribute('data-date');
            const description = event.target.getAttribute('data-description');

            detailTitle.textContent = title;
            detailDate.textContent = date;
            detailDescription.textContent = description;

            // store the current post being viewed
            currentEditingPost = event.target.closest('.post-box');

            postDetailModal.style.display = 'flex';
        }

        if (event.target.classList.contains('delete-post')) {
            const postToDelete = event.target.closest('.post-box');
            postToDelete.classList.add('fadeOut');
            setTimeout(() => {
                postContainer.removeChild(postToDelete);
            }, 500);
        }
    });

    closeDetailModal.addEventListener('click', function () {
        postDetailModal.classList.add('fadeOut');
        setTimeout(() => {
            postDetailModal.style.display = 'none';
            postDetailModal.classList.remove('fadeOut');
        }, 500);
    });

    // --- Edit Post ---
    editPostBtn.addEventListener('click', function () {
        if (!currentEditingPost) return;

        const titleElem = currentEditingPost.querySelector('.post-title');
        const categoryElem = currentEditingPost.querySelector('.category');
        const descriptionElem = currentEditingPost.querySelector('.post-description');

        editPostId.value = titleElem.textContent; // not unique, but simple
        editPostTitle.value = titleElem.textContent;
        editPostCategory.value = categoryElem.textContent;
        editPostDescription.value = detailDescription.textContent; // full desc from detail modal

        // open edit modal
        postDetailModal.style.display = 'none';
        editPostModal.style.display = 'flex';
    });

    closeEditModal.addEventListener('click', function () {
        editPostModal.classList.add('fadeOut');
        setTimeout(() => {
            editPostModal.style.display = 'none';
            editPostModal.classList.remove('fadeOut');
        }, 500);
    });

    editPostForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!currentEditingPost) return;

        const updatedTitle = editPostTitle.value;
        const updatedCategory = editPostCategory.value;
        const updatedDescription = editPostDescription.value;

        // update DOM
        currentEditingPost.querySelector('.post-title').textContent = updatedTitle;
        currentEditingPost.querySelector('.post-title').setAttribute('data-title', updatedTitle);
        currentEditingPost.querySelector('.category').textContent = updatedCategory;
        currentEditingPost.querySelector('.post-description').textContent = updatedDescription.substring(0, 100) + '...';
        currentEditingPost.querySelector('.load-more').setAttribute('data-title', updatedTitle);
        currentEditingPost.querySelector('.load-more').setAttribute('data-description', updatedDescription);

        editPostModal.style.display = 'none';
        currentEditingPost = null;
    });
});
