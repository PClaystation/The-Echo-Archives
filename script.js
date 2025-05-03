const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".podcast-card");
const backToTopBtn = document.getElementById("backToTop");
const tags = document.querySelectorAll(".tag");

// Search functionality: Filters cards based on search input
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(value) ? "block" : "none";
    });
  });
}

// Tag click functionality: Filters by clicking tags
tags.forEach(tag => {
  tag.addEventListener("click", () => {
    const value = tag.innerText.toLowerCase();
    if (searchInput) {
      searchInput.value = value;
      const event = new Event("input");
      searchInput.dispatchEvent(event);
    }
  });
});

// Scroll functionality: Show/hide back-to-top button
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  // Back-to-top button click functionality
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Filter dropdown toggle functionality (Fix duplication)
const filterToggle = document.getElementById('filterToggle');
if (filterToggle) {
  filterToggle.addEventListener('click', function() {
    const dropdown = document.getElementById('filterDropdown');
    if (dropdown) {
      dropdown.classList.toggle('hidden');
    }
  });
}

// Automatically apply filters when checkboxes are selected or deselected
document.querySelectorAll('#filterDropdown input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    // Get all selected tags
    const checkboxes = document.querySelectorAll('#filterDropdown input[type="checkbox"]:checked');
    const selectedTags = Array.from(checkboxes).map(checkbox => checkbox.value);
    console.log('Selected tags:', selectedTags);

    // Get all podcast cards
    const cards = document.querySelectorAll('.podcast-card');

    if (selectedTags.length === 0) {
      // If no tags are selected, show all podcasts
      cards.forEach(card => {
        card.style.display = 'block';
      });
    } else {
      // If tags are selected, filter the cards based on the tags
      cards.forEach(card => {
        // Get the tags from the data-tags attribute
        const cardTags = card.getAttribute('data-tags').split(',');

        // Check if any of the selected tags match the tags in the data-tags attribute
        const match = selectedTags.some(tag => cardTags.includes(tag));

        // Show or hide the card based on whether it matches the selected tags
        card.style.display = match ? 'block' : 'none';
      });
    }
  });
});




window.addEventListener('scroll', function() {
    const radioInput = document.querySelector('.radio-input');
    const scrollableContainer = document.querySelector('.scrollable-container');
    
    // Check if the scroll position is past the element
    if (window.scrollY >= radioInput.offsetTop) {
      scrollableContainer.classList.add('sticky');
    } else {
      scrollableContainer.classList.remove('sticky');
    }
  });
  


function toggleDropdown() {
    const menu = document.getElementById('season-menu');
    menu.classList.toggle('hidden');
  }
  
  function selectSeason(season) {
    // Update dropdown text
    document.getElementById('selected-season').textContent = season.replace('season', 'Season ');
  
    // Show/hide episodes
    const allEpisodes = document.querySelectorAll('.episode-list li');
    allEpisodes.forEach(ep => {
      ep.style.display = ep.classList.contains(season) ? 'block' : 'none';
    });
  
    // Close dropdown
    document.getElementById('season-menu').classList.add('hidden');
  }
  