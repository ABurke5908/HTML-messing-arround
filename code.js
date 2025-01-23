// JavaScript for enhanced dropdown menu functionality

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu > li');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Function to close all dropdowns
    const closeDropdowns = () => {
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    };

    // Function to open a dropdown
    const openDropdown = (dropdown) => {
        closeDropdowns(); // Close others
        dropdown.style.display = 'block';
    };

    // Add event listeners to each menu item
    menuItems.forEach(item => {
        const dropdown = item.querySelector('.dropdown');

        if (dropdown) {
            // Hover to open dropdown
            item.addEventListener('mouseenter', () => openDropdown(dropdown));

            // Leave to close dropdown
            item.addEventListener('mouseleave', closeDropdowns);

            // Click to toggle dropdown
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                if (dropdown.style.display === 'block') {
                    closeDropdowns();
                } else {
                    openDropdown(dropdown);
                }
            });
        }
    });

    // Close dropdown when clicking outside the menu
    document.addEventListener('click', closeDropdowns);

    // Keyboard navigation for accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDropdowns();
        }
    });

    // Log message to verify script is running
    console.log('Dropdown menu script loaded successfully.');
});
