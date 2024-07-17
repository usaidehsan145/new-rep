document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.testimonial-thumbnails img');
    const contents = document.querySelectorAll('.testimonial-content');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const activeContent = document.querySelector('.testimonial-content.active');
            const newContent = document.getElementById(targetId);

            if (activeContent === newContent) return;

            activeContent.classList.remove('active');
            activeContent.classList.add('inactive');
            newContent.classList.add('active');

            setTimeout(() => {
                activeContent.classList.remove('inactive');
            }, 500); // Match this timeout to the transition duration in CSS
        });
    });
});
