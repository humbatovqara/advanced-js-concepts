const lists = document.querySelectorAll('nav ul li');

lists.forEach(list => {
    list.addEventListener('click', (e) => {
        e.preventDefault();
        [...lists].map(list => list.classList.remove('active'));
        list.classList.add('active');
        let target = list.querySelector('a').getAttribute('href').replace('#', '');
        document.getElementById(target).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
        var scrollTimeout;
        addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                document.querySelector('active').scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center"
                });
            }, 100)
        })

    })
})

document.getElementById('to-top').addEventListener('click', (e) => {
    e.preventDefault();

    document.body.scrollIntoView({
        behavior: 'smooth'
    })
})