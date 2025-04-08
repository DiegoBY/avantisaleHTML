// Swiper Banner Principal
const swiperOne = new Swiper('.swiperOne', {
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});

// Swiper Banner Lançamentos
const swiperTwo = new Swiper('.swiperTwo', {
    slidesPerView: 2,
    spaceBetween: 5,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1536: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});

const swiperThree = new Swiper('.swiperThree', {
    slidesPerView: 5,
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});

swiperOne.update();
swiperTwo.update();
swiperThree.update();

// Pegando a Logo
const logoAvanti = document.querySelector('#logo');

// Modal de pesquisa
const inputSearch = document.querySelector('#search');
const inputButtonSearch = document.querySelector('#buttonSearch');
const searchItemSpan = document.querySelector('#searchItem');
const modal = document.querySelector('#modal');

// Pegando as sections
const sectionMain = document.querySelector('#main');
const sectionNewReleases = document.querySelector('#newReleases');
const sectionCupOne = document.querySelector('#cupOne');
const sectionCupTwo = document.querySelector('#cupTwo');
const sectionCupThree = document.querySelector('#cupThree');
const sectionNewReleasesTwo = document.querySelector('#newReleasesTwo');
const sectionBannerWhatsapp = document.querySelector('#bannerWhatsapp');
const sectionForm = document.querySelector('#form');

// Functions
inputSearch.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        openModal();
    }
});

const openModal = () => {
    const inputItem = inputSearch.value.trim();

    if (inputItem.length < 3) return;

    modal.classList.remove('hidden');

    // Removendo as sections
    sectionMain.classList.add('hidden');
    sectionNewReleases.classList.add('hidden');
    sectionCupOne.classList.add('hidden', '2xl:hidden');
    sectionCupTwo.classList.add('hidden', '2xl:hidden');
    sectionCupThree.classList.add('hidden', '2xl:hidden');
    sectionBannerWhatsapp.classList.add('hidden');
    sectionNewReleasesTwo.classList.add('2xl:hidden');
    sectionForm.classList.add('hidden');

    searchItemSpan.textContent = inputItem;

    console.log(inputItem);
};

const closedModal = () => {
    modal.classList.add('hidden');

    // Adicionando as sections
    sectionMain.classList.remove('hidden');
    sectionNewReleases.classList.remove('hidden');
    sectionCupOne.classList.remove('hidden');
    sectionCupOne.classList.remove('2xl:hidden');
    sectionCupTwo.classList.remove('hidden');
    sectionCupTwo.classList.remove('2xl:hidden');
    sectionCupThree.classList.remove('hidden');
    sectionCupThree.classList.remove('2xl:hidden');
    sectionBannerWhatsapp.classList.remove('hidden');
    sectionNewReleasesTwo.classList.remove('2xl:hidden');
    sectionForm.classList.remove('hidden');

    inputSearch.value = '';
};

inputButtonSearch.addEventListener('click', openModal);
logoAvanti.addEventListener('click', closedModal);

// Hover
const hoverAllCategorias = document.querySelector('#hoverAllCategorias');
const divHoverAll = document.querySelector('#divHoverAll');

const hoverOpenAll = () => {
    divHoverAll.classList.remove('hidden');
    divHoverAll.classList.add('flex');
    divDepartamento.classList.remove('flex');
    divDepartamento.classList.add('hidden');
};

const hoverClosedAll = () => {
    divHoverAll.classList.remove('flex');
    divHoverAll.classList.add('hidden');
};

hoverAllCategorias.addEventListener('mouseenter', hoverOpenAll);
divHoverAll.addEventListener('mouseleave', hoverClosedAll);

// Hover Departamento
const divDepartamento = document.querySelector('#divOneDepartamento');
const linkDepartamento = document.querySelector('#linkDepartamento');

const openLink = () => {
    divDepartamento.classList.remove('hidden');
    divDepartamento.classList.add('flex');
    divHoverAll.classList.remove('flex');
    divHoverAll.classList.add('hidden');
};

const closedLink = () => {
    divDepartamento.classList.remove('flex');
    divDepartamento.classList.add('hidden');
};

linkDepartamento.addEventListener('mouseenter', openLink);
divDepartamento.addEventListener('mouseleave', closedLink);

// Menu Mobile
const displayMenuMobile = document.querySelector('.displayMenuMobile');
const iconMenuMobile = document.querySelector('.iconMenuMobile');
const iconMenuMobileClose = document.querySelector('.iconMenuMobileClose');
const body = document.querySelector('body');

let isOpenMenu = false;

const openMenu = () => {
    if (!isOpenMenu) {
        isOpenMenu = true;

        displayMenuMobile.classList.remove(
            'hidden',
            'animate-menuCategoriaClose'
        );
        displayMenuMobile.classList.add('block', 'animate-menuCategoria');
        body.style.overflow = 'hidden';
    }
};

const closeMenu = () => {
    if (isOpenMenu) {
        isOpenMenu = false;

        displayMenuMobile.classList.remove('animate-menuCategoria');
        displayMenuMobile.classList.add('animate-menuCategoriaClose');

        setTimeout(() => {
            displayMenuMobile.classList.remove(
                'block',
                'animate-menuCategoriaClose'
            );
            displayMenuMobile.classList.add('hidden');
            body.style.overflow = 'auto';
        }, 500);
    }
};
iconMenuMobile.addEventListener('click', openMenu);
iconMenuMobileClose.addEventListener('click', closeMenu);

// Menu TODAS AS CATEGORIAS
const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const currentLi = btn.closest('li');
        const subMenu = currentLi.querySelector('.subMenu');
        const iconSetaRight = btn.querySelectorAll('.iconSetaRight');
        const iconSetaLeft = btn.querySelectorAll('.iconSetaLeft');
        const isOpen = subMenu.classList.contains('flex');
        const allLis = document.querySelectorAll('ul > li');

        document.querySelectorAll('.subMenu').forEach((menu) => {
            if (menu !== subMenu && menu.classList.contains('flex')) {
                menu.classList.remove('flex', 'animate-menuCategoria');
                menu.classList.add('animate-menuCategoriaClose');

                setTimeout(() => {
                    menu.classList.add('hidden');
                    menu.classList.remove('animate-menuCategoriaClose');
                }, 500);
            }
        });

        document.querySelectorAll('.btn').forEach((b) => {
            b.classList.remove('text-[#005CFF]');
            b.querySelectorAll('.iconSetaRight').forEach((i) =>
                i.classList.remove('hidden')
            );
            b.querySelectorAll('.iconSetaLeft').forEach((i) =>
                i.classList.add('hidden')
            );
        });

        if (!isOpen) {
            allLis.forEach((li) => {
                if (li !== currentLi) {
                    li.classList.add('hidden');
                }
            });

            subMenu.classList.remove('hidden', 'animate-menuCategoriaClose');
            subMenu.classList.add('flex', 'animate-menuCategoria');

            iconSetaRight.forEach((i) => i.classList.add('hidden'));
            iconSetaLeft.forEach((i) => i.classList.remove('hidden'));

            btn.classList.add('text-[#005CFF]');
        } else {
            subMenu.classList.remove('animate-menuCategoria');
            subMenu.classList.add('animate-menuCategoriaClose');

            iconSetaRight.forEach((i) => i.classList.remove('hidden'));
            iconSetaLeft.forEach((i) => i.classList.add('hidden'));

            setTimeout(() => {
                subMenu.classList.remove('flex', 'animate-menuCategoriaClose');
                subMenu.classList.add('hidden');

                allLis.forEach((li) => {
                    li.classList.remove('hidden');
                });

                btn.classList.remove('text-[#005CFF]');
            }, 500);
        }
    });
});
