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
        "media": "https://unsplash.it/600/300?image=170",
        "author": {
            "name": "Tino Mangitwo",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 69,
        "created": "2020-06-02"
    },
        {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "",
        "author": {
            "name": "Gino Magi",
            "image": "https://unsplash.it/300/300?image=12"
        },
        "likes": 1000,
        "created": "2021-04-05"
    },
        {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=173",
        "author": {
            "name": "Pino Cavalli",
            "image": ""
        },
        "likes": 180,
        "created": "2022-05-03"
    }
];

const container = document.getElementById("container");


posts.forEach( (post)=>{
    createPost(container, post);
} );


function createPost(container, element){
    const post = document.createElement("div");
    post.classList.add("post");
    let media;
    post.innerHTML=`<div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${element.author.image} alt=${element.author.name}>                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${element.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}</div>
            <div class="post__image">
                <img src=${element.media} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>`
    checks(post, element.media, element.author);
    container.append(post);
}

function checks (domElement, media, author){
    if (media === ""){
        const imageContainer = domElement.querySelector(".post__image");
        const image = imageContainer.querySelector("img");
        image.remove();
    }
    if (author.image === ""){
        const pfpContainer = domElement.querySelector(".post-meta__icon");
        const image = pfpContainer.querySelector("img");
        image.remove();
        const defaultContainer=document.createElement("div");
        defaultContainer.classList.add("profile-pic-default");
        const defaultPic = document.createElement("span");
        pfpContainer.append(defaultContainer);
        defaultContainer.append(defaultPic);
        const userName = author.name;
        nameString=userName.split(" ");
        frstName = nameString[0].charAt(0);
        scndName = nameString[1].charAt(0);
        defaultPic.innerHTML=frstName+scndName;
    }
}