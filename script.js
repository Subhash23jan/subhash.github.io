    alert('please hover on the title of the project to see the magic');
        const projectCards = document.querySelectorAll('.projects-card');
        const divElement = document.querySelectorAll('.projects-card .details');
        const projectTitles = document.querySelectorAll('.projects-card .title');
        const projectsImages = [
            ['amazon1.jpg', 'amazon2.jpg', 'amazon3.jpg', 'amazon4.jpg', 'amazon5.jpg', 'amazon6.jpg', 'amazon7.jpg', 'amazon8.jpg', 'amazon9.jpg', 'amazon10.jpg', 'amazon11.jpg', 'amazon12.jpg', 'amazon13.jpg', 'amazon14.jpg', 'amazon15.jpg', 'amazon16.jpg'],
            ['instagram1.jpg','instagram2.jpg','instagram3.jpg','instagram4.jpg','instagram5.jpg','instagram6.jpg','instagram7.jpg','instagram8.jpg','instagram9.jpg','instagram10.jpg','instagram11.jpg','instagram12.jpg',],
            ['food1.jpg', 'food2.jpg', 'food3.jpg', 'food4.jpg', 'food5.jpg', 'food6.jpg', 'food7.jpg']
];
 const newCard = document.createElement('div');

        newCard.classList.add('cards');
        projectTitles.forEach((title, index) => {
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
                projectCards[index].replaceChild(divElement[index], newCard);

            });
        });
// const sideHead = document.querySelectorAll(".sidehead");
// sideHead.addEventListener('mouseover', () => {
//     setTimeout(() => {
//         sideHead.style.cursor = 'auto';
//     }, 3000);
// });
const navbar = document.querySelector(".navbar");
let lastScrollY = window.scrollY;
 window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        navbar.classList.add("nav--hidden");
        console.log('going down');
    } else {
      navbar.classList.remove("nav--hidden");
    }

     lastScrollY = window.scrollY;
 });




