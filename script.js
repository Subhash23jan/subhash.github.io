    alert('please hover on the title of the project to see the magic');
        const projectCards = document.querySelectorAll('.projects-card');
        const divElement = document.querySelectorAll('.projects-card .details');
        const projectTitles = document.querySelectorAll('.projects-card .title');
        const projectsImages = [
            ['amazon1.jpg', 'amazon2.jpg', 'amazon3.jpg', 'amazon4.jpg', 'amazon5.jpg', 'amazon6.jpg'],
            ['instagram1.jpg', 'instagram2.jpg', 'instagram3.jpg', 'instagram4.jpg'],
            ['food1.jpg', 'food2.jpg', 'food3.jpg', 'food4.jpg', 'food5.jpg', 'food6.jpg', 'food7.jpg']
        ];
        const newCard = document.createElement('div');

        newCard.classList.add('cards');
        projectTitles.forEach((title, index) => {
            const text = title.textContent;
            title.addEventListener('mouseover', () => {
                title.style.color = '#0077B5';
                title.style.cursor = 'pointer';
                let imageIndex = 1;
                const image = document.createElement('img');
                image.src = projectsImages[index][0];
                newCard.appendChild(image);
                projectCards[index].replaceChild(newCard, divElement[index]);
                setInterval(() => {
                    image.src = projectsImages[index][imageIndex];
                    imageIndex = (imageIndex + 1) % projectsImages[index].length;
                }, 1500);
            });

            title.addEventListener('mouseout', () => {
                title.style.color = 'rgb(230, 223, 223)';
                title.style.cursor = 'auto';
                title.textContent = text;
                projectCards[index].replaceChild(divElement[index], newCard);

            });
        });

const sideHead = document.querySelectorAll(".sidehead");
sideHead.addEventListener('mouseover', () => {
    setTimeout(() => {
        sideHead.style.cursor = 'auto';
    }, 3000);
});


