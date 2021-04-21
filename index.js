
document.querySelector('form').addEventListener('submit',nasa)

function nasa(event){
    event.preventDefault()
    let date = document.querySelector('.date-input').value

fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=2XLVBt8SC09b9rI2nxK0qwhhGw9kCt1e9ZoTaJc9`)
    .then(res=> res.json())
    .then(nasaData => {

        let nasaTitle = document.querySelector('.title')
        nasaTitle.innerText = nasaData.title;

        let nasaDate = document.querySelector('.date-2')
        nasaDate.innerText = nasaData.date;

        if(nasaData.media_type == "image"){
             document.querySelector('.image').src = nasaData.hdurl;
        }
        else{
        let embed = document.querySelector('embed')
            embed.src = nasaData.url
            embed.style.display = "block"
        }
        document.querySelector('.explanation').innerText = nasaData.explanation;
        
    document.querySelector(".add-an-image").addEventListener('submit',(e)=>{
        e.preventDefault()
           let newNasa = {
            date: nasaData.date,
            explanation: nasaData.explanation,
            hdurl: nasaData.hdurl,
            image: nasaData.media_type
           };
           console.log("works")
           postNasa(newNasa);
           console.log("works")
           nasa(newNasa);
       });
    })
    
function postNasa(card){
    let newURL = "http://localhost:3000/images/"
    let options ={
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body:JSON.stringify(card),
    };
    fetch(newURL, options)
    .then((response)=>response.json())
    .then((postedCard)=>nasa(postedCard));
} 
 
};
//works up to this point

imageURL= "http://localhost:3000/images/"
fetch(imageURL)
.then((response)=>response.json())
.then(handleData)

function handleData(cards){
    cards.forEach(renderNasa)
}

function renderNasa(nasaCard){
    const childDiv = document.createElement('div')
    childDiv.className ="card"
    document.querySelector('#nasa-collection').appendChild(childDiv)
    
    let h2 = document.createElement('h2')
    h2.innerText =nasaCard.date
    console.log(nasaCard.date)

    let img = document.createElement('img')
    img.src= nasaCard.hdurl
    img.className = "nasa-avatar"

//     if(nasaCard.image == "image"){
//         document.querySelector('.image').src = nasaCard.hdurl;
//    }
//    else{
//    let embed = document.querySelector('embed')
//        embed.src = nasaCard.url
//        embed.style.display = "block"
//    }
    
    childDiv.append(h2,img);

}
postNasa(renderNasa)

// const localURL ="http://localhost:3000/images"
// fetch(localURL)
// .then(res => res.json())
// .then(localData => {renderData(localData)
//     console.log(localData)})

// function renderData(localData){
    
//      document.querySelector(".date-form").addEventListener('submit',()=>{
//       event.preventDefault()  
//       console.log(event.target)
     
    
//      let newDate = {
//         "date":event.target.name.value,
//         "explanation": event.target.name.value,
//         "stars": "0",
//         "image": event.target.name.value
//     }
//         console.log(newDate)
     
//     })
   
     

//     // document.querySelector(".stars-button").addEventListener("click",()=>{
//     //     let count = parseInt(stars.innerText)
//     //     ++ count
//     //     stars.innerText = count + " stars"
    
//     // let starsUpdate ={
//     //     "stars":count
//     // };
//     // patchImage(starsUpdate);

    
// //     document.querySelector(".comment-form").addEventListener('submit',()=>{
// //         event.preventDefault()
// //         let newComment = document.querySelector(".comment-input").value
// //         const ul = document.querySelector(".comments")
// //         const li = document.createElement('li')
// //         const text = document.createTextNode(newComment)
// //         li.append(text)
// //         ul.append(li)
// // console.log("works")
// //     patchComment(newComment)
// //     })
// }


// function postImage(localData){
    
//     newURL2 = "http://localhost:3000/comments/1" 
//     let optionsPost={
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify(localData)
//         };

// fetch(newURL2, optionsPost);
// };
// function patchImage(starsUpdate){
//     newURL = "http://localhost:3000/images/1" //changed url to feature id of 1, needs to be dynamic
//     let optionPatch ={
//         method: 'PATCH',
//         headers: {
//             "Content-Type":"application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify(starsUpdate)
//     }
//     fetch(newURL, optionPatch);
// };
// function patchComment(newComment){
//     newURL = "http://localhost:3000/comments/" //changed url to feature id of 1, needs to be dynamic
//     let optionPatch ={
//         method: 'PATCH',
//         headers: {
//             "Content-Type":"application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify(newComment)
//     }
//     fetch(newURL, optionPatch);
//  }

