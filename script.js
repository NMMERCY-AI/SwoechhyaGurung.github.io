// Carousel Logic with both Previous and Next buttons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all carousels
    initCarousel('carousel1', 'indicator1');
    initCarousel('carousel2', 'indicator2');
    initCarousel('carousel3', 'indicator3');
});

function initCarousel(carouselId, indicatorId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('.carousel-item');
    const indicator = document.getElementById(indicatorId);
    const prevBtn = document.getElementById('prevBtn' + carouselId.slice(-1));
    const nextBtn = document.getElementById('nextBtn' + carouselId.slice(-1));
    
    // Create indicator dots
    for (let i = 0; i < items.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('indicator-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToItem(carouselId, indicatorId, i));
        indicator.appendChild(dot);
    }
    
    // Update button states
    updateButtonState(prevBtn, nextBtn, 0, items.length);
}

function updateButtonState(prevBtn, nextBtn, currentIndex, totalItems) {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalItems - 1;
}

function showPrevItem(carouselId, indicatorId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = document.getElementById(indicatorId).querySelectorAll('.indicator-dot');
    const prevBtn = document.getElementById('prevBtn' + carouselId.slice(-1));
    const nextBtn = document.getElementById('nextBtn' + carouselId.slice(-1));
    
    // Find the current active item
    let currentIndex = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('active')) {
            currentIndex = i;
            break;
        }
    }
    
    // Move to the previous item if possible
    if (currentIndex > 0) {
        // Hide the current item
        items[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        
        // Show the previous item
        items[currentIndex - 1].classList.add('active');
        indicators[currentIndex - 1].classList.add('active');
        
        // Update button states
        updateButtonState(prevBtn, nextBtn, currentIndex - 1, items.length);
    }
}

function showNextItem(carouselId, indicatorId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = document.getElementById(indicatorId).querySelectorAll('.indicator-dot');
    const prevBtn = document.getElementById('prevBtn' + carouselId.slice(-1));
    const nextBtn = document.getElementById('nextBtn' + carouselId.slice(-1));
    
    // Find the current active item
    let currentIndex = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('active')) {
            currentIndex = i;
            break;
        }
    }
    
    // Move to the next item if possible
    if (currentIndex < items.length - 1) {
        // Hide the current item
        items[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        
        // Show the next item
        items[currentIndex + 1].classList.add('active');
        indicators[currentIndex + 1].classList.add('active');
        
        // Update button states
        updateButtonState(prevBtn, nextBtn, currentIndex + 1, items.length);
    }
}

function goToItem(carouselId, indicatorId, index) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('.carousel-item');
    const indicators = document.getElementById(indicatorId).querySelectorAll('.indicator-dot');
    const prevBtn = document.getElementById('prevBtn' + carouselId.slice(-1));
    const nextBtn = document.getElementById('nextBtn' + carouselId.slice(-1));
    
    // Hide all items
    items.forEach(item => item.classList.remove('active'));
    indicators.forEach(dot => dot.classList.remove('active'));
    
    // Show the selected item
    items[index].classList.add('active');
    indicators[index].classList.add('active');
    
    // Update button states
    updateButtonState(prevBtn, nextBtn, index, items.length);
}

function showNextItem(carouselId, indicatorId) {
    let items = document.querySelectorAll(`#${carouselId} .carousel-item`);
    let indicators = document.querySelectorAll(`#${indicatorId} span`);
    let activeIndex = Array.from(items).findIndex(item => item.classList.contains("active"));

    if (activeIndex !== -1) {
        items[activeIndex].classList.remove("active");
        indicators[activeIndex]?.classList.remove("active");
    }

    let nextIndex = (activeIndex + 1) % items.length;
    items[nextIndex].classList.add("active");
    indicators[nextIndex]?.classList.add("active");
}

function showPrevItem(carouselId, indicatorId) {
    let items = document.querySelectorAll(`#${carouselId} .carousel-item`);
    let indicators = document.querySelectorAll(`#${indicatorId} span`);
    let activeIndex = Array.from(items).findIndex(item => item.classList.contains("active"));

    if (activeIndex !== -1) {
        items[activeIndex].classList.remove("active");
        indicators[activeIndex]?.classList.remove("active");
    }

    let prevIndex = (activeIndex - 1 + items.length) % items.length;
    items[prevIndex].classList.add("active");
    indicators[prevIndex]?.classList.add("active");
}
