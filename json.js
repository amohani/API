$(() => {

    // Submit a form
    $('#search-form').submit((e) => {
        e.preventDefault();
        const artist = $('#search-artist').val();
        const title = $('#search-title').val();
        getRequest(artist, title);
    });

    function getRequest(artist, title) {
  
        const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;

        $.getJSON(url, (response) => {
            showResults(response);
        });
    }

    function showResults(lyrics) {
        console.log(lyrics);
        $.each(lyrics, (i, value) => {
            $('#results').append(`<p>${value}</p>`);
        });

    }
});