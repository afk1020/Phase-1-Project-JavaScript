
const nasaURL =  "https://api.nasa.gov/planetary/apod?api_key=2XLVBt8SC09b9rI2nxK0qwhhGw9kCt1e9ZoTaJc9"
// fetch(nasaURL)
// .then((res)=> res.json())
// .then(handleData => handleData)

const localURL ="http://localhost:3000/images"
fetch(localURL)
.then(res => res.json())
.then(localData => {renderData(localData)
    console.log(localData)})

function renderData(localData){
    
     document.querySelector(".date-form").addEventListener('submit',()=>{
      event.preventDefault()  
     let newDate = {
        "date":event.target.name.value,
        "explanation": event.target.name.value,
        "stars": "0",
        "image": event.target.name.value
    }
        console.log(newDate)
     

document.querySelector(".date-2").innerText = localData[0].date
console.log(localData[1].date)
document.querySelector(".image").src = localData[0].image
document.querySelector(".explanation").innerText =localData[0].explanation   


     let stars = document.querySelector(".stars")
     stars.innerText = localData[0].stars +" stars"
   
     

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
        event.preventDefault() 
        let newComment = document.querySelector(".comment-input").value
        const ul = document.querySelector(".comments")
        const li = document.createElement('li')
        const text = document.createTextNode(newComment)
        li.append(text)
        ul.append(li)
console.log("works")
    //patchComment(newComment)
    })
})
}


function postImage(localData){
    
    newURL2 = "http://localhost:3000/comments/1" 
    let optionsPost={
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(localData)
        };

fetch(newURL2, optionsPost);
};
function patchImage(starsUpdate){
    newURL = "http://localhost:3000/images/1" //changed url to feature id of 1
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
function patchComment(newComment){
    newURL = "http://localhost:3000/comments/1" //changed url to feature id of 1
    let optionPatch ={
        method: 'PATCH',
        headers: {
            "Content-Type":"application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(localData)
    }
    const nasaURL =  "https://api.nasa.gov/planetary/apod?api_key=2XLVBt8SC09b9rI2nxK0qwhhGw9kCt1e9ZoTaJc9"
    // fetch(nasaURL)
    // .then((res)=> res.json())
    // .then(handleData => handleData)
    
    const localURL ="http://localhost:3000/images"
    fetch(localURL)
    .then(res => res.json())
    .then(localData => {renderData(localData)
        console.log(localData)})
    
    function renderData(localData){
        
         document.querySelector(".date-form").addEventListener('submit',()=>{
          event.preventDefault()  
         let newDate = {
            "date":event.target.name.value,
            "explanation": event.target.name.value,
            "stars": "0",
            "image": event.target.name.value
        }
            console.log(newDate)
         
    
    document.querySelector(".date-2").innerText = localData[0].date
    console.log(localData[1].date)
    document.querySelector(".image").src = localData[0].image
    document.querySelector(".explanation").innerText =localData[0].explanation   
    
    
         let stars = document.querySelector(".stars")
         stars.innerText = localData[0].stars +" stars"
       
         
    
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
    console.log("works")
        patchComment(newComment)
        })
    })
    }
    
    
    function postImage(localData){
        
        newURL2 = "http://localhost:3000/comments/1" 
        let optionsPost={
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(localData)
            };
    
    fetch(newURL2, optionsPost);
    };
    function patchImage(starsUpdate){
        newURL = "http://localhost:3000/images/1" //changed url to feature id of 1
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
    function patchComment(newComment){
        newURL = "http://localhost:3000/comments/1" //changed url to feature id of 1
        let optionPatch ={
            method: 'PATCH',
            headers: {
                "Content-Type":"application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(newComment)
        }
        fetch(newURL, optionPatch);
    }
    fetch(newURL, optionPatch);
}