<template>
    <main>
        <HeroPreview :imagePath="'src/assets/images/default-header-img.jpg'">
            <h1 class="title">Тренировки</h1>
        </HeroPreview>
        <section v-if="isLoaded" class="section workout-series">
            <div class="container">
                <div class="img-cards-block">
                    <ImageCard v-for="(workout, index) in nearestWorkouts" :key="index" :imagePath="getImagePath(workout)"
                        :class="{ 'img-card--reverse': index % 2 === 1 }">
                        <template #content>
                            <h1 class="subtitle section-subtitle">{{ workout.title }}</h1>
                            <p class="text">{{ workout.description }}</p>
                            <div class="workout-card__additional-info">
                                <div class="workout-card__additional-info-column">
                                    <p>{{ formattedDate(workout.start_date) }}</p>
                                    <p>{{ formattedTime(workout.start_date, workout.end_date) }}</p>
                                </div>
                                <div class="workout-card__additional-info-column">
                                    <p>Тренер: тренер</p>
                                    <p>{{ workout.price }}</p>
                                </div>
                            </div>
                            <button class="text-button img-card__button" @click="signUpForTraining(workout)">{{
                                buttonText(workout) }}</button>
                        </template>
                    </ImageCard>
                </div>
            </div>
        </section>
        <AppLoader v-else />
    </main>
</template>
  
<script>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

import AccessService from '@/services/AccessService';
import { useUserStore } from '@/stores/UserStore';
import { getImagePath } from '@/services/utils.js';

export default {
    setup() {
        const userStore = useUserStore();

        const workouts = ref([]);
        const isLoaded = ref(false);
        const message = ref('');

        const nearestWorkouts = computed(() => {
            const now = new Date();
            const futureWorkouts = workouts.value.filter(
                (workout) => new Date(workout.start_date) > now
            );
            return futureWorkouts
                .sort((a, b) => new Date(a.start_date) - new Date(b.start_date))
                .slice(0, 4);
        });

        const isUserRegistered = computed(() => (workout) => {
            return workout.clients.some(client => client.user_id === userStore.userId);
        });

        const buttonText = computed(() => (workout) => {
            return isUserRegistered.value(workout) ? "Вы записаны" : "Записаться";
        });

        const formattedDate = computed(() => (date) => {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(date).toLocaleDateString('ru-RU', options);
        });

        const formattedTime = computed(() => (startTime, endTime) => {
            const start = new Date(startTime).toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit',
            });
            const end = new Date(endTime).toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit',
            });

            return `${start} - ${end}`;
        });

        const loadWorkouts = async () => {
            try {
                const response = await AccessService.public.getWorkoutContent()
                workouts.value = response.data;
                isLoaded.value = true;
            } catch (error) {
                throw error
            }
        };

        const signUpForTraining = async (workout) => {
            try {
                if (isUserRegistered.value(workout)) {
                    await axios.delete(`${import.meta.env.V_SERVER_API_URL}/workout-registrations`, {
                        data: {
                            userId: userStore.userId,
                            workoutId: workout.id
                        }
                    });
                } else {
                    await axios.post(`${import.meta.env.V_SERVER_API_URL}/workout-registrations/sign-up`, {
                        userId: userStore.userId,
                        workoutId: workout.id
                    });
                }
                loadWorkouts();
            } catch (error) {
                console.error(error);
                message.value = (error.response && error.response.data.message) || error.message || error.toString();
                window.alert(message.value);
            }
        };

        onMounted(async () => {
            try {
                await loadWorkouts();
            } catch (error) {
                console.error(error);
                message.value = (error.response && error.response.data.message) || error.message || error.toString();
                window.alert(message.value);
            }
        });

        return {
            isLoaded,
            nearestWorkouts,
            buttonText,
            formattedDate,
            formattedTime,
            signUpForTraining,
            getImagePath
        };
    },
};
</script>