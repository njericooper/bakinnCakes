/**
 * @function      Include
 * @description   Includes an external scripts to the page
 * @param         {string} scriptUrl
 */
function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}


/**
 * @function      Include
 * @description   Lazy script initialization
 */
function lazyInit(element, func) {
    var $win = jQuery(window),
        wh = $win.height();

    $win.on('load scroll', function () {
        var st = $(this).scrollTop();
        if (!element.hasClass('lazy-loaded')) {
            var et = element.offset().top,
                eb = element.offset().top + element.outerHeight();
            if (st + wh > et - 100 && st < eb + 100) {
                func.call();
                element.addClass('lazy-loaded');
            }
        }
    });
}

/**
 * @function      isIE
 * @description   checks if browser is an IE
 * @returns       {number} IE Version
 */
function isIE() {
    var myNav = navigator.userAgent.toLowerCase(),
        msie = (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;

    if (!msie) {
        return (myNav.indexOf('trident') != -1) ? 11 : ( (myNav.indexOf('edge') != -1) ? 12 : false);
    }

    return msie;
};

/**
 * @module       IE Fall&Polyfill
 * @description  Adds some loosing functionality to old IE browsers
 */
;
(function ($) {
    var ieVersion = isIE();

    if (ieVersion === 12) {
        $('html').addClass('ie-edge');
    }

    if (ieVersion === 11) {
        $('html').addClass('ie-11');
    }

    if (ieVersion && ieVersion < 11) {
        $('html').addClass('lt-ie11');
        $(document).ready(function () {
            PointerEventsPolyfill.initialize({});
        });
    }

    if (ieVersion && ieVersion < 10) {
        $('html').addClass('lt-ie10');
    }
})(jQuery);


/**
 * @module       Copyright
 * @description  Evaluates the copyright year
 */
;
(function ($) {
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);


/**
 * @module       WOW Animation
 * @description  Enables scroll animation on the page
 */
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop') && o.hasClass("wow-animation") && $(".wow").length) {
        $(document).ready(function () {
            new WOW().init();
        });
    }
})(jQuery);


/**
 * @module       ToTop
 * @description  Enables ToTop Plugin
 */
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {

        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'ui-to-top fa fa-angle-up'
            });
        });
    }
})(jQuery);

/**
 * @module       Responsive Tabs
 * @description  Enables Easy Responsive Tabs Plugin
 */
;
(function ($) {
    var o = $('.responsive-tabs');
    if (o.length > 0) {
        $(document).ready(function () {
            o.each(function () {
                var $this = $(this);
                $this.easyResponsiveTabs({
                    type: $this.attr("data-type") === "accordion" ? "accordion" : "default"
                });
            })
        });
    }
})(jQuery);

/**
 * @module       RD Mailform
 * @description  Enables RD Mailform Plugin
 */
;
(function ($) {
    var o = $('.rd-mailform');
    if (o.length > 0) {
        $(document).ready(function () {
            var o = $('.rd-mailform');

            if (o.length) {
                o.rdMailForm({
                    validator: {
                        'constraints': {
                            '@LettersOnly': {
                                message: 'Please use only letters.'
                            },
                            '@NumbersOnly': {
                                message: 'Please use only numbers.'
                            },
                            '@NotEmpty': {
                                message: 'This field should not be empty.'
                            },
                            '@Email': {
                                message: 'Enter valid e-mail address.'
                            },
                            '@Phone': {
                                message: 'Enter valid phone number.'
                            },
                            '@Date': {
                                message: 'Use MM/DD/YYYY format.'
                            },
                            '@SelectRequired': {
                                message: 'Please choose an option.'
                            }
                        }
                    }
                }, {
                    'MF000': 'Sent',
                    'MF001': 'Recipients are not set.',
                    'MF002': 'Form will not work locally.',
                    'MF003': 'Please define email field in your form.',
                    'MF004': 'Please define the type of your form.',
                    'MF254': 'Something went wrong with PHPMailer.',
                    'MF255': 'There was an error submitting the form.'
                });
            }
        });
    }
})(jQuery);

/**
 * @module       RD Google Map
 * @description  Enables RD Google Map Plugin
 */
;
(function ($) {
    var o = $('#google-map');

    if (o.length) {
        include('//maps.google.com/maps/api/js');
        $(document).ready(function () {
            var head = document.getElementsByTagName('head')[0],
                insertBefore = head.insertBefore;

            head.insertBefore = function (newElement, referenceElement) {
                if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') != -1 || newElement.innerHTML.indexOf('gm-style') != -1) {
                    return;
                }
                insertBefore.call(head, newElement, referenceElement);
            };

            lazyInit(o, function () {
                o.googleMap({
                    styles:[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
                });
            });
        });
    }
})(jQuery);

/**
 * @module       RD Navbar
 * @description  Enables RD Navbar Plugin
 */
;
(function ($) {
    var o = $('.rd-navbar');
    if (o.length > 0) {
        $(document).ready(function () {
            o.RDNavbar({
                stuckWidth: 768,
                stuckMorph: true,
                stuckLayout: "rd-navbar-static",
                responsive: {
                    0: {
                        layout: 'rd-navbar-fixed',
                        focusOnHover: false
                    },
                    768: {
                        layout: 'rd-navbar-fullwidth'
                    },
                    1200: {
                        layout: o.attr("data-rd-navbar-lg").split(" ")[0],
                    }
                },
                onepage: {
                    enable: false,
                    offset: 0,
                    speed: 400
                }
            });
        });
    }
})(jQuery);



/**
 * @module       RD Search
 * @description  Enables RD Search Plugin
 */
;
(function ($) {
    var o = $('.rd-navbar-search');
    if (o.length) {
        $(document).ready(function () {
            o.RDSearch({});
        });
    }
})(jQuery);

/**
 * @module       Swiper Slider
 * @description  Enables Swiper Plugin
 */
;
(function ($, undefined) {
    var o = $(".swiper-slider");
    if (o.length) {
        function getSwiperHeight(object, attr) {
            var val = object.attr("data-" + attr),
                dim;

            if (!val) {
                return undefined;
            }

            dim = val.match(/(px)|(%)|(vh)$/i);

            if (dim.length) {
                switch (dim[0]) {
                    case "px":
                        return parseFloat(val);
                    case "vh":
                        return $(window).height() * (parseFloat(val) / 100);
                    case "%":
                        return object.width() * (parseFloat(val) / 100);
                }
            } else {
                return undefined;
            }
        }

        function toggleSwiperInnerVideos(swiper) {
            var videos;

            $.grep(swiper.slides, function (element, index) {
                var $slide = $(element),
                    video;

                if (index === swiper.activeIndex) {
                    videos = $slide.find("video");
                    if (videos.length) {
                        videos.get(0).play();
                    }
                } else {
                    $slide.find("video").each(function () {
                        this.pause();
                    });
                }
            });
        }

        function toggleSwiperCaptionAnimation(swiper) {
            if (isIE() && isIE() < 10) {
                return;
            }

            var prevSlide = $(swiper.container),
                nextSlide = $(swiper.slides[swiper.activeIndex]);

            prevSlide
                .find("[data-caption-animate]")
                .each(function () {
                    var $this = $(this);
                    $this
                        .removeClass("animated")
                        .removeClass($this.attr("data-caption-animate"))
                        .addClass("not-animated");
                });

            nextSlide
                .find("[data-caption-animate]")
                .each(function () {
                    var $this = $(this),
                        delay = $this.attr("data-caption-delay");

                    setTimeout(function () {
                        $this
                            .removeClass("not-animated")
                            .addClass($this.attr("data-caption-animate"))
                            .addClass("animated");
                    }, delay ? parseInt(delay) : 0);
                });
        }

        $(document).ready(function () {
            o.each(function () {
                var s = $(this);

                var pag = s.find(".swiper-pagination"),
                    next = s.find(".swiper-button-next"),
                    prev = s.find(".swiper-button-prev"),
                    bar = s.find(".swiper-scrollbar"),
                    h = getSwiperHeight(o, "height"), mh = getSwiperHeight(o, "min-height");
                s.find(".swiper-slide")
                    .each(function () {
                        var $this = $(this),
                            url;
                        if (url = $this.attr("data-slide-bg")) {
                            $this.css({
                                "background-image": "url(" + url + ")",
                                "background-size": "cover"
                            })
                        }
                    })
                    .end()
                    .find("[data-caption-animate]")
                    .addClass("not-animated")
                    .end()
                    .swiper({
                        autoplay: s.attr('data-autoplay') ? s.attr('data-autoplay') === "false" ? undefined : s.attr('data-autoplay') : 5000,
                        direction: s.attr('data-direction') ? s.attr('data-direction') : "horizontal",
                        effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide",
                        speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600,
                        keyboardControl: s.attr('data-keyboard') === "true",
                        mousewheelControl: s.attr('data-mousewheel') === "true",
                        mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true",
                        nextButton: next.length ? next.get(0) : null,
                        prevButton: prev.length ? prev.get(0) : null,
                        pagination: pag.length ? pag.get(0) : null,
                        paginationClickable: pag.length ? pag.attr("data-clickable") !== "false" : false,
                        paginationBulletRender: pag.length ? pag.attr("data-index-bullet") === "true" ? function (index, className) {
                            return '<span class="' + className + '">' + (index + 1) + '</span>';
                        } : null : null,
                        scrollbar: bar.length ? bar.get(0) : null,
                        scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : true,
                        scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : false,
                        loop: s.attr('data-loop') !== "false",
                        onTransitionStart: function (swiper) {
                            toggleSwiperInnerVideos(swiper);
                        },
                        onTransitionEnd: function (swiper) {
                            toggleSwiperCaptionAnimation(swiper);
                        },
                        onInit: function (swiper) {
                            toggleSwiperInnerVideos(swiper);
                            toggleSwiperCaptionAnimation(swiper);

                            var o = $(swiper.container).find('.rd-parallax');
                            if (o.length && window.RDParallax) {
                                o.RDParallax({
                                    layerDirection: ($('html').hasClass("smoothscroll") || $('html').hasClass("smoothscroll-all")) && !isIE() ? "normal" : "inverse"
                                });
                            }
                        }
                    });

                $(window)
                    .on("resize", function () {
                        var mh = getSwiperHeight(s, "min-height"),
                            h = getSwiperHeight(s, "height");
                        if (h) {
                            s.css("height", mh ? mh > h ? mh : h : h);
                        }
                    })
                    .load(function () {
                        s.find("video").each(function () {
                            if (!$(this).parents(".swiper-slide-active").length) {
                                this.pause();
                            }
                        });
                    })
                    .trigger("resize");
            });
        });
    }
})(jQuery);

/**
 * @module       RD Parallax 3
 * @description  Enables RD Parallax 3 Plugin
 */
;
(function ($) {
    var o = $('.rd-parallax');
    if (o.length) {
        $(document).ready(function () {
            $.RDParallax();
        });
    }
})(jQuery);
