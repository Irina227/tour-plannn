$(document).ready(() => {
    const hotelSlider = new Swiper('.hotel-slider', {
        // Optional parameters
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.hotel-slider__button--next',
            prevEl: '.hotel-slider__button--prev',
        },
        keyboard: {
            enabled: true,
        },
        effect: "coverflow",
    });

    const reviewsSlider = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.reviews-slider__button--next',
            prevEl: '.reviews-slider__button--prev',
        },
        keyboard: {
            enabled: true,
        },
    });


    var menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", function() {
        document
            .querySelector(".navbar-button")
            .classList.toggle("navbar-button--visible");
    });

    let modalButton = $("[data-toggle=modal]");
    let closeModalButton = $(".modal__close");
    let maskModal = $(".modal__overlay");
    modalButton.on("click", openModal);
    closeModalButton.on("click", closeModal);
    maskModal.on("click", closeModal);

    function openModal() {
        const modalOverlay = $(".modal__overlay");
        const modalDialog = $(".modal__dialog");
        const overflowHidden = $("body");
        modalOverlay.addClass("modal__overlay--visible");
        modalDialog.addClass("modal__dialog--visible");
        overflowHidden.addClass("overflow-hidden");
    }

    function closeModal(event) {
        event.preventDefault();
        const modalOverlay = $(".modal__overlay");
        const modalDialog = $(".modal__dialog");
        const overflowHidden = $("body");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
        overflowHidden.removeClass("overflow-hidden");
    }

    $(document).keyup(function(event) {
        if (event.key === "Escape" || event.keyCode === 27) {
            event.preventDefault();
            const modalOverlay = $(".modal__overlay");
            const modalDialog = $(".modal__dialog");
            const overflowHidden = $("body");
            modalOverlay.removeClass("modal__overlay--visible");
            modalDialog.removeClass("modal__dialog--visible");
            overflowHidden.removeClass("overflow-hidden");
        }
    });

    $(".form").each(function() {
        $(this).validate({
            errorClass: "invalid",
            rules: {
                phone: {
                    minlength: 18,
                },
            },
            messages: {
                name: {
                    required: "Please enter your name",
                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format name@domain.com",
                },
                phone: {
                    required: "Please, fill the number field",
                    minlength: "Please, fill full phone number",
                },
            },
        });
    });

    $(".phone").mask("+7 (999) 999-99-99");


    AOS.init();

    $(function() {
        $(".lazy").lazy();
    });


    let mapLoaded = false;

    $(".map").mousemove(function(e) {
        if (mapLoaded == false) {
            $(".map__google").append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25228.630595201408!2d-122.43470986132685!3d37.77647271983485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb10ed6d9b5050fa5!2sTwitter!5e0!3m2!1sru!2sby!4v1596692683745!5m2!1sru!2sby" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" class="map__google"></iframe>');
            mapLoaded = true
        };
    });
});