export function review() {
    let reviews = document.querySelectorAll('.review');
    let reviewSelectItems = document.querySelectorAll('.select--item');

    for (let i = 0; i < reviewSelectItems.length; i++) {
        const reviewSelectItem = reviewSelectItems[i];
        reviewSelectItem.onclick = function (e) {
            for (let j = 0; j < reviews.length; j++) {
                const element = reviews[j];
                element.classList.remove('review-selected');
            }
            reviews[i].classList.add('review-selected');
            for (let j = 0; j < reviewSelectItems.length; j++) {
                const element = reviewSelectItems[j];
                element.classList.remove('select--item-selected');
            }
            reviewSelectItems[i].classList.add('select--item-selected');
        }
    }
}