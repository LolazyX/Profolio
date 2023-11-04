document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        const title_page = document.getElementById('title-page');
        const logo = document.getElementById('logo-navbar')
        if (title_page) {
            const title_pageRect = title_page.getBoundingClientRect();
            if (title_pageRect.top <= 0) {
                logo.classList.remove('text-infra-red');
                logo.classList.add('text-white')
                navbar.classList.add('bg-rich-black');
                navbar.classList.add('border-b-2')
                navbar.classList.add('border-infra-red')
            } else {
                logo.classList.add('text-infra-red');
                logo.classList.remove('text-white')
                navbar.classList.remove('bg-rich-black');
                navbar.classList.remove('border-b-2')
                navbar.classList.remove('border-infra-red')
            }
        }
    })
})