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
