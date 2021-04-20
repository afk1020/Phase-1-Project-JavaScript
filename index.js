

// fetch(nasaURL)
// .then((res)=> res.json())
// .then(handleData => handleData)

const localURL ="http://localhost:3000/images"
fetch(localURL)
.then(res => res.json())
.then(localData => {renderData(localData)
    console.log(localData)})

//console.log(JSON.stringify(localData))
//console.log(JSON.stringify(localData, ["date"]))
//console.log(JSON.stringify(localData, ["explanation"]))

function renderData(localData){
    
    // document.querySelector(".date-form").addEventListener('submit',()=>{
    //     let newDate = document.querySelector(".date-input").value
    //     console.log(newDate)
       
    // })

document.querySelector(".date-2").innerText = localData[0].date

document.querySelector(".image").src = localData[0].image
document.querySelector(".explanation").innerText =localData[0].explanation   
// })
}

//     document.addEventListener('submit',(e)=>{
//         e.preventDefault()
//     });


  
//      // explanation shows before date is selected



//     let stars = document.querySelector(".stars")
//     stars.innerText = localData.stars +" stars"
   
//     console.log(localData.stars)

//     document.querySelector(".stars-button").addEventListener("click",()=>{
//         let count = parseInt(stars.innerText)
//         ++ count
//         stars.innerText = count + " stars"
    
//     let starsUpdate ={
//         "stars":count
//     };
//     patchImage(starsUpdate);
    
//     })
//     document.querySelector(".comment-form").addEventListener('submit',()=>{
//         let newComment = document.querySelector(".comment-input").value
//         const ul = document.querySelector(".comments")
//         const li = document.createElement('li')
//         const text = document.createTextNode(newComment)
//         li.append(text)
//         ul.append(li)
        
//     })
    
//     function patchImage(starsUpdate){
//         newURL = "http://localhost:3000/images/" 
//         let optionPatch ={
//             method: 'PATCH',
//             headers: {
//                 "Content-Type":"application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify(starsUpdate)
//         }
//         fetch(newURL, optionPatch);
//     };



// function postImage(localData){
//     newURL2 = "http://localhost:3000/images/"
//     let optionsPost={
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify(localData)
//         };
// };