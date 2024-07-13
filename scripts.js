document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-download').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault(); // Prevent the default click behavior

            const url = button.getAttribute('data-url');
            // Open the URL in the default browser
            window.open(url, '_system', 'location=yes');
        });
    });
});