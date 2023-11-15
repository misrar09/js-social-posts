const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}


const container = document.getElementById("container");



for (let i = 0; i < posts.length; i++) {
    
    
    
    const postId = posts[i].id;
    const postContent = posts[i].content;
    const postMedia = posts[i].media;
    const postAuthorName = posts[i].author.name;
    const postAuthorImage = posts[i].author.image;
    const postLikes = posts[i].likes;
    const postDate = formatDate(posts[i].created);;
    
    
    //creating the post in html (DOM )
   container.innerHTML += ` 
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${postAuthorImage}" alt="Philip">                    
            </div>
            <div class="post-meta__data">
            <div class="post-meta__author">${postAuthorName}</div>
            <div class="post-meta__time">${postDate}</div>
            </div>                    
            </div>
            </div>
            <div class="post__text">${postContent}</div>
            <div class="post__image">
            <img src="${postMedia}" alt="">
            </div>
    <div class="post__footer">
        <div class="likes js-likes">
        <div class="likes__cta">
        <a class="like-button  js-like-button" href="javascript:void(0)" data-postid="${postId}">
        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>
            </a>
            </div>
            <div class="likes__counter">
            Piace a <b id="like-counter-${postId}" class="js-likes-counter">${postLikes}</b> persone
            </div>
            </div> 
            </div>            
            </div>`;
            
        };


        
// Add event listener to each like button separately
const likeButtons = document.querySelectorAll(".js-like-button");

likeButtons.forEach(function (likeBtn, i) {
    
    const totalLikes = document.querySelector(`#like-counter-${posts[i].id}`); //Select the likes counter for the current post based on its unique ID

        // Add click event listener to each like button
        likeBtn.addEventListener("click", function () {
            likeBtn.classList.toggle("like-button--liked");

            // Update the likes count for the current post based on the button class contains
            if(likeBtn.classList.contains("like-button--liked")){
                posts[i].likes++;
    
            }
            else{
                posts[i].likes--;
            }

            // Update the likes counter on the page with the new count
            totalLikes.innerHTML = posts[i].likes;

        });

    });
    
 









