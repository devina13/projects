// let searchText = document.getElementById("searchMovies")
// let searchText = prompt("movies");

async function findMovie() {
  let searchText = document.getElementById("searchMovies").value;
  console.log(searchText);
  let imdbAPi = `http://www.omdbapi.com/?s=${searchText}&apikey=f056e2f7`;

  try {
    let response = await fetch(imdbAPi);
    let apiResponse = await response.json();
    console.log(apiResponse);
    let count = apiResponse.Search.length;

    let data1 = "";
    

    apiResponse.Search.map((value) => {
      console.log(value);
      data1 += `<div class="col-3 col-gutter">
                    <div class="card">
                    <img src="${value.Poster}" alt="..." style="height: 10rem;width: inherit">
                    <div class="card-body">
                      <h6 class="card-title">${value.Title}</h6>
                      <div class="card-text">${value.Year}</div>
                      <button class="btn btn-primary btn-sm">Movie Details</button>
                    </div>
                  </div>
                </div>`;
    });
    document.getElementById("getCard").innerHTML = data1;
  } catch {}
}
