<template>
    <YandexMap class="yandex-map" :zoom="mapZoom" :behaviors="mapBehaviors" :settings="mapSettings"
        :coordinates="mapCoordinates" @created="onCreate">
    </YandexMap>
</template>

<script>
import $ from 'jquery';
import { YandexMap } from 'vue-yandex-maps'

export default {
    components: { YandexMap },
    data() {
        return {
            mapSettings: {
                apiKey: '8f635098-748f-4f02-9166-ae45819f8141',
                lang: 'ru_RU',
                coordorder: 'latlong',
                debug: false,
                version: '2.1',
                onload: 'test'
            },
            mapCoordinates: [55.712477, 37.476842],
            mapBehaviors: ['drag', 'multiTouch'],
            mapZoom: 13,
            isScrollEnabled: false
        }
    },
    methods: {
        onCreate(map) {
            const MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="popover">' +
                '<div class="popover-arrow"></div>' +
                '<div class="popover-inner">' +
                '$[[options.contentLayout observeSize minWidth=235 maxWidth=500 maxHeight=700]]' +
                '</div>' +
                '</div>', {
                build: function () {
                    this.constructor.superclass.build.call(this);

                    this._$element = $('.popover', this.getParentElement());

                    this.applyElementOffset();
                },

                clear: function () {
                    this.constructor.superclass.clear.call(this);
                },

                onSublayoutSizeChange: function () {
                    MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

                    if (!this._isElement(this._$element)) {
                        return;
                    }

                    this.applyElementOffset();

                    this.events.fire('shapechange');
                },

                applyElementOffset: function () {
                    this._$element.css({
                        left: -(this._$element[0].offsetWidth / 2),
                        top: -(this._$element[0].offsetHeight + this._$element.find('.popover-arrow')[0].offsetHeight)
                    });
                },

                getShape: function () {
                    if (!this._isElement(this._$element)) {
                        return MyBalloonLayout.superclass.getShape.call(this);
                    }

                    const position = this._$element.position();

                    return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                        [position.left, position.top], [
                            position.left + this._$element[0].offsetWidth,
                            position.top + this._$element[0].offsetHeight + this._$element.find('.popover-arrow')[0].offsetHeight
                        ]
                    ]));
                },

                _isElement: function (element) {
                    return element && element[0] && element.find('.popover-arrow')[0];
                }
            })

            let MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="popover-content">$[properties.balloonContent]</div>'
            )

            let myPlacemark = window.myPlacemark = new ymaps.Placemark(map.getCenter(), {
                balloonContent: '<ul class="popover-list">' +
                    '<li class="popover-list-item">Будни: 10.00 - 24.00</li>' +
                    '<li class="popover-list-item">Выходные: 10.00 - 23.00</li></ul>'
            }, {
                balloonShadow: false,
                balloonLayout: MyBalloonLayout,
                balloonContentLayout: MyBalloonContentLayout,
                balloonPanelMaxMapArea: 0,
                iconLayout: 'default#imageWithContent',
                iconImageHref: 'src/assets/icons/yandex-map-marker.svg',
                iconImageSize: [36, 36],
                iconImageOffset: [-18, -18],
                balloonOffset: [0, -5],
                hideIconOnBalloonOpen: false,
            });


            map.geoObjects.add(myPlacemark);
            myPlacemark.balloon.open()



            map.events.add('actiontick', () => {
                if (!this.isScrollEnabled) {
                    this.isScrollEnabled = true;
                    map.behaviors.enable('scrollZoom');
                }
            });
        }
    },
}
</script>