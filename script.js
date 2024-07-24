$(document).ready(function() {
    const animeList = [
        "Attaque des Titans", "Bleach", "Death Note", "Demon Slayer", 
        "Dragon Ball Z", "Hunter x Hunter", "Jujutsu Kaisen", 
        "Naruto", "Naruto Shippuden", "One Piece"
    ];

    $("#search-input").on("input", function() {
        let query = $(this).val().toLowerCase();
        $("#search-results").empty();

        if (query) {
            animeList.forEach(function(anime) {
                if (anime.toLowerCase().includes(query)) {
                    $("#search-results").append(`<li class="list-group-item">${anime}</li>`);
                }
            });
        }
    });
});
$(document).ready(function() {
    $('.anime-title').on('click', function() {
        var details = $(this).next('.anime-details');
        $('.anime-details').not(details).slideUp(); // Fermer les autres
        details.slideToggle(); // Afficher/cacher celui-ci
    });
});
