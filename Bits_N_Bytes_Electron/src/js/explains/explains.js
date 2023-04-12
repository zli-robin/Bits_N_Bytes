var hoverTimer;
var hasHovered = false;

function startHoverTimer(event) {
    var card = event.target.closest('.card');
    hoverTimer = setTimeout(function() {
      card.style.boxShadow = '0 8px 16px 0 rgba(253, 253, 253, 0.2)';
      card.style.height = '90%';
      hasHovered = true;
    }, 1000); // delay for 1 second (1000 milliseconds)
  }
  
  function resetHoverTimer(event) {
    clearTimeout(hoverTimer);
    var card = event.target.closest('.card');
    if (hasHovered) {
      card.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)';
      card.style.height = '230px';
      hasHovered = false;
    }
  }
  
  function stopPropagation(event) {
    event.stopPropagation();
  }