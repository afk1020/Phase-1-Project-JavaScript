const URL ="https://api.nasa.gov/planetary/apod?api_key=2XLVBt8SC09b9rI2nxK0qwhhGw9kCt1e9ZoTaJc9"
const newURL = "http://localhost:3000/images/"

fetch(URL)
.then(res => res.json())
.then(handleData =>{
    console.log(handleData)
    let changeDate = document.addEventListener('submit',(e)=>{
        e.preventDefault()
        console.log(changeDate)
        
    });

    document.querySelector(".image").src = handleData.image
    document.querySelector(".explanation").innerText = handleData.explanation
    // explanation shows before date is selected

    document.querySelector(".comment-form").addEventListener('submit',()=>{
        let newComment = document.querySelector(".comment-input").value
        const ul = document.querySelector(".comments")
        const li = document.createElement('li')
        const text = document.createTextNode(newComment)
        li.append(text)
        ul.append(li)
    })

    let stars = document.querySelector(".stars")
    stars.innerText = handleData.stars +" stars"
    console.log(stars)

    let buttonStar = document.querySelector(".stars-button")
    buttonStar.addEventListener("click",()=>{
        let count = parseInt(stars.innerText)
        ++ count
        stars.innerText = count + " stars"

        patchImage(starsUpdate, newId);
        
        let starsUpdate ={
            "stars":count
    };
})
let newId = newURL.id
    console.log(newId)

    function patchImage(starsUpdate, id){
        let optionPatch ={
            method: 'PATCH',
            headers: {
                "Content-Type":"application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(starsUpdate)
        }
        fetch(newURL + id, optionPatch)
    };
});


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
