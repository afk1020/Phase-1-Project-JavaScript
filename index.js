const URL ="https://api.nasa.gov/planetary/apod?api_key=2XLVBt8SC09b9rI2nxK0qwhhGw9kCt1e9ZoTaJc9"

fetch(URL)
.then(res => res.json())
.then(handleData =>{
    console.log(handleData)
    let changeDate = document.addEventListener('submit',(e)=>{
        e.preventDefault()
        console.log(e.target)
    });

    document.querySelector(".image").src = handleData.image
    document.querySelector(".explanation").innerText = handleData.explanation
    // explanation shows before date is selected

    let stars = document.querySelector(".stars")
    stars.innerText = handleData.stars +" stars"

    document.querySelector(".stars-button").addEventListener("click",()=>{
        let count = parseInt(stars.innerText)
        ++ count
        stars.innerText = count + " stars"

    let starsUpdate ={
        "stars":count
    };
    patchImage(starsUpdate);
    console.log(starsUpdate);
    })
    let newComment = document.querySelector(".comment-form").addEventListener('submit',()=>{
        let newComment = document.querySelector(".comments")
        const ul = document.querySelector(".comments")
        const li = document.createElement('li')
        const text = document.createTextNode(newComment)
        li.append(text)
        ul.append(li)
        console.log("works")
    })

});

function patchImage(starsUpdate){
    newURL = "http://localhost:3000/images"
    let optionPatch ={
        method: 'PATCH',
        headers: {
            "Content-Type":"application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(starsUpdate)
    }
    fetch(newURL, optionPatch)
};

function postImage(handleData){
    newURL2 = "http://localhost:3000/comments"
    let optionsPost={
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(handleData)
        };
};
