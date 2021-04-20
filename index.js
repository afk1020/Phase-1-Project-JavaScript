const nasaURL ="https://api.nasa.gov/planetary/apod?api_key=2XLVBt8SC09b9rI2nxK0qwhhGw9kCt1e9ZoTaJc9"

fetch(nasaURL)
.then((res)=> res.json())
.then(handleData => handleData)

const localURL ="http://localhost:3000/images"
fetch(localURL)
.then((res)=> res.json())
.then(localData => {console.log(localData)



function renderImage(Image){
document.querySelector(".title").innerText =localData.title
document.querySelector(".date").innerText =localData.date
document.querySelector(".image").src = localData.url
document.querySelector(".explanation").innerText = localData.explanation     
}

    let changeDate = document.addEventListener('submit',(e)=>{
        e.preventDefault()
    });

    
     // explanation shows before date is selected



    let stars = document.querySelector(".stars")
    stars.innerText = localData.stars +" stars"
    console.log(stars)

    document.querySelector(".stars-button").addEventListener("click",()=>{
        let count = parseInt(stars.innerText)
        ++ count
        stars.innerText = count + " stars"
    
    let starsUpdate ={
        "stars":count
    };
    patchImage(starsUpdate);
    
    })
    document.querySelector(".comment-form").addEventListener('submit',()=>{
        let newComment = document.querySelector(".comment-input").value
        const ul = document.querySelector(".comments")
        const li = document.createElement('li')
        const text = document.createTextNode(newComment)
        li.append(text)
        ul.append(li)
        
    })
    let newId = localData.id
    function patchImage(starsUpdate){
        newURL = "http://localhost:3000/images/" + newId
        let optionPatch ={
            method: 'PATCH',
            headers: {
                "Content-Type":"application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(starsUpdate)
        }
        fetch(newURL, optionPatch);
    };



function postImage(localData){
    newURL2 = "http://localhost:3000/images/"
    let optionsPost={
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(localData)
        };
};
})