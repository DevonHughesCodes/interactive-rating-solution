const submitBtn = document.querySelector('.submit_btn');
const ratingSection = document.querySelector('.rating_section');
const thankYouSection = document.querySelector('.thankyou_section');
const ratingSpans = document.querySelectorAll('.ratings span');
const selectedRating = document.getElementById('rate');

let rating = 0;

ratingSpans.forEach((span) => {
    span.addEventListener('click', () => {

        ratingSpans.forEach(s => s.style.backgroundColor = '');


        span.style.backgroundColor = 'var(--medium-grey)';
        span.style.color = 'var(--white)';


        rating = span.textContent;
    });
});


submitBtn.addEventListener('click', () => {
    if (rating === 0) {
        alert('Please select a rating before submitting');
        return;
    }


    selectedRating.textContent = rating;


    ratingSection.classList.add('hidden');
    thankYouSection.classList.remove('hidden');
});