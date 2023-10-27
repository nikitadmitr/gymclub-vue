<template>
    <div>
        <h2 class="subtitle section-title">Стать членом клуба</h2>
        <div class="tariffs__buttons">
            <div class="tariff__button">
                <input type="radio" id="tariff-button-vip" name="tariff-button" value="vip" v-model="selectedTariff">
                <label class="text-button" for="tariff-button-vip">VIP</label>
            </div>
            <div class="tariff__button">
                <input type="radio" id="tariff-button-premium" name="tariff-button" value="premium"
                    v-model="selectedTariff">
                <label class="text-button" for="tariff-button-premium">Премиум</label>
            </div>
            <div class="tariff__button">
                <input type="radio" id="tariff-button-base" name="tariff-button" value="base" v-model="selectedTariff">
                <label class="text-button" for="tariff-button-base">Базовый</label>
            </div>
        </div>
        <div class="tariffs__cards">
            <div class="tariffs__card" :class="{ 'tariffs__card--active': selectedTariff === 'vip' }">
                <div class="tariffs__card-content">
                    <div class="tariffs__card-header">
                        <h4>VIP<span>-50%</span></h4>
                    </div>
                    <div class="tariffs__card-price">
                        <p class="tariffs__card-old-price">35000</p>
                        <p class="tariffs__card-new-price">17500</p>
                    </div>
                    <ul class="tariffs__card-list">
                        <li class="tariffs__card-list-item tariffs__card-list-item--included">12 месяцев</li>
                        <li class="tariffs__card-list-item tariffs__card-list-item--included">Групповые занятия</li>
                        <li class="tariffs__card-list-item tariffs__card-list-item--included">12 бесплатных тренировок с
                            тренером</li>
                        <li class="tariffs__card-list-item tariffs__card-list-item--included">Посещение 24/7</li>
                    </ul>
                    <input class="tariffs__card-button text-button" type="button" value="Купить">
                </div>
            </div>
            <div class="tariffs__card" :class="{ 'tariffs__card--active': selectedTariff === 'premium' }">
                <div class="tariffs__card-content">
                    <div class="tariffs__card-header">
                        <h4>Премиум<span>-40%</span></h4>
                    </div>
                    <div class="tariffs__card-price">
                        <p class="tariffs__card-old-price">20000</p>
                        <p class="tariffs__card-new-price">12000</p>
                    </div>
                    <ul class="tariffs__card-list">
                        <li class="tariffs__card-list-item tariffs__card-list-item--included">6 месяцев</li>
                        <li class="tariffs__card-list-item tariffs__card-list-item--included">Групповые занятия</li>
                        <li class="tariffs__card-list-item tariffs__card-list-item--included">6 бесплатных тренировок с
                            тренером</li>
                        <li class="tariffs__card-list-item tariffs__card-list-item--not-included">Посещение ночью</li>
                    </ul>
                    <input class="tariffs__card-button text-button" type="button" value="Купить">
                </div>
            </div>
            <div class="tariffs__card" :class="{ 'tariffs__card--active': selectedTariff === 'base' }">
                <div class="tariffs__card-content">
                    <div class="tariffs__card-header">
                        <h4>Базовый</h4>
                    </div>
                    <div class="tariffs__card-price">
                        <p class="tariffs__card-new-price">7000</p>
                    </div>
                    <ul class="tariffs__card-list">
                        <li class="tariffs__card-list-item tariffs__card-list-item--included">1 месяц</li>
                        <li class="tariffs__card-list-item tariffs__card-list-item--included">3 бесплатных тренировки с
                            тренером</li>
                        <li class="tariffs__card-list-item tariffs__card-list-item--not-included">Групповые занятия</li>
                        <li class="tariffs__card-list-item tariffs__card-list-item--not-included">Посещение 24/7 </li>
                    </ul>
                    <input class="tariffs__card-button text-button" type="button" value="Купить">
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            selectedTariff: 'premium'
        };
    }
};
</script>
  