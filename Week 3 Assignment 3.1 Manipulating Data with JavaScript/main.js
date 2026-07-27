// setting array to put the movies in
let arrMovies = [];
// creating a function
function addMovie(){
    // creating a txtMovie variable that gets the id="txtMovie"
    let txtMovie = document.getElementById("txtMovie");
    // stating that the variables input string is going to perform a string method
    if (txtMovie.value.trim()){
        // array is performing the method of changing the variables string
        arrMovies.push(txtMovie.value.trim());
        // calling the function
        showMovies();
        // resets the variables value back to empty
        txtMovie.value = "";
        // variables method puts the curser back in the textbox
        txtMovie.focus();
    }
}
// creating a new function
function showMovies(){
    // array is performing a method on string
    arrMovies.sort();
    // creating avariable thats value is being set to the html id
    let movieList = document.getElementById("movieList");
    // variable property is set to the array which performs a method with an arguement
    movieList.innerHTML = arrMovies.join("<br>");
}
// creating a new function
function clearMovies(){
    // array is being set
    arrMovies = [];
    // calling the function
    showMovies();
}

