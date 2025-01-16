document.addEventListener("DOMContentLoaded", () => {
  const images = [
    { src: 'images/fairy.jpg' },
    { src: 'images/highway.avif' },
    { src: 'images/k2.jpg' },
    { src: 'images/moen.avif' },
  ];

  const text = [
    { heading: "Fairy Meadows", para: "Fairy Meadows is a grassland near one of the base camp sites of the Nanga Parbat, located in Diamer District, Gilgit-Baltistan, Pakistan. At an altitude of about 3,300 meters above the sea level, it serves as the launching point for trekkers summiting on the Rakhiot face of the Nanga Parbat." },
    { heading: "Karakoram Highway", para: "The Karakoram Highway is a 1,300 km national highway which extends from Hasan Abdal in the Punjab province of Pakistan to the Khunjerab Pass in Gilgit-Baltistan, where it crosses into China and becomes China National Highway 314. It is one of the highest paved roads in the world, passing through the Karakoram mountain range, at an elevation of 4,714 meters." },
    { heading: "K2", para: "K2, at 8,611 metres (28,251 ft) above sea level, is the second highest mountain in the world, after Mount Everest at 8,848 metres (29,029 ft). It is located on the China–Pakistan border between Baltistan in the Gilgit-Baltistan region of northern Pakistan, and the Taxkorgan Tajik Autonomous County of Xinjiang, China." },
    { heading: "Moenjodaro", para: "Mohenjo-daro is an archaeological site in the province of Sindh, Pakistan. Built around 2500 BCE, it was one of the largest settlements of the ancient Indus Valley Civilisation, and one of the world's earliest major urban settlements, contemporaneous with the civilizations of ancient Egypt, Mesopotamia, Minoan Crete, and Norte Chico." },
  ];

  let counter = 0;
  let autoSlideInterval;

  const changeBackground = () => {
    const backgroundContainer = document.querySelector('.background-container');
    const heading = document.querySelector('.heading');
    const para = document.querySelector('.para');

    backgroundContainer.style.backgroundImage = `url(${images[counter].src})`;
    heading.textContent = text[counter].heading;
    para.textContent = text[counter].para;
  };

  const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
      counter = (counter + 1) % images.length;
      changeBackground();
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
    setTimeout(startAutoSlide, 120000);
  };

  const goNext = () => {
    counter = (counter + 1) % images.length;
    changeBackground();
    stopAutoSlide();
  };

  const goPrev = () => {
    counter = (counter - 1 + images.length) % images.length;
    changeBackground();
    stopAutoSlide();
  };

  changeBackground();
  startAutoSlide();

  window.goNext = goNext;
  window.goPrev = goPrev;

  const menuButton = document.getElementById('menu');
  const dropdown = document.getElementsByClassName('dropdown')[0];

  menuButton.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', (event) => {
    if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });

  // const aboutBtn = document.getElementById('about-btn');
  // const aboutDiv = document.getElementsByClassName('about')[0];

  // aboutBtn.addEventListener('mouseover', () => {
  //   aboutDiv.style.display = 'block';
  // });

  // aboutBtn.addEventListener('mouseout', () => {
  //   aboutDiv.style.display = 'none';
  // });

});
