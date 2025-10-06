//Header Sign In Button
const signInButton = document.getElementById('signInButton');
signInButton.addEventListener('click', () => {
  window.location.href = 'https://www.netflix.com/ng/login'
});

// Slider Feauture Responsiveness for Movies
const slider = document.querySelector('.slider-features');
const prev = document.querySelector('.pre-btn');
const next = document.querySelector('.nxt-btn');

prev.style.display = 'none'; 

slider.addEventListener('scroll', () => {
  const scrollLeft = slider.scrollLeft;
  const scrollWidth = slider.scrollWidth - slider.offsetWidth;

  prev.style.display = scrollLeft <= 0 ? 'none' : 'block';
  next.style.display = scrollLeft >= scrollWidth - 1 ? 'none' : 'block';
  
});


//Netflix Questions
const listShows = document.querySelectorAll('.list-show');

listShows.forEach((listShow) => {
  listShow.addEventListener('click', () => {
    const questionContent = listShow.nextElementSibling;
    const isExpanded = questionContent.classList.contains('show');

    // Collapse all other question contents
    document.querySelectorAll('.question-content').forEach((content) => {
      content.classList.remove('show');
      content.previousElementSibling.querySelector('.plus-icon').style.display = 'block';
      content.previousElementSibling.querySelector('.times-icon').style.display = 'none';
    });

    // Toggle the current question content
    if (!isExpanded) {
      questionContent.classList.add('show');
      listShow.querySelector('.plus-icon').style.display = 'none';
      listShow.querySelector('.times-icon').style.display = 'block';
    } else {
      questionContent.classList.remove('show');
      listShow.querySelector('.plus-icon').style.display = 'block';
      listShow.querySelector('.times-icon').style.display = 'none';
    }
  });
});
//Collapse learn more details 
document.getElementById("learn-more").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("more-info").style.display = "block";
  document.getElementById("learn-more").style.display = "none";
});


// Responsiveness of the Form buttons
const forms = document.querySelectorAll('.email-form, form');

forms.forEach((form) => {
  const emailInput = form.querySelector('input[type="email"]');
  const button = form.querySelector('button');

    emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
      button.style.background = '#db0001';
      button.style.cursor = 'pointer';
    } else {
      button.style.background = '';
      button.style.cursor = '';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const url = `https://www.netflix.com/signup/registration?email=${email}`;
    window.location.href = url;
    // handle the email submission here
  });
});

// reponsiness of the footer button
const backToTopButton = document.querySelector('.end-button');
const netflixLanguageSection = document.querySelector('#netflix-language'); // replace with the actual ID or selector

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const netflixLanguageSectionTop = netflixLanguageSection.offsetTop;

  if (scrollPosition > netflixLanguageSectionTop) {
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.transform = 'scale(0.8)';
  } else {
    backToTopButton.style.position = '';
    backToTopButton.style.bottom = '';
    backToTopButton.style.right = '';
    backToTopButton.style.transform = '';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

