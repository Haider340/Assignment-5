function ticketClick(){
    const bannerSection = document.getElementById('banner-section');
    bannerSection.classList.add('hidden');

    const bounesSection = document.getElementById('bounes');
    bounesSection.classList.add('hidden');
    

    const poribahanSection = document.getElementById('poribahan-section');
    poribahanSection.classList.remove('hidden');
}
function continueClick(){
    const modalSection = document.getElementById('Continue');
    modalSection.classList.add('hidden');

    const poribahanSection = document.getElementById('poribahan-section');
    poribahanSection.classList.add('hidden');

    const bannerSection = document.getElementById('banner-section');
    bannerSection.classList.remove('hidden');

}

