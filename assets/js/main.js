// main.js

// Function to fetch JSON data
async function loadJSON() {
  try {
    const response = await fetch('assets/js/data.json'); // Path to your JSON file
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching JSON data:', error);
  }
}

// Function to update the HTML content
function updateContent(data) {
  // Update Favicon
  document.querySelector('link[rel="shortcut icon"]').href = data.favicon;

  // Update Title
  document.title = data.title;
  
  // Update Header
  document.querySelector('header .logo').textContent = data.header.logo;
  const navLinks = document.querySelectorAll('header .navbar a');
  data.header.navbar.forEach((item, index) => {
    navLinks[index].textContent = item.text;
    navLinks[index].setAttribute('href', item.href);
  });

  // Update Hero Section
  const heroSection = document.querySelector('#home');
  heroSection.querySelector('.hero-subtitle').innerHTML = `<strong class="strong">${data.hero.subtitle_strong}</strong>${data.hero.subtitle_normal}`;
  heroSection.querySelector('.hero-title').textContent = data.hero.title;
  heroSection.querySelector('.section-text').textContent = data.hero.text;
  heroSection.querySelector('.btn').textContent = data.hero.button_text;
  heroSection.querySelector('.btn').href = data.hero.button_href;
  heroSection.querySelector('.hero-img').src = data.hero.banner_images[0];
  heroSection.querySelector('.circle-1').src = data.hero.banner_images[2];
  heroSection.querySelector('.circle-2').src = data.hero.banner_images[3];
  heroSection.querySelector('.abs-img-1').src = data.hero.banner_images[4];
  heroSection.querySelector('.abs-img-2').src = data.hero.banner_images[5];

  // Update About Section
  const aboutSection = document.querySelector('#about');
  aboutSection.querySelector('.section-subtitle').textContent = data.about.subtitle;
  aboutSection.querySelector('.section-title').textContent = data.about.title;
  const aboutTexts = aboutSection.querySelectorAll('.section-text');
  data.about.texts.forEach((text, index) => {
    aboutTexts[index].textContent = text;
  });
  aboutSection.querySelector('.coach-name').textContent = data.about.coach.name;
  aboutSection.querySelector('.coach-avatar').src = data.about.coach.avatar;

  // Update Video Section
  const videoSection = document.querySelector('#video');
  videoSection.querySelector('.card-title').textContent = data.video.title;
  const videoSource = videoSection.querySelector('#video-source');
  const video = videoSection.querySelector('#explore-video');
  const playBtn = videoSection.querySelector('#play-btn');
  videoSource.src = data.video.src;
  video.load();
  playBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playBtn.style.display = 'none'; // Hide the play button when video starts
    } else {
      video.pause();
      playBtn.style.display = 'block'; // Show the play button if video is paused
    }
  });
  video.addEventListener('play', () => {
    playBtn.style.display = 'none';
  });
  video.addEventListener('pause', () => {
    playBtn.style.display = 'block';
  });
  video.addEventListener('ended', () => {
    playBtn.style.display = 'block';
  });

  // Update Plans Section
  const plansSection = document.querySelector('#class');
  plansSection.style.backgroundImage = `url('${data.plans.background_image}')`;
  plansSection.querySelector('.section-subtitle').textContent = data.plans.subtitle;
  plansSection.querySelector('.section-title').textContent = data.plans.title;
  const classList = plansSection.querySelector('.class-list');
  classList.innerHTML = '';
  data.plans.packages.forEach(package => {
    const listItem = document.createElement('li');
    listItem.classList.add('scrollbar-item');

    listItem.innerHTML = `
      <div class="class-card">
        <figure class="card-banner img-holder" style="--width: 416; --height: 240;">
          <img src="${package.image}" width="416" height="240" loading="lazy" alt="${package.name}" class="img-cover">
        </figure>
        <div class="card-content">
          <div class="title-wrapper">
            <ion-icon class="title-icon" name="barbell-outline" style="font-size: 36px; color: var(--coquelicot);"></ion-icon>
            <h3 class="h3">
              <a href="#" class="card-title">${package.name}</a>
            </h3>
          </div>
          <p class="card-text">${package.description}</p>
          <div class="card-price">
            <p class="price-label">Price</p>
            <span class="price-value">
              <span class="dollars">${package.price.split('.')[0]}</span>
              <span class="cents">.${package.price.split('.')[1]}</span>
            </span>
          </div>
        </div>
      </div>
    `;
    classList.appendChild(listItem);
  });

  // Update Transformations Section
  const transformationsSection = document.querySelector('#transformations');

  // Set subtitle and title for transformations section
  transformationsSection.querySelector('.section-subtitle').textContent = data.transformations.subtitle;
  transformationsSection.querySelector('.section-title').textContent = data.transformations.title;

  // Get the container for the transformations list
  const transformationsList = transformationsSection.querySelector('.transformations-list');

  // Clear existing items (optional if you want to remove the static content)
  transformationsList.innerHTML = '';

  // Loop through the items and generate the transformation cards dynamically
  data.transformations.items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('scrollbar-item');

    listItem.innerHTML = `
      <div class="transformations-card">
        <!-- Before Image -->
        <div class="card-banner before img-holder" style="--width: 440; --height: 270;">
          <img src="${item.before_image}" width="440" height="270" loading="lazy" alt="Before" class="img-cover">
        </div>
        
        <!-- After Image -->
        <div class="card-banner after img-holder" style="--width: 440; --height: 270;">
          <img src="${item.after_image}" width="440" height="270" loading="lazy" alt="After" class="img-cover">
        </div>
        
        <div class="card-content">
          <!-- Transformation Title -->
          <h3 class="h3">
            <a href="#" class="card-title">${item.title}</a>
          </h3>
          
          <!-- Transformation Description -->
          <p class="card-text">
            ${item.description}
          </p>
        </div>
      </div>
    `;
    transformationsList.appendChild(listItem);
  });

  // Update Footer
  const footerSection = document.querySelector('#footer .footer-top');
  footerSection.style.backgroundImage = `url('${data.footer.background_image}')`;
  footerSection.querySelector('.logo').textContent = data.footer.brand.logo;
  footerSection.querySelector('.footer-brand-text').textContent = data.footer.brand.text;
  footerSection.querySelector('.footer-list-title').textContent = data.footer.contact.title;

  const footerList = footerSection.querySelector('.footer-list');

  // Generate contact items dynamically
  data.footer.contact.items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('footer-list-item');

    listItem.innerHTML = `
    <div class="icon">
      <ion-icon name="${item.icon}" aria-hidden="true"></ion-icon>
    </div>
    <div>
      <a href="${item.href}" class="footer-link">${item.text}</a>
    </div>
  `;

    footerList.appendChild(listItem);
  });

  const socialList = document.querySelector('.social-list');

  data.footer.social_links.forEach(link => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <a href="${link.href}" class="social-link">
      <ion-icon name="${link.icon}"></ion-icon>
    </a>
  `;
    socialList.appendChild(listItem);
  });

  const footerBottom = document.querySelector('.footer-bottom .container');
  const copyrightParagraph = document.createElement('p');
  copyrightParagraph.classList.add('copyright');
  copyrightParagraph.innerHTML = `
  &copy; ${data.footer.copyright.year} FWN. ${data.footer.copyright.text} <a href="${data.footer.copyright.link.href}" class="copyright-link">${data.footer.copyright.link.text}</a>
`;

  footerBottom.appendChild(copyrightParagraph);
}



// Load JSON data and update content on page load
window.addEventListener('load', async () => {
  const data = await loadJSON();
  if (data) {
    updateContent(data);
  }
});