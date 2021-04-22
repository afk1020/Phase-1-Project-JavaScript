
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
            url: nasaData.url,
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
    let embed = document.createElement('embed')
    
    let form = document.createElement('form')
    form.innerText = nasaCard.content


    if(nasaCard.image == "image"){
        img.src = nasaCard.url;
   }
   else{
   
       embed.src = nasaCard.url
       embed.style.display = "block"
   }
    
    childDiv.append(h2,img,embed);

}
postNasa(renderNasa)

//works up to this point

    
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
    
//     newURL2 = "http://localhost:3000/comments/" 
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

