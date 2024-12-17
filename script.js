document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');

        // Close other items when one is clicked
        document.querySelectorAll('.accordion-item').forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
            }
        });
    });
});