window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    setTimeout(function() {
        const loaderWrapper = document.querySelector('.loader-wrapper');
        if (loaderWrapper) {
            loaderWrapper.remove();
        }
    }, 500); // Matches CSS transition
});