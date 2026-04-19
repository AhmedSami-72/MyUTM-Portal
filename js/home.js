document.addEventListener('DOMContentLoaded', () => {
    // 1. Systems & Apps Collapsible Logic
    const menuTitles = document.querySelectorAll('.menu-title');

    menuTitles.forEach(title => {
        title.addEventListener('click', () => {
            const menuItem = title.parentElement;
            const submenu = menuItem.querySelector('.submenu');
            
            // Close other open menus
            document.querySelectorAll('.menu-item').forEach(item => {
                if (item !== menuItem) {
                    item.classList.remove('active');
                    const otherSubmenu = item.querySelector('.submenu');
                    if (otherSubmenu) otherSubmenu.classList.remove('show');
                    const otherIcon = item.querySelector('.menu-title i');
                    if (otherIcon) otherIcon.classList.replace('fa-chevron-down', 'fa-chevron-right');
                }
            });

            // Toggle current menu
            menuItem.classList.toggle('active');
            if (submenu) {
                submenu.classList.toggle('show');
            }
            
            const icon = title.querySelector('i');
            if (icon) {
                if (menuItem.classList.contains('active')) {
                    icon.classList.replace('fa-chevron-right', 'fa-chevron-down');
                } else {
                    icon.classList.replace('fa-chevron-down', 'fa-chevron-right');
                }
            }
        });
    });

    // 2. Header Scroll Behavior
    const header = document.getElementById('mainHeader');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('fixed');
            scrollTopBtn.classList.add('show');
        } else {
            header.classList.remove('fixed');
            scrollTopBtn.classList.remove('show');
        }
    });

    // 3. Scroll to Top
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 4. Profile Dropdown Logic
    const profileTrigger = document.getElementById('profileTrigger');
    const profileDropdown = document.getElementById('profileDropdown');

    if (profileTrigger && profileDropdown) {
        profileTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
            // Hide stats popup if open
            if (statsPopup) statsPopup.classList.remove('show');
        });

        window.addEventListener('click', () => {
            profileDropdown.classList.remove('show');
        });

        profileDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // 5. Grid Icon / Stats Popup Logic
    const gridIcon = document.getElementById('gridIcon');
    const statsPopup = document.getElementById('statsPopup');

    if (gridIcon && statsPopup) {
        gridIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            statsPopup.classList.toggle('show');
            // Hide profile dropdown if open
            if (profileDropdown) profileDropdown.classList.remove('show');
        });

        window.addEventListener('click', () => {
            statsPopup.classList.remove('show');
        });

        statsPopup.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // 6. Rate Modal Logic
    const rateBtn = document.getElementById('rateBtn');
    const rateModal = document.getElementById('rateModal');

    if (rateBtn && rateModal) {
        rateBtn.addEventListener('click', () => {
            rateModal.classList.add('show');
        });
    }
});

function closeModal() {
    const rateModal = document.getElementById('rateModal');
    if (rateModal) {
        rateModal.classList.remove('show');
    }
}
