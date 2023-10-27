<template>
    <main>
        <HeroPreview :imagePath="'src/assets/images/default-header-img.jpg'">
            <h1 class="title">наши тренеры</h1>
        </HeroPreview>
        <div v-if="isLoaded" class="section">
            <div class="container">
                <div class="user-cards">
                    <UserCardLink v-for="(trainer, index) in trainers" :key="trainer.id" :id="trainer.user_id"
                        :name="getName(trainer)" :title="trainer.title" :description="shortDescription(trainer)"
                        :imagePath="getImagePath(trainer.user)" />
                </div>
            </div>
        </div>
        <AppLoader v-else />
    </main>
</template>
  
<script>
import { ref, onMounted } from 'vue';

import AccessService from '@/services/AccessService';
import { getImagePath } from '@/services/utils.js';

export default {
    setup() {
        const trainers = ref([]);
        const isLoaded = ref(false);

        const shortDescription = (trainer) => {
            return trainer.user.description.slice(0, 170) + '...';
        };

        const getName = (trainer) => {
            return `${trainer.user.first_name} ${trainer.user.second_name}`;
        };

        onMounted(async () => {
            try {
                const response = await AccessService.public.getTrainersContent();
                trainers.value = response.data;
                isLoaded.value = true;
            } catch (error) {
                console.error(error);
            }
        });

        return {
            trainers,
            isLoaded,
            shortDescription,
            getImagePath,
            getName,
        };
    },
};
</script>
  