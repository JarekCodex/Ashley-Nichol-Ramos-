function selectOption(option) {
    if (option === 'yes') {
        // Save audio state to localStorage before redirecting
        localStorage.setItem('audioPlaying', true);
        // Redirect to next.html
        window.location.href = 'next.html';
    } else if (option === 'no') {
        const noButton = document.getElementById('no-button');
        const container = document.getElementById('container');

        // Randomize position of the "No" button
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        // Generate random coordinates within the container boundaries
        const randomX = Math.floor(Math.random() * (containerWidth - buttonWidth));
        const randomY = Math.floor(Math.random() * (containerHeight - buttonHeight));

        // Apply the new position
        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }
}
