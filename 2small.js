(function() {
    // Minimum screen size required
    const minWidth = 1024;
    const minHeight = 600;

    // URL to redirect users if their screen is too small
    const redirectUrl = "https://example.com/small-screen-warning"; // Change this to your target page

    function checkScreenSize() {
        if (window.innerWidth < minWidth || window.innerHeight < minHeight) {
            window.location.href = redirectUrl;
        }
    }

    // Run check on page load
    checkScreenSize();

    // Listen for window resize events to check dynamically
    window.addEventListener("resize", checkScreenSize);
})();
