document.querySelector('.date-form').addEventListener('submit',nasa)

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
             document.querySelector('.image').src = nasaData.url;
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
 
}


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
    img.className = "image-avatar"
    let embed = document.createElement('embed')

    if(nasaCard.image == "image"){
        img.src = nasaCard.url;
   }
   else{
   
       embed.src = nasaCard.url
       embed.style.display = "block"
   }
    // const line = document.createElement('li')
    // line.innerText = nasaCard.comments

    // let form = document.createElement('form')
    // form.className="submit-form"

    // let input = document.createElement('input')
    // input.className = "input-comment"
    // input.type ="text"
    // input.name = "comment"
    // form.append(input)

    // let btn = document.createElement('button')
    // btn.innerText = "post"
    // btn.type="submit"
    
    childDiv.append(h2,img,embed);

    // btn.addEventListener('submit',(event)=>{
    //         event.preventDefault()
    //         let newComment = document.createElement('.submit-form').value
    //         const line2 = document.createElement('li')
    //         const text = document.createTextNode(newComment)
    //         line2.append(text)
            
    //         console.log("works")
    // })
            
    
    

}
postNasa(renderNasa)

// function postComment(commentCard){
    
//     newURL2 = "http://localhost:3000/comments/" 
//     let optionsPost={
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//         body: JSON.stringify(commentCard)
//         };

// fetch(newURL2, optionsPost);

// };
// postComment(renderNasa)
