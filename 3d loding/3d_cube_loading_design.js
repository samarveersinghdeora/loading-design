document.addEventListener("DOMContentLoaded", function () {
    const faces = document.querySelectorAll('.face');

    // Generate random colors for the cube faces
    faces.forEach(face => {
        face.style.background = getRandomGradient();
    });

    // Function to generate a random gradient color
    function getRandomGradient() {
        const colors = [
            '#ff6a00', '#ffcc33', '#3399ff', '#33cc33', '#ff3333',
            '#9933ff', '#ff6699', '#33cccc'
        ];
        const color1 = colors[Math.floor(Math.random() * colors.length)];
        const color2 = colors[Math.floor(Math.random() * colors.length)];
        return `linear-gradient(135deg, ${color1}, ${color2})`;
    }
});
