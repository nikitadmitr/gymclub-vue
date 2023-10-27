<template>
    <main>
        <HeroPreview :imagePath="'src/assets/images/default-header-img.jpg'">
            <h1 class="title">админ</h1>
        </HeroPreview>
        <div class="section">
            <div class="container">
                <p v-if="!isAdmin" class="access-message">
                    У вас недостаточно прав
                </p>
                <div v-else>
                    <p>Информация для админа</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/UserStore';

import AccessService from '@/services/AccessService'

export default {
    setup() {
        const isAdmin = useUserStore().isAdmin;
        const content = ref('');

        const fetchData = async () => {
            try {
                const response = await AccessService.admin.getClientsContent();
                content.value = response.data;
            } catch (error) {
                console.error(error);
            }
        };

        onMounted(fetchData);

        return {
            isAdmin,
            content,
        };
    },
}
</script>