$(document).ready(function(){
    
    // Document Ready
    console.log('Document Ready! Ready to process Javascript...');

// On-Click Funciton Post Data
$('#addburgerbttn').on('click', function(event) {
    console.log('Submit Button Clicked!');

    // Prevent Default
    event.preventDefault();

    var newBurger = {
        name: $('#burgerName').val().trim(),
        devoured: false
    };

    console.log('NewBurger: ',newBurger);

    // Send/Post Request for new Burger
    $.ajax('/api/burger', {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log('New Burger Created');
            // Reload Page
            location.reload();
        }
    );
});


//End of Document on Ready 
})