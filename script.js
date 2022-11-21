var breedImage = $("#dog-image");
var dropdown = $("#dog-breeds");
var allowSubmit = true;
var breed;

$.get("https://dog.ceo/api/breeds/list/all", function (data, status) {
    let dogBreeds = data.message;
    for (let breed in dogBreeds) {
        dropdown.append('<option>' + breed + '</option>');
    }
});

dropdown.change(function () {
    allowSubmit = true;
});

$("#fetch-dog-image-button").click(function (e) {
    click = true;
    e.preventDefault();

    if (allowSubmit) {
        breed = dropdown.val();
        displayDog(breed);
        allowSubmit = false;
    }

});

$("a #next").click(function (e) {
    e.preventDefault();
    if (breed !== undefined) {
        displayDog(breed);
    }
});
var imageUrl;
function displayDog(breed) {
    var url = "https://dog.ceo/api/breed/" + breed + "/images/random";
    $.get(url , function(data){
        imageUrl = data.message;
        breedImage.attr('src' , imageUrl);
    })
}
var val = 0;
var click = false;
$('#download-dog-image-button').click(function(event){
    if(val === 0 && click === false){
        alert('Please Fetch an image first');
        event.preventDefault();
        val = 1;
    }
    else {
        $('#download').attr('href' , imageUrl);
    }
})


// function fetchRandomDogImage(){
//     click = true;
//     $.get('https://dog.ceo/api/breeds/image/random' , function(data){
//         var imageUrl = data.message;
//         $('#dog-image').attr('src' , imageUrl);
//         $('a').attr('href' , imageUrl);
//     }).fail(function(xhr , textStatus , errorThrown){
//         console.log("request failed");
//     });
// };



