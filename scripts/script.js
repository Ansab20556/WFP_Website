    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        body.classList.add('light');
    }


    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');

        
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    