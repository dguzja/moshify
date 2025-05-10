const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach(item => {
    item.querySelector('.collapsible__header').addEventListener('click', () => {
        item.classList.toggle('collapsible--expanded');
    });
});