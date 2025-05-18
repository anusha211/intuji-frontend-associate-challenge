// Weekly dropdown functionality
    const weeklyDropdown = document.getElementById('weeklyDropdown');
    const weeklyDropdownMenu = document.getElementById('weeklyDropdownMenu');
    
    weeklyDropdown.addEventListener('click', function() {
      weeklyDropdownMenu.classList.toggle('hidden');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
      if (!weeklyDropdown.contains(event.target)) {
        weeklyDropdownMenu.classList.add('hidden');
      }
    });
    
    // Navigation functionality
    const navItems = document.querySelectorAll('.sidebar-nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        // Remove active class from all items
        navItems.forEach(navItem => navItem.classList.remove('active'));
        // Add active class to clicked item
        this.classList.add('active');
      });
    });
    
    // See All links functionality
    const seeAllLinks = document.querySelectorAll('a[href="#"]');
    seeAllLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('View all items');
      });
    });
    
    // Card arrow functionality
    const arrowButtons = document.querySelectorAll('img[src*="arrowright"]');
    arrowButtons.forEach(button => {
      button.addEventListener('click', function() {
        const cardTitle = this.closest('div.relative').querySelector('h3').textContent;
        alert(`View details for ${cardTitle}`);
      });
    });