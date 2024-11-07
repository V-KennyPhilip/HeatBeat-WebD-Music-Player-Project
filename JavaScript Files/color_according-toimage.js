<script>
window.addEventListener('load', function() {
    var image = document.getElementById('image');

    // Create a canvas element
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    // Set the canvas dimensions to match the image
    canvas.width = image.width;
    canvas.height = image.height;

    // Draw the image onto the canvas
    context.drawImage(image, 0, 0);

    // Get the pixel data from the canvas
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pixels = imageData.data;

    // Calculate the average RGB values of the image
    var totalR = 0,
        totalG = 0,
        totalB = 0;
    var pixelCount = pixels.length / 4; // Each pixel consists of 4 values (R, G, B, and Alpha)

    for (var i = 0; i < pixels.length; i += 4) {
        totalR += pixels[i];
        totalG += pixels[i + 1];
        totalB += pixels[i + 2];
    }

    var averageR = Math.round(totalR / pixelCount);
    var averageG = Math.round(totalG / pixelCount);
    var averageB = Math.round(totalB / pixelCount);

    // Generate the gradient CSS using the analyzed color
    var gradientCSS = 'linear-gradient(to bottom, rgb(' + averageR + ', ' + averageG + ', ' + averageB + ') 0%, rgb(16, 16, 16) 100%)';

    // Set the gradient background of the image container
    var imageContainer = document.querySelector('.gradient');
    imageContainer.style.background = gradientCSS;
});
</script>