jQuery(document).ready(function($) {
    $('#masonaryWrap').pinterest_grid({
        no_columns: 2,
        padding_x: 10,
        padding_y: 10,
        margin_bottom: 50,
        single_column_breakpoint: 700
    });
    $('.scrollToTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return !1
    });
    $(".blogHeading h2 a .splitext").slabText();
    setTimeout(function() {
        $(".blogHeading h2 a .splitext").slabText()
    }, 3000);
    $(window).scroll(function() {
        if ($(".malinky-ajax-pagination-loading").is(':visible')) {
            $(".blogHeading h2 a .splitext").slabText();
            setTimeout(function() {
                $(".blogHeading h2 a .splitext").slabText()
            }, 3000)
        }
    })
    $('#trigger-overlay').click(function() {
        $(this).toggleClass('triggerActive');
        $('.overlay').toggleClass('overlayActive')
    });
    $(function() {
        $('.smothLink').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return !1
                }
            }
        })
    });
    ////////////////////////
    // fluid slider/////////
    ////////////////////////
    var navcurrentSelect = $('.processNav .slideHeilited'),
        processCurrentSelect = $('.processSlider .heighlited'),
        currentIndex = processCurrentSelect.next().length,
        navcurrentIndex = navcurrentSelect.next().length,
        navitems = $('.processNav .slidecontent'),
        navitemAmt = navitems.length,
        items = $('.processSlider .slide'),
        itemAmt = items.length;

    function cycleItems() {
        var item = $('.processSlider .slide').eq(currentIndex);
        items.removeClass('heighlited');
        item.addClass('heighlited');
        var navitem = $('.processNav .slidecontent').eq(navcurrentIndex);
        navitems.removeClass('slideHeilited');
        navitem.addClass('slideHeilited')
    }
    var autoSlide = function() {
        currentIndex += 1;
        if (currentIndex > itemAmt - 1) {
            currentIndex = 0
        }
        navcurrentIndex += 1;
        if (navcurrentIndex > navitemAmt - 1) {
            navcurrentIndex = 0
        }
        cycleItems()
    };
    setInterval(autoSlide, 3000);
    $('.processNav span.next-nav.navBtn').click(function() {
        clearInterval(autoSlide);
        currentIndex += 1;
        if (currentIndex > itemAmt - 1) {
            currentIndex = 0
        }
        navcurrentIndex += 1;
        if (navcurrentIndex > navitemAmt - 1) {
            navcurrentIndex = 0
        }
        cycleItems()
    });
    $('.processNav span.prev-nav.navBtn').click(function() {
        clearInterval(autoSlide);
        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = itemAmt - 1
        }
        navcurrentIndex -= 1;
        if (navcurrentIndex < 0) {
            navcurrentIndex = navitemAmt - 1
        }
        cycleItems()
    });
    var owl = $('.partnerwrap');
    owl.owlCarousel({
        items: 1,
        loop: !0,
        margin: 0,
        nav: !0,
        autoplay: !1,
        autoplayTimeout: 1000,
        autoplayHoverPause: !0
    });
    $('.mainLogo').addClass('hidden-fade').viewportChecker({
        classToAdd: 'visible-fade animated bounceInRight',
        classToAddForFullView: 'full-visible',
        classToRemove: 'hidden-fade',
        removeClassAfterAnimation: !1,
        offset: 0,
        invertBottomOffset: !0,
        repeat: !1,
    });
    $('.pagebannercontent').addClass('hidden-fade').viewportChecker({
        classToAdd: 'visible-fade animated bounceInUp',
        classToAddForFullView: 'full-visible',
        classToRemove: 'hidden-fade',
        removeClassAfterAnimation: !1,
        offset: 0,
        invertBottomOffset: !0,
        repeat: !1,
    });
    if ($(window).width() > 767) {
        $('.about-section, .aboutsecondfold, .aboutthirdfold, .about-teamSection').addClass('hidden-fade').viewportChecker({
            classToAdd: 'visible-fade animated fadeIn',
            classToAddForFullView: 'full-visible',
            classToRemove: 'hidden-fade',
            removeClassAfterAnimation: !1,
            offset: 100,
            invertBottomOffset: !0,
            repeat: !1,
        });
        $('.porfolioGrid').addClass('hidden-fade').viewportChecker({
            classToAdd: 'visible-fade animated fadeInUp',
            classToAddForFullView: 'full-visible',
            classToRemove: 'hidden-fade',
            removeClassAfterAnimation: !1,
            offset: 200,
            invertBottomOffset: !0,
            repeat: !1,
        });
        $(window).resize(function() {
            controller.triggerCheckAnim()
        });
        var controller = $.superscrollorama();
        var tl = new TimelineMax();
        var scrollDuration = 200;
        controller.addTween('.section.section.aboutSection', TweenMax.from($('.cup'), 0.8, {
            css: {
                left: '100px',
                opacity: '0',
                smoothOrigin: !0
            }
        }), 100);
        controller.addTween('.cup', TweenMax.from($('.cupimage .nut1'), 1, {
            css: {
                top: '-130px',
                smoothOrigin: !0
            }
        }), 180);
        controller.addTween('.cup', TweenMax.from($('.cupimage .nut2'), 0.6, {
            css: {
                top: '-130px',
                smoothOrigin: !0
            }
        }), 120);
        controller.addTween('.cup', TweenMax.from($('.cupimage .nut3'), 2, {
            css: {
                top: '-130px',
                smoothOrigin: !0
            }
        }), 80);
        controller.addTween('.about-section', TweenMax.from($('.aboutsecondfold .plan'), 2, {
            css: {
                left: '-50%',
                smoothOrigin: !0
            }
        }), 600);
        controller.addTween('#page-wrapper.contact.us-wrapper', TweenMax.from($('#page-wrapper.contact.us-wrapper'), 4, {
            css: {
                backgroundPosition: '100% -30px',
                smoothOrigin: !0
            }
        }), 600);
        controller.pin($('.serviceSection .container'), 5000, {
            anim: (new TimelineLite()).append([TweenMax.to($('.innerScroll'), 0, {
                css: {
                    top: '0%'
                }
            }), TweenMax.to($('#serviceid1 .icon'), 0, {
                css: {
                    scale: '1'
                }
            }), TweenMax.to($('.bullet1'), 0, {
                css: {
                    background: '#c85488'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceid2 .icon'), 0, {
                css: {
                    scale: '0.7'
                }
            }), TweenMax.to($('#serviceid3 .icon'), 0, {
                css: {
                    scale: '0.5'
                }
            }), TweenMax.to($('#serviceid4 .icon'), 0, {
                css: {
                    scale: '0.4'
                }
            }), TweenMax.to($('#serviceid5 .icon'), 0, {
                css: {
                    scale: '0.2'
                }
            }), TweenMax.to($('#serviceid1 .icon .whiteImg'), 0, {
                css: {
                    opacity: '1'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceid1 .icon .grayImg'), 0, {
                css: {
                    opacity: '0'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceid1 .icon .iconinner'), 0, {
                css: {
                    background: '#43f49a'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceContent1 .service-content'), 0, {
                css: {
                    opacity: '1',
                    zIndex: '1'
                },
                ease: Quad.easeInOut
            }), ]).append([TweenMax.to($('.innerScroll'), 3, {
                css: {
                    top: '-25%'
                }
            }), TweenMax.to($('#serviceContent1 .service-content'), 3, {
                css: {
                    opacity: '1'
                },
                ease: Quad.easeInOut
            }), ]).append([TweenMax.to($('.innerScroll'), 3, {
                css: {
                    top: '-35%'
                }
            }), TweenMax.to($('#serviceContent1 .service-content'), 3, {
                css: {
                    opacity: '0'
                },
                ease: Quad.easeInOut
            }), ]).append([TweenMax.to($('.innerScroll'), 3, {
                css: {
                    top: '-40%'
                }
            }), TweenMax.to($('#serviceid2 .icon'), 3, {
                css: {
                    scale: '1'
                }
            }), TweenMax.to($('.processbullet span'), 3, {
                css: {
                    background: '#242227'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('.bullet2'), 3, {
                css: {
                    background: '#c85488'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceid3 .icon'), 3, {
                css: {
                    scale: '0.7'
                }
            }), TweenMax.to($('#serviceid4 .icon'), 3, {
                css: {
                    scale: '0.5'
                }
            }), TweenMax.to($('#serviceid5 .icon'), 3, {
                css: {
                    scale: '0.4'
                }
            }), TweenMax.to($('#serviceid2 .icon .whiteImg'), 3, {
                css: {
                    opacity: '1'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceid2 .icon .grayImg'), 3, {
                css: {
                    opacity: '0'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceid2 .icon .iconinner'), 3, {
                css: {
                    background: '#43f49a'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceContent2 .service-content'), 3, {
                css: {
                    opacity: '1',
                    zIndex: '1'
                },
                ease: Quad.easeInOut
            }), ]).append([TweenMax.to($('.innerScroll'), 3, {
                css: {
                    top: '-65%'
                }
            }), ]).append([TweenMax.to($('.innerScroll'), 3, {
                css: {
                    top: '-75%'
                }
            }), TweenMax.to($('#serviceContent2 .service-content'), 3, {
                css: {
                    opacity: '0'
                },
                ease: Quad.easeInOut
            }), ]).append([TweenMax.to($('.innerScroll'), 3, {
                css: {
                    top: '-86%'
                }
            }), TweenMax.to($('#serviceid3 .icon'), 3, {
                css: {
                    scale: '1'
                }
            }), TweenMax.to($('.processbullet span'), 3, {
                css: {
                    background: '#242227'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('.bullet3'), 3, {
                css: {
                    background: '#c85488'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceid4 .icon'), 3, {
                css: {
                    scale: '0.7'
                }
            }), TweenMax.to($('#serviceid5 .icon'), 3, {
                css: {
                    scale: '0.5'
                }
            }), TweenMax.to($('#serviceid3 .icon .whiteImg'), 3, {
                css: {
                    opacity: '1'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceid3 .icon .grayImg'), 3, {
                css: {
                    opacity: '0'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceid3 .icon .iconinner'), 3, {
                css: {
                    background: '#43f49a'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceContent3 .service-content'), 3, {
                css: {
                    opacity: '1',
                    zIndex: '1'
                },
                ease: Quad.easeInOut
            }), ]).append([TweenMax.to($('.innerScroll'), 3, {
                css: {
                    top: '-95%'
                }
            }), ]).append([TweenMax.to($('.innerScroll'), 3, {
                css: {
                    top: '-106%'
                }
            }), TweenMax.to($('#serviceContent3 .service-content'), 3, {
                css: {
                    opacity: '0'
                },
                ease: Quad.easeInOut
            }), ]).append([TweenMax.to($('.innerScroll'), 3, {
                css: {
                    top: '-132%'
                }
            }), TweenMax.to($('#serviceid4 .icon'), 3, {
                css: {
                    scale: '1'
                }
            }), TweenMax.to($('.processbullet span'), 3, {
                css: {
                    background: '#242227'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('.bullet4'), 3, {
                css: {
                    background: '#c85488'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceid4 .icon .whiteImg'), 3, {
                css: {
                    opacity: '1'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceid4 .icon .grayImg'), 3, {
                css: {
                    opacity: '0'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceid4 .icon .iconinner'), 3, {
                css: {
                    background: '#43f49a'
                },
                ease: Quad.easeInOut
            }), TweenMax.to($('#serviceContent4 .service-content'), 3, {
                css: {
                    opacity: '1',
                    zIndex: '1'
                },
                ease: Quad.easeInOut
            }), ])
        })
    }
    jQuery('.featured_Blog_Post').owlCarousel({
        items: 1,
        lazyLoad: !0,
        loop: !0,
        margin: 0,
        autoplay: !0,
        nav: !1,
        autoHeight: !0
    })
});
var trigger = 0
var autoTriggre = 0
jQuery(document).ready(function($) {
    $('.featuredPortfolio img').load(function() {});
    $('.featuredPortfolio').owlCarousel({
        margin: 30,
        loop: !0,
        autoWidth: !0,
        items: 4,
        nav: !0,
        autoHeight: !0
    });
    jQuery(".porfolioGrid a, .pageBanner figure.portfolio .overlayeffect .btn").click(function(e) {
        e.preventDefault();
        if (trigger == 0) {
            jQuery("#portfoliocontainer").hide(function() {
                jQuery(".portfoliodetailContainer").show("slow")
            });
            url = jQuery(this).attr("href");
            getContent(url);
            return !1
        } else {
            jQuery(".portfoliodetailContainer").hide("slow");
            jQuery("#portfoliocontainer").show("slow");
            trigger = 0;
            return !1
        }
    });
    if (window.location.href.indexOf("?id") > -1) {
        if (autoTriggre == 0) {
            jQuery("#portfoliocontainer").hide(function() {
                jQuery(".portfoliodetailContainer").show("slow")
            });
            url = jQuery("#portfolioId").attr("data-Url");
            getContent(url);
            return !1
        } else {
            jQuery(".portfoliodetailContainer").hide("slow");
            jQuery("#portfoliocontainer").show("slow");
            autoTriggre = 1;
            return !1
        }
    }
});
jQuery(document).ajaxStart(function($) {});
jQuery(document).ajaxSuccess(function($) {
    jQuery("a.project-slider-prev, a.project-slider-next").click(function($) {
        url = jQuery(this).attr("href");
        getContent(url);
        jQuery(".portfoliodetailContainer").blur();
        return !1
    });
    jQuery('.portfolioSider').owlCarousel({
        items: 1,
        lazyLoad: !0,
        loop: !0,
        margin: 0,
        autoplay: !0,
        nav: !1,
        autoHeight: !0
    });
    jQuery(".project-slider-close ").click(function($) {
        jQuery(".portfoliodetailContainer").hide(function() {
            jQuery("#portfoliocontainer").show("slow")
        });
        trigger = 0;
        return !1
    })
})

function getContent(url) {
    $('html, body').animate({
        scrollTop: $("#portfolioScroll").offset().top
    }, 2000);
    jQuery(".portfoliodetailContainer").addClass('loading');
    jQuery.ajax({
        url: url,
        dataType: "html",
        success: function(html) {
            jQuery(".portfoliodetailContainer").html(html).fadeIn();
            jQuery(".portfoliodetailContainer").removeClass('loading')
        }
    })
}
