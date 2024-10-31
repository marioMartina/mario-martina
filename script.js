document.addEventListener("DOMContentLoaded", function () {
    // Sample image paths
    const photos = [
        'images1/gellary/1.JPG', 'images1/gellary/2.JPG', 'images1/gellary/3.JPG',
        'images1/gellary/4.JPG', 'images1/gellary/5.JPG', 'images1/gellary/6.JPG',
        'images1/gellary/7.JPG', 'images1/gellary/8.JPG', 'images1/gellary/9.JPG',
        'images1/gellary/10.JPG', 'images1/gellary/11.JPG', 'images1/gellary/12.JPG',
        'images1/gellary/13.JPG', 'images1/gellary/14.JPG', 'images1/gellary/15.JPG',
        'images1/gellary/16.JPG', 'images1/gellary/17.JPG', 'images1/gellary/18.JPG',
        'images1/gellary/19.JPG', 'images1/gellary/20.JPG', 'images1/gellary/21.JPG',
        'images1/gellary/23.JPG', 'images1/gellary/24.JPG','images1/gellary/25.JPG',
        'images1/gellary/26.JPG', 'images1/gellary/27.JPG', 
        'images1/gellary/28.JPG', 'images1/gellary/29.JPG', 'images1/gellary/30.JPG',
        'images1/gellary/31.JPG', 'images1/gellary/32.JPG', 'images1/gellary/33.JPG',
        'images1/gellary/34.JPG', 'images1/gellary/35.JPG', 'images1/gellary/36.JPG',
        'images1/gellary/37.JPG', 'images1/gellary/38.JPG', 'images1/gellary/39.JPG',
        'images1/gellary/40.JPG', 'images1/gellary/41.JPG', 'destinations/images/dahab/1.JPG',
        'destinations/images/dahab/2.JPG', 'destinations/images/dahab/3.JPG',
        'destinations/images/dahab/4.JPG', 'destinations/images/dahab/5.JPG',
        'destinations/images/dahab/6.JPG', 'destinations/images/dahab/7.JPG',
        'destinations/images/dahab/8.JPG', 'destinations/images/dahab/9.JPG',
        'destinations/images/dahab/10.JPG', 'destinations/images/luxor/1.jpg',
        'destinations/images/luxor/2.jpg', 'destinations/images/luxor/3.jpg',
        'destinations/images/luxor/4.jpg', 'destinations/images/luxor/5.jpg',
        'destinations/images/luxor/6.jpg', 'destinations/images/luxor/7.jpg',
        'destinations/images/luxor/8.jpg', 'destinations/images/luxor/9.jpg',
        'destinations/images/aswan/1.jpg', 'destinations/images/aswan/2.jpg',
        'destinations/images/aswan/3.jpg', 'destinations/images/aswan/4.jpg',
        'destinations/images/aswan/5.jpg', 'destinations/images/aswan/6.jpg',
        'destinations/images/aswan/7.jpg', 'destinations/images/aswan/8.jpg',
        'destinations/images/aswan/9.jpg', 'destinations/images/aswan/10.jpg',
        'destinations/images/aswan/11.jpg', 
        // Add more photos here as needed
    ];

    const photosPerPage = 9;
    let currentPage = 1;
    const totalPages = Math.ceil(photos.length / photosPerPage);

    function displayPhotos(page) {
        const gallery = document.getElementById('gallery-photos');
        gallery.innerHTML = '';

        const start = (page - 1) * photosPerPage;
        const end = start + photosPerPage;
        const photosToShow = photos.slice(start, end);

        // Loop through and add photos with delay for animation
        photosToShow.forEach((photo, index) => {
            const photoElement = document.createElement('div');
            photoElement.classList.add('col-lg-4', 'col-md-6');
            photoElement.innerHTML = `
                <div class="card">
                    <img src="${photo}" class="card-img-top" alt="Journey Photo">
                </div>
            `;
            gallery.appendChild(photoElement);

            // Add a slight delay to the animation of each card
            setTimeout(() => {
                photoElement.querySelector('.card').classList.add('show');
            }, index * 100); // Delay increases with each photo for a cascading effect
        });

        addModalFunctionality();
    }

    function addModalFunctionality() {
        const images = document.querySelectorAll(".card img");
        images.forEach(image => {
            image.addEventListener("click", function () {
                const src = this.getAttribute("src");
                document.getElementById("modalImage").setAttribute("src", src);
                const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
                imageModal.show();
            });
        });
    }

    // Initial display
    displayPhotos(currentPage);

    // Pagination logic
    function updatePagination() {
        document.getElementById("prevPage").classList.toggle('disabled', currentPage === 1);
        document.getElementById("nextPage").classList.toggle('disabled', currentPage === totalPages);
    }

    // Event listener for the "Previous" button
    document.getElementById("prevPage").addEventListener("click", function (e) {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            displayPhotos(currentPage);
            updatePagination();
        }
    });

    // Event listener for the "Next" button
    document.getElementById("nextPage").addEventListener("click", function (e) {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            displayPhotos(currentPage);
            updatePagination();
        }
    });

    updatePagination();
});



