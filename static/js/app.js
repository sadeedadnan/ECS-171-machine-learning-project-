// var express = require('express'); // require express module to run frontend server 

// var app = express(); // declarations

// app.use(express.static('.')); // can access and use html pages in the current directory


// app.get('/', function(req, res) {
//     res.render('index.html'); // when we enter localhost:8000 in browser, we tell the app to render/display index.html
// })


// boiler plate code for building a POST http request
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function goResult(text){
qna.style.WebkitAnimation = "fadeOut 1s";
qna.style.animation = "fadeOut 1s";
header.style.WebkitAnimation = "fadeOut 1s";
header.style.animation = "fadeOut 1s";
setTimeout(() => {
  setTimeout(() => {
    qna.style.display = "none";
    result.style.display = "block";
    loader.style.display = "block";
    header.style.display = "block";
    setTimeout(() => {
      loader.style.WebkitAnimation = "fadeOut 1s";
      loader.style.animation = "fadeOut 1s";
      setTimeout(() => {
        result.style.WebkitAnimation = "moveFromBottomFade 1s";
        result.style.animation = "moveFromBottomFade 1s";
        setTimeout(() => {
          loader.style.display = "none";
        }, 500);
      },);
    },4000);
  }, 500);
});
document.getElementById("output").innerHTML=text;
}

function calcResult(){
var cityValue=document.getElementById('city').value;
var bedValue=document.getElementById('bedId').value;
var bathValue=document.getElementById('bathId').value;
var interiorValue=document.getElementById('interiorId').value;
var elementValue=document.getElementById('elementaryId').value;
var middleValue=document.getElementById('middleId').value;
var highValue=document.getElementById('highId').value;
var taxAssessValue=document.getElementById('taxAssessId').value;
var annTaxValue=document.getElementById('annTaxId').value;
const data = {
  "city": cityValue,
  "bedroom": bedValue,
  "bathroom": bathValue,
  "interior": interiorValue,
  "elementary": elementValue,
  "middle": middleValue,
  "high": highValue,
  "taxA": taxAssessValue,
  "annTax": annTaxValue,
}
console.log(data)
sendReq(data)
/*
sendReq({
  "city": cityValue,
  "bedroom": bedValue,
  "bathroom": bathValue,
  "interior": interiorValue,
  "elementary": elementValue,
  "middle": middleValue,
  "high": highValue,
  "taxA": taxAssessValue,
  "annTax": annTaxValue,
})
*/
}

// argument to this function is the value user enters in the input text field
function sendReq(req = {}) {
  console.log('req = ' + req) // log the request value

  var response_from_server;

  // call the postData function with url = backend server url
  // and request body = json object with inputText = user entered data
  postData("/predict", JSON.stringify(req) )
      .then(data => { // we process the response received from server
          console.log(data); // JSON data parsed by `data.json()` call
          if(data['success'] == true) { // set response accordingly
            response_from_server = data['answer']
          } else {
            response_from_server = data['message']
          }
          console.log(response_from_server) // log response
          // set the read only response field with data received from server
          goResult(response_from_server); 
  });
}

// VERY IMP. Tell the app which port to run on. Should NOT be the same as the backend server port
// app.listen(8000);