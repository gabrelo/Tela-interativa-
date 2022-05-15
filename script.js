const ratingSection = document.querySelector('.container');
const thankYouSection = document.querySelector('.thank-you-section');
const submitBtn = document.querySelector('button');
const ratingBtns = document.querySelectorAll('input');
const ratingResult = document.querySelector('.rating-result');
let rating = 0;
ratingBtns.forEach(button => {
    button.addEventListener('click', function(e){
        ratingBtns.forEach(btn => {
            btn.classList.remove('active-rating-btn');
        });
        e.target.classList.add('active-rating-btn');
        rating = e.target.value;
    });
});

submitBtn.addEventListener('click', function(){
    if(rating === 0){
        errorMsg.style.display = 'block';
    }
    else{
        ratingSection.style.display = 'none';
        thankYouSection.style.display = 'flex';
        ratingResult.textContent = `You selected ${rating} out of 5`;
    }
});