define(['jquery', 'com/carousel', 'com/gotop', 'com/waterfall'],
    function($, Carousel, GoTop, WaterFall) {
        Carousel.init($('.wrapper'));
        new GoTop();
        new WaterFall();
    }
);