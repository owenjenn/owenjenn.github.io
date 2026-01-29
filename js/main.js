// Tab Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Handle tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');

            // Update URL hash for bookmarking/sharing
            history.pushState(null, null, `#${targetTab}`);
        });
    });

    // Handle direct URL access with hash (e.g., #gridirony)
    function handleHashChange() {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const targetButton = document.querySelector(`[data-tab="${hash}"]`);
            if (targetButton) {
                targetButton.click();
            }
        }
    }

    // Check hash on page load
    handleHashChange();

    // Listen for hash changes (browser back/forward)
    window.addEventListener('hashchange', handleHashChange);
});
