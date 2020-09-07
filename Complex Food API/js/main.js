// function sendApiRequest(){
//  inputValue=document.querySelector("input").value.toString();
//  var myHeaders = new Headers();
//  myHeaders.append("user-key", "cfb984a4e9cb26dec06e027cb169b493");
//  var requestOptions = {
//    method: 'GET',
//    mode:'cors',
//    headers: myHeaders,
//    redirect: 'follow'
//  };
//  fetch(`https://developers.zomato.com/api/v2.1/cities?q=${inputValue}`, requestOptions)
//    .then(response => response.json())
//    .then(result =>  result.location_suggestions[0].id)
//     .then( cityId => {
//       console.log(cityId)
//        fetch(`https://developers.zomato.com/api/v2.1/establishments?city_id=${cityId}`, requestOptions)
//        .then(establishments => console.log(establishments))
//        .catch(error => console.log('error', error));
//     })
//    // .catch(error => console.log('error', error));
// }





function getLocation() {
  fetch(`https://ipapi.co/json/`)
    .then((response) => response.json())

    .then((data) => {
      console.log(data);

      document.querySelector("#city").innerHTML = data["city"];
      document.querySelector("#regionName").innerHTML = data["region"];

      document.querySelector("#lat").innerHTML = data["latitude"];
      document.querySelector("#lon").innerHTML = data["longitude"];

    })
    .catch((err) => console.log(err));
}

getLocation();












searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed")
  sendApiRequest()
})
//An asynchronous function to fetch data from the API.
function sendApiRequest() {

  latitude = document.querySelector("#lat").innerHTML
  longitude = document.querySelector("#lon").innerHTML
  console.log(latitude)
  console.log(longitude)

  fetch(`https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`, {
      headers: {
        "header": "Accept: application/json",
        "user-key": "739453d24b79909250f5d438dbb20eb2"
      }
    })
    .then(responce => responce.json())
    .then(data => {
      console.log(data)
      result = document.querySelector("#result")
      cuisines = document.querySelector("#cuisines")
      result.innerHTML = data.nearby_restaurants[0].restaurant.name
      cuisines.innerHTML = data.nearby_restaurants[0].restaurant.cuisines

    })
};