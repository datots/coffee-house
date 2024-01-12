function showTab(tabId) {
    // Hide all containers
    var containers = document.querySelectorAll('.container');
    containers.forEach(function(container) {
      container.classList.remove('active');
    });

    // Show the selected container
    var selectedContainer = document.getElementById(tabId + '-container');
    if (selectedContainer) {
      selectedContainer.classList.add('active');
    }
  }