$(document).ready(function () {
    const filmUrl = "https://api.themoviedb.org/3/movie/550"
    const ranNum = Math.random() * 900
    const apiKey = "?api_key=98003250cab93815401d6d3944d8a675"


    $.ajax({
        url: filmUrl + ranNum + apiKey,
        content: "application/json",
        dataType: 'json',
        success: function(data) {
            
            const imgPath = `${data.poster_path}`
            const img = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
            const title = `${data.title}`
            const text = `${data.overview}`
            const id = `${data.id}`

            console.log(title, text, id, img)

            $("#pic").append(`<img src="${img}"/>`).val()
            $("#film-title").append(title).val()        
            $("#plot").append(text).val()
            
        }
    })
})


function rateMovie () {
    const movieForm = document.getElementById('movieForm')
    
    movieForm.addEventListener('submit', function(data) {
        const title = document.querySelector('#film-title').val(data)
        const img = document.querySelector('#pic').val(data)
            
        console.log(title, img)
           
    });
}


function getNewMovie() {
    window.location.reload();
}