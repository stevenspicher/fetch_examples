///https://apipheny.io/free-api/

let text = 'text/readme.txt'
let json = 'text/test.json'
let err = "http://httpstat.us/500"
let none = "http://thisisamadeupaddress"
let pic = "https://picsum.photos/250/250"
let cat = "https://catfact.ninja/fact"
let bit = "https://api.coindesk.com/v1/bpi/currentprice.json"

let url = bit
 
const fetchPromise = () => {
fetch(url)
  .then(res => console.log("success"))
  .catch(error => console.log("failure"))
}

//let's look at the response
const viewPromise = () => {
let response = fetch(url)
console.log(response)
}

const viewtextData = () => {
  fetch(url)
    .then(res => res.text())
    .then(data => (console.log(data)))
}
const viewjsonData = () => {
  fetch(url)
    .then(res => res.json())
    .then(data => (console.log(data)))
}


const fetchErrorHandling = () => {
fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}





      
      let picture = document.createElement("img");
      let picFrame = document.querySelector(".pic");

 let loadPic = () => {
   fetch(pic)
   .then(res => {
     picture.src = res.url;
     picFrame.appendChild(picture)
   })
   .catch(res => console.log("error"));

 }

 let loadBC = () => {
 fetch(bit)
   .then(res => res.json())
   .then(data => bitcoinMessage(data))
   .catch(error => console.log("error"));
  }
 
  let bcElement = document.createElement("div");
  let bcFrame = document.querySelector(".bc");
let bitcoinMessage = (message) => {
let US = (message.bpi.USD)
console.log(US)
bcElement.innerHTML = `<div>
   <p> today's rate is ${US.rate}</p>
  
</div>`
bcFrame.appendChild(bcElement)

}



