let hoverTimer;
let hasHovered = false;
let startHoveredAgain = false;

function startHoverTimer(event) {
    let card = event.target.closest('.card');
    clearTimeout(hoverTimer);
    if (startHoveredAgain) {
        hoverTimer = setTimeout(function () {
            card.style.boxShadow = '0 8px 16px 0 rgba(253, 253, 253, 0.2)';
            card.style.height = '90%';
            hasHovered = true;
            startHoveredAgain = false;
        }, 2000); // delay for 2 seconds (2000 milliseconds)
    } else {
        hoverTimer = setTimeout(function () {
            card.style.boxShadow = '0 8px 16px 0 rgba(253, 253, 253, 0.2)';
            card.style.height = '90%';
            hasHovered = true;
        }, 500); // delay for 1 second (1000 milliseconds)
    }
}

function resetHoverTimer(event) {
    clearTimeout(hoverTimer);
    let card = event.target.closest('.card');
    if (hasHovered) {
        startHoveredAgain = true;
        hoverTimer = setTimeout(function () {
            card.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)';
            card.style.height = '230px';
            hasHovered = false;
            startHoveredAgain = false;
        }, 1000); // delay for 1 second (1000 milliseconds)
    } else {
        card.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)';
        card.style.height = '230px';
        startHoveredAgain = false;
    }
}
