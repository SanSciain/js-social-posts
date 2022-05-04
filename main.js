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
            "image": ""
        },
        "likes": 1000,
        "created": "2021-04-05"
    },
        {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=173",
        "author": {
            "name": "Pino Cavalli Alberti",
            "image": ""
        },
        "likes": 180,
        "created": "2022-05-03"
    }
];

const container = document.getElementById("container");


posts.forEach( (post)=>{
    post.created=europeanData(post.created);
    domPost=createPost(container, post);
    likes(domPost, post);
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
                        <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>`
    checks(post, element.media, element.author);
    container.append(post);
    return post;
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
        nameString.forEach( (name, index) => {
            frstName = nameString[index].charAt(0);
            defaultPic.innerHTML += frstName;
        } )
        
    }
}

function europeanData(postDate){
    const dateString=postDate.split("-");
    // const formatedDate = `${dateString[2]}-${dateString[1]}-${dateString[0]}`;
    const formatedDate = dateString.reverse().join("-");
    return formatedDate;
}

function likes(domPost, post){
    const likeBtn = domPost.querySelector(".like-button");
    console.log(likeBtn);
    let counter = post.likes;
    likeBtn.addEventListener("click",function(event){
        event.preventDefault(); //server per evitare il comportamento di default (in questo caso dell'anchor tag che riporta alla parte superiore della pagina quando cliccato)
        likeBtn.classList.toggle("like-button--liked");
        if (likeBtn.classList.contains("like-button--liked")){
            counter++;
        } else {
            counter--;
        }
        document.getElementById(`like-counter-${post.id}`).innerHTML=counter;
    });
}