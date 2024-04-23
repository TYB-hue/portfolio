
const Key = "b2665b4f";
let movieNameRRR = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
//fetch data from api
let getMovie = () => {
let movieName = movieNameRRR.value;
let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey} `;
//if input field is empty
if (movieName.length  <= 0){

result.innerHTML = `<h1>please enter a movie name</h1>`;

}
//if input filed is not empty
else {
    fetch(url).then((resp) => resp.json()).then(data => {
        //if movie exist in database
        if(data.response == "True"){
            result.innerHTML=`
            <div class="info">
             <img src=${data.Poster} class="poster">

             <div>
               <h2>${data.Title}</h2>
               <div class="rating">
                 <img src = "start-icon.svg">
                 <h4>${data.imbdRating}</h4>
               </div>

               <div class="details">
                 <span>${data.Rating}</spaan>
                 <span>${data.Year}</spaan>
                 <span>${data.Runtime}</spaan>
               </div>

              <div class="genre">
               <div>${data.Genre.split(","),join("</div><div>")}</div>
              </div>

             </div>
             <h3>plot:</h3>
             <p>${data.Plot}</p>
             <h3>Cast:</h3>
            <p>${data.Actors}</p>

            </div>
          `;
        }

        //if movie doesn't exist in database
        else {
            result.innerHTML = `<h3 class="msg">${data.Error}</h3>`
        }
        
    })
.catch(() => {
    result.innerHTML = `<h3 class="msg">Error Occured</h3>`;
})

}
};
searchBtn.addEventListener("click" , getMovie);
window.addEventListener("load" , getMovie);
