<template>
    <footer class="section footer section-mt">
        <div class="container">
            <div class="footer__content">
                <div class="footer__basic-info">
                    <div class="footer__logo">
                        <MainLogoIcon />
                    </div>
                    <div class="footer__basic-info-text">
                        GymClub - ваш путь к здоровью и фитнесу. Мы предлагаем индивидуальный подход, профессиональные
                        тренеры и разнообразные программы тренировок. Свяжитесь с нами сегодня и начните свой путь к лучшей
                        версии себя!
                    </div>
                </div>
                <div class="footer__links">
                    <div class="footer__links-content">
                        <div class="footer__contacts">
                            <div class="footer__contacts-column">
                                <a href="tel:+79775461130" class="footer__info-item-block footer__phone">Телефон: +7 (977)
                                    546 11-30</a>
                                <a href="mailto:gymclub@gmail.com" class="footer__info-item-block footer__email">Электронная
                                    почта:
                                    gymclub@gmail.com</a>
                            </div>
                            <div class="footer__contacts-column">
                                <div class="footer__socials">
                                    <a href="#!" class="icon-button footer__socials-button">
                                        <FacebookIcon />
                                    </a>
                                    <a href="#!" class="icon-button footer__socials-button">
                                        <YoutubeIcon />
                                    </a>
                                    <a href="#!" class="icon-button footer__socials-button">
                                        <PinterestIcon />
                                    </a>
                                    <a href="#!" class="icon-button footer__socials-button">
                                        <VkontakteIcon />
                                    </a>
                                    <a href="#!" class="icon-button footer__socials-button">
                                        <InstagramIcon />
                                    </a>
                                </div>
                                <p class="footer__info-item-block footer__address">Адрес: ул. Спортивная, 10, г. Москва</p>
                            </div>
                        </div>
                        <div class="footer__nav">
                            <a class="footer__nav-link" href="#!">Условия использования</a>
                            <a class="footer__nav-link" href="#!">Политика конфиденциальности</a>
                            <a class="footer__nav-link" href="#!">Отказ от ответственности</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import MainLogoIcon from '@/assets/icons/MainLogoIcon.vue'
import FacebookIcon from '@/assets/icons/FacebookIcon.vue'
import YoutubeIcon from '@/assets/icons/YoutubeIcon.vue'
import PinterestIcon from '@/assets/icons/PinterestIcon.vue'
import VkontakteIcon from '@/assets/icons/VkontakteIcon.vue'
import InstagramIcon from '@/assets/icons/InstagramIcon.vue'


export default {
    components: {
        MainLogoIcon,
        FacebookIcon,
        YoutubeIcon,
        PinterestIcon,
        VkontakteIcon,
        InstagramIcon
    }
}
</script>