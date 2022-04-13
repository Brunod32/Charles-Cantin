// Fetch all the filter buttons
let btnFilter = document.querySelectorAll('.filter');

// Fetch all the pictures in the gallery
let imgGalleries = document.querySelectorAll('.img-gallery');

// Loop over filters btn and compare them on images to hide those that don't match
for (let i = 0; i < btnFilter.length; i++) {
    // Listen click on all filter buttons
    btnFilter[i].addEventListener('click', function () {

        // Look for the filter associated to the button
        let dataFilter = this.getAttribute('data-filter');
        // Loop over all pictures
        for (let j = 0; j < imgGalleries.length; j++) {
            // Add 'hide' classes for all pictures
            imgGalleries[j].classList.add('hide');

            // If the 'data-item' property correspond to the filter, remove 'hide' class
            if (imgGalleries[j].getAttribute('data-item') === dataFilter || dataFilter === "all") {
                imgGalleries[j].classList.remove('hide');
            }
        }
    })
}