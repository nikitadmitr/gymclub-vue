<template>
    <div>
        <h2 class="subtitle section-title">создатели</h2>
        <div class="about-us-creators__cards user-cards">
            <SimpleUserCard v-for="creator in creators" :key="creator.name" :user="creator" />
        </div>
    </div>
</template>
  
<script>
import { markRaw } from 'vue'

import VkontakteIcon from '@/assets/icons/VkontakteIcon.vue'
import InstagramIcon from '@/assets/icons/InstagramIcon.vue'
import FacebookIcon from '@/assets/icons/FacebookIcon.vue'

export default {
    data() {
        return {
            creators: [
                {
                    name: "Никита Дмитриев",
                    title: "Создатель и дизайнер",
                    imageSrc: "src/assets/images/person-img1.jpg",
                    socialLinks: [
                        { url: "#!", iconComponent: markRaw(VkontakteIcon) },
                        { url: "#!", iconComponent: markRaw(InstagramIcon) },
                        { url: "#!", iconComponent: markRaw(FacebookIcon) },
                    ]
                },
                {
                    name: "Никита Дмитриев",
                    title: "Front-end разработчик",
                    imageSrc: "src/assets/images/person-img2.jpg",
                    socialLinks: [
                        { url: "#!", iconComponent: markRaw(VkontakteIcon) },
                        { url: "#!", iconComponent: markRaw(InstagramIcon) },
                        { url: "#!", iconComponent: markRaw(FacebookIcon) }
                    ]
                },
                {
                    name: "Никита Дмитриев",
                    title: "Back-end разработчик",
                    imageSrc: "src/assets/images/person-img3.jpg",
                    socialLinks: [
                        { url: "#!", iconComponent: markRaw(VkontakteIcon) },
                        { url: "#!", iconComponent: markRaw(InstagramIcon) },
                        { url: "#!", iconComponent: markRaw(FacebookIcon) }
                    ]
                }
            ]
        }
    }
}
</script>
