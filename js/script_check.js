"use strict";

$(function () {
  // Вход
  $('.reg-login').live('click', function () {
    $('#DialogLogin').load("/classes/Sibloma.php", {
      ajaxFormLogin: 'view'
    }, function () {
      $(this).dialog({
        height: 300,
        width: 500
      });
    });
  });
  $('.contact-popup-close3').live('click', function () {
    //$('#Dialog').dialog('close');
    //$('#DialogLogin').dialog('close');
    $('#Dialog3').dialog('close');
  });
  $('form#WRegFormLogin').live('submit', function (e) {
    e.preventDefault();
    $(this).find('input[name=email]').removeClass('border-color-red');
    $(this).find('input[name=password]').removeClass('border-color-red');
    var email = $(this).find('input[name=email]').val();
    var password = $(this).find('input[name=password]').val();

    if (email == '') {
      $(this).find('input[name=email]').addClass('border-color-red');
    }

    if (password == '') {
      $(this).find('input[name=password]').addClass('border-color-red');
    }

    if (email != '' && password != '') {
      $(this).parents('#DialogLogin').load("/classes/Sibloma.php", {
        loginForm: 'ajax',
        email: email,
        password: password
      }, function () {});
    }
  });
  $('a[id *= PriceCont]').click(function () {
    var descr_alias = $('#descr_alias').text();
    var descr_tmp_link = $('#descr_tmp_link').text();
    var descr_brand = $('#descr_brand').text();
    var descr_model = $('#descr_model').text();
    $('#Dialog2').load("/design/default/html/WContacts2.php", {
      descr_alias: descr_alias,
      descr_tmp_link: descr_tmp_link,
      descr_brand: descr_brand,
      descr_model: descr_model
    }, function () {
      $(this).dialog({
        height: 345,
        width: 630
      });
    });
  });
  $('.block_k a').click(function () {
    var ii = 0;
    $('.formlogin').is(function () {
      $('.formlogin').show();
      ii = 1;
    });

    if (ii == 1) {
      return false;
    } else {
      return true;
    }
  }); // Отправка формы
  //$('.wFilter').find('select').change(function(){SendForm($(this));});
  //$('.wFilter').find('input[type=checkbox]').change(function(){SendForm($(this));});

  function SendForm(field) {
    field.parents('form').submit();
  }

  setTimeout(function () {
    $('.success').hide();
  }, 3000);
  $('.link_js').click(function () {
    var link = $(this).data('href');
    window.location.replace("/" + link + "/");
  });
  if ($("a[rel^='prettyPhoto']").length > 0) {
    $("a[rel^='prettyPhoto']").prettyPhoto();
  }
  $('#Contact').click(function () {
    $('#Dialog').load("/design/default/html/WContacts.php", function () {
      $(this).dialog({
        height: 523,
        width: 630
      });
    });
    return false;
  });
  $('#Contact_dop').click(function () {
    $('#Dialog').load("/design/default/html/WContacts.php", function () {
      $(this).dialog({
        height: 523,
        width: 630
      });
    });
    return false;
  });
  $('#ContactCall').click(function () {
    $('#Dialog').load("/design/default/html/WContactCall.php", function () {
      $(this).dialog({
        height: 523,
        width: 630
      });
    });
    return false;
  });
  $('#ContactMail').click(function () {
    $('#Dialog').load("/design/default/html/WContactsInfoM.php", function () {
      $(this).dialog({
        height: 523,
        width: 630
      });
    });
    return false;
  });
  $('.contact-popup-close2').live('click', function () {
    //$('#Dialog').dialog('close');
    $('#Dialog2').dialog('close');
  });
  $('.contact-popup-close1').live('click', function () {
    $('#Dialog').dialog('close'); //$('#Dialog2').dialog('close');
  });
  $('.contact-popup-close3').live('click', function () {
    $('#Dialog3').dialog('close'); //$('#Dialog2').dialog('close');
  });


  /* Изменить пароль */

  $("#EditAccountPass").click(function () {
    $('div.accountPass').show();
    $(this).hide();
  });
  $("body").on("click", ".PredCont", function () {
    var descr_alias = $('#descr_alias').text();
    var descr_tmp_link = $('#descr_tmp_link').text();
    var descr_brand = $('#descr_brand').text();
    var descr_model = $('#descr_model').text();
    var descr_cat = $('#descr_cat').text();
    var descr_count = $('#qty-two').val();
    var descr_dn = $(".jq-selectbox__select-text").text();
    $('#Dialog3').load("/design/default/html/WContacts3.php", {
      descr_cat: descr_cat,
      descr_alias: descr_alias,
      descr_tmp_link: descr_tmp_link,
      descr_brand: descr_brand,
      descr_model: descr_model,
      descr_count: descr_count,
      descr_dn: descr_dn
    }, function () {
      $(this).dialog({
        height: 345,
        width: 630
      });
    });
  }); //----------------------------------------

  if ($("#main_cat_slider ul").length > 0) {
    $("#main_cat_slider ul").carouFredSel({
      circular: false,
      // infinite: false,
      width: "100%",
      height: 196,
      items: {
        width: 170,
        height: 196
      },
      scroll: {// items: 1,
        // fx: "cover-fade"
      },
      auto: false,
      prev: "#main_cat_slider .prev",
      next: "#main_cat_slider .next"
    }); 
  }

  if ($("#producer_slider > ul").length > 0) {
    $("#producer_slider > ul").carouFredSel({
      circular: false,
      infinite: false,
      width: 1001,
      height: "variable",
      items: {
        width: 1001,
        visible: 1
      },
      scroll: {
        items: 1
      },
      auto: false,
      pagination: {
        container: "#producer_slider .paginator",
        anchorBuilder: function anchorBuilder(nr) {
          return '<span></span>';
        }
      }
    }); 
  }



  //----------------------------------------

  /*    var videoLink = $("#video_list_slider a"),
          vln = $('.video-left-name'),
          vlm = $('.video-left-model'),
          vlimg = $('.video-left-bg img')
      vFrame = $('#frame'),
          vFrameLoader = $('#video_frame_loader')
        function callIframe(url, callback) {
          vFrame.attr('src', url);
          vFrame.load(function () {
              callback(this);
          });
      }*/
  //----------------------------------------

  /*    videoLink.click(function (event) {
          event.preventDefault();
          if (!$(this).hasClass('active')) {
              vFrame.hide();
              vFrameLoader.show();
              videoLink.removeClass('active').eq(videoLink.index(event.currentTarget)).addClass('active')
              vln.text($(event.currentTarget).find('.video-txt-type').text());
              vlm.text($(event.currentTarget).find('.video-txt-model').text());
              vlimg.attr('src', $(event.currentTarget).data('img-src'));
              callIframe($(event.currentTarget).attr('href'), function () {
                  vFrame.show();
                  vFrameLoader.hide();
              });
          }
          ;
      }).first().trigger('click');
       $('#video-play-btn').click(function (event) {
          event.preventDefault
          console.log('cl');
          vtl.fadeOut('slow');
          vpl.fadeIn();
          setTimeout(function () {
              jwplayer("video-player").play(true);
          }, 100);
       });*/
  //---------------------------------

  // if ($('.style-select select').length > 0) {
    // $('.style-select select').styler();
  // }
  // jwplayer("video-player").onComplete(function(){
  //  vtl.show();
  //  vpl.hide();
  // })
  // if ($(".checkbox-select select").length > 0) {
    $(".checkbox-select select").multiselect({
      selectedList: 3,
      minWidth: 190,
      // height: 'auto',
      header: false,
      noneSelectedText: 'Виберите параметр',
      checkAllText: 'Вибрать все',
      uncheckAllText: 'Убрать все'
    });  
  // }

  $(".checkbox-select  a").click(function (event) {
    event.preventDefault();
  }); //---------------------------------

  var tab_link = $('.tab-triger'),
      tab_cont = $('.tab-content-item');
  tab_link.click(function (event) {
    var ind = $(this).index();
    tab_link.removeClass('active').eq(ind).addClass('active');
    tab_cont.hide().eq(ind).show();
  }).first().click(); //---------------------------------

  $('.show-more').click(function (event) {
    event.preventDefault();
    $(event.currentTarget).prev('ul').find('.hide').slideDown();
    $(event.currentTarget).hide();
  }); //---------------------------------
  //$('.left-menu li.active').parents('ul').css('display','block');

  $('.left-menu li.active').parents('ul').parents('li').addClass('active');
  var leftFirstLinks = $(".left-menu > ul > li"),
      inUl = $(".left-menu ul ul");
  leftFirstLinks.click(function (event) {
    // console.log($(event.currentTarget).find('ul').length)
    if (!$(event.currentTarget).hasClass('active') && $(event.currentTarget).find('ul').length != 0) {
      event.preventDefault();
      leftFirstLinks.removeClass('active');
      inUl.slideUp();
      $(event.currentTarget).find('ul').slideDown();
      $(event.currentTarget).addClass('active');
    } else {
      if ($(event.currentTarget).hasClass('nofollow')) {
        event.preventDefault();
        $(event.currentTarget).find('ul').slideToggle();
        $(event.currentTarget).addClass('active');
      }
    }
  });
}); //end function
// Найти шаблон для отображения в поп-ап

var getTemplate = function getTemplate(cartBtnElem, templateSelector) {
  var template = $(cartBtnElem).siblings(templateSelector);
  return template;
}; 


function cartBtnMain(instance) {
  $($(instance.popper).find('.btn--main')).click(function() {
    instance.hide();
  })
}

//  Модалка корзины
var setCartTooltip = function setCartTooltip(btn) {
  var template = getTemplate(btn, '.tooltip--cart');

  if (template.length == 0) {
    template = getTemplate(btn, '.tooltip-empty');
  }

  if (template.length > 0) {
    var tooltipCartOpt = {
      content: template[0].innerHTML,
      theme: 'list',
      arrow: false,
      placement: 'bottom',
      allowHTML: true,
      trigger: 'click',
      // hideOnClick: false,
      interactive: true,
      maxWidth: document.documentElement.clientWidth > 480 ? '469px' : '320px',
      offset: [-105, 0],
      onMount(instance) {
        console.log('tooltip cart mounted');
        cartBtnMain(instance);
      }
    };
    tippy(btn, tooltipCartOpt);
  }
};

var setFavTooltip = function setFavTooltip(btn) {
  var template = getTemplate(btn, '.tooltip--favorite');

  if (template.length > 0) {
    var tooltipFavOpt = {
      content: template[0].innerHTML,
      theme: 'list',
      arrow: false,
      placement: 'bottom',
      allowHTML: true,
      trigger: 'click',
      // hideOnClick: false,
      interactive: true,
      maxWidth: document.documentElement.clientWidth > 480 ? '469px' : '320px',
      offset: [-45, 0]
    };
    tippy(btn, tooltipFavOpt);
  }
}; 



//мультиселект чекбоксы


$(document).ready(function () {
  console.log('ready');

  objectFitImages();

  var tooltipsCart = document.querySelectorAll('.has-tooltip--cart');

  for (var i = 0; i < tooltipsCart.length; i++) {
    setCartTooltip(tooltipsCart[i]);
  }


  var tooltipsFav = document.querySelectorAll('.has-tooltip--favorite');

  for (var _i = 0; _i < tooltipsFav.length; _i++) {
    setFavTooltip(tooltipsFav[_i]);
  }


  if ($("#video")[0] !== undefined) {
    $("#video")[0].load();
    $("#video > source").attr("src", $(".video-item.active").find('.video-url').text());
    $("#video").attr("poster", $(".video-item.active").find('.video-img').attr('src'));
  }

  $(".video-item").click(function (event) {
    event.stopPropagation();
    event.preventDefault();
    $("#video")[0].load();
    $('.top-slider-content > .left_block').css('opacity', '0');
    $('.top-slider-content > .center_block').css('opacity', '0');
    setTimeout(function () {
      $("#video > source").attr("src", $(this).find('.video-url').text());
      $("#video").attr("poster", $(this).find('.video-img').attr('src'));
      $('.video-left-bg img').attr("src", $(this).data('imgSrc'));
      var vtt = $(this).find('.video-item-txt-inner .video-txt-type').text();
      var vtm = $(this).find('.video-item-txt-inner .video-txt-model').text();
      $('.video-left-name').text(vtt);
      $('.video-left-model').text(vtm);
      $(".video-item").removeClass('active');
      $(this).addClass('active');
      $('.top-slider-content > .left_block').css('opacity', '1');
      $('.top-slider-content > .center_block').css('opacity', '1');
    }, 500);
  });
  $('.slide_top').click(function () {
    $('.slide_bott').show();
    var $block = $(this).parents('.right_block').find('.list');
    $block.find('.visible').first().prev().show();
    $block.find('.visible').first().prev().addClass('visible');
    $block.find('.visible').last().hide();
    $block.find('.visible').last().removeClass('visible');

    if ($block.find('.visible').first().prev().length == 0) {
      $(this).hide();
      $(this).parent().css('padding-top', '34px');
    }
  });
  $('.slide_bott').click(function () {
    $('.slide_top').show();
    $(this).parent().css('padding-top', '10px');
    var $block = $(this).parents('.right_block').find('.list');
    $block.find('.visible').last().next().show();
    $block.find('.visible').last().next().addClass('visible');
    $block.find('.visible').first().hide();
    $block.find('.visible').first().removeClass('visible');

    if ($block.find('.visible').last().next().length == 0) {
      $(this).hide();
    }
  });

  // if ($('header').width() == 300) {
  //   if ($(".top-sliders").length > 0) {
  //     $(".top-sliders").swipe({
  //       swipeRight: function swipeRight(event, direction) {
  //         $('.video-item.active').prev().click();
  //       }
  //     });
  //     $(".top-sliders").swipe({
  //       swipeLeft: function swipeLeft(event, direction) {
  //         $('.video-item.active').next().click();
  //       }
  //     });
  //   }
  // }

  $('.producer-block').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 1020,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  $('.category-wrp_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 1020,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
  /*    $(".for-play").click(function () {
          $("#video")[0].play();
      });
      $("#video").on("pause", function () {
          $(".for-play").show();
      });
      $("#video").on("loadstart", function () {
          $(".for-play").show();
      });
      $("#video").on("play", function () {
          $(".for-play").hide();
      });*/
  //Отправка формы фильтров
  //input number

  $('.qtydec').click(function () {
    var number = parseInt($(this).parent('.counter').find('.qty').val());

    if (number <= 1) {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      }
    } else {
      number -= 1;
      $(this).parent('.counter').find('.qty').val(number);

      if (number <= 1) {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
        }
      }
    }
  });
  $('.qtyinc').click(function () {
    var number = parseInt($(this).parent('.counter').find('.qty').val());
    number += 1;
    $(this).parent('.counter').find('.qty').val(number);

    if (number >= 2) {
      if (!$(this).parent('.counter').find('.qtydec').hasClass('active')) {
        $(this).parent('.counter').find('.qtydec').addClass('active');
      }
    }
  }); //input number end

  $('.submit_fform').bind('click', function () {
    url_old = "http://" + location.hostname + location.pathname;
    url = "";
    form = $(this).parents("form");
    form.find("select").each(function (i) {
      val = $(this).val();
      name = $(this).attr("name");

      if (val != "") {
        if (url == "") {
          url += "?" + name + "=" + val;
        } else {
          url += "&" + name + "=" + val;
        }
      }
    });
    form.find("input[type = \"checkbox\"]").each(function (i) {
      val = $(this).val();
      name = $(this).attr("name");

      if ($(this).is(":checked")) {
        if (url == "") {
          url += "?" + name + "=" + val;
        } else {
          url += "&" + name + "=" + val;
        }
      }
    });
    location.href = url_old + url;
  });
  $(".optionFilterList>div").click(function () {
    if ($(this).find("[type=checkbox]").is(':checked')) {
      $(this).find("[type=checkbox]").prop('checked', false);
    } else {
      $(this).find("[type=checkbox]").prop('checked', true);
    }
  });
  $('.customers_slider').slick({
    dots: false,
    autoplay: false,
    slidesToShow: 5,
    infinite: true,
    slidesToScroll: 4,
    variableWidth: true,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 1021,
      settings: {
        variableWidth: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false
      }
    }, {
      breakpoint: 768,
      settings: {
        variableWidth: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  if ($('.main-slider').length > 0) {
    var slider = tns({
      container: '.main-slider',
      items: 1,
      slideBy: 1,
      autoplay: false,
      edgePadding: 0,
      fixedWidth: false,
      loop: true,
      center: true,
      nav: false,
      prevButton: '.main-slider-prev',
      nextButton: '.main-slider-next',
      responsive: {
        1021: {
          fixedWidth: 480,
          edgePadding: 334
        }
      }
    });
  }

  $('.produkt-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    fade: true,
    asNavFor: '.produkt-slider-nav'
  });
  $('.produkt-slider-nav').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.produkt-slider-for',
    arrows: true,
    dots: false,
    infinite: true,
    centerMode: false,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1140,
      settings: {
        vertical: false,
        verticalSwiping: false,
        arrows: true,
        slidesToShow: 5
      }
    }, {
      breakpoint: 1021,
      settings: {
        vertical: false,
        verticalSwiping: false,
        arrows: true,
        slidesToShow: 4
      }
    }, {
      breakpoint: 768,
      settings: {
        vertical: false,
        verticalSwiping: false,
        arrows: true,
        slidesToShow: 3
      }
    }]
  }); // Сортировка в фильтре

  $('#f_sort').on('change', function () {
    $("#inp_sort_place").val($(this).find(":selected").val());
  }); //Сделать слайдер длиннее

  $('.produkt-slider-nav-more').click(function () {
    $('.produkt-slider-nav').slick('slickSetOption', 'slidesToShow', '5', true);
    $(this).hide();
    $('.produkt-slider-nav .slick-prev').css({
      opacity: '1',
      width: '15px',
      height: '15px'
    });
    $('.produkt-slider-nav .slick-next').css({
      opacity: '1',
      width: '15px',
      height: '15px'
    });
  });

  if ($('.content ').width() == 300) {
    $('.left-bar').hide(300);
  }

  $('.media_left_menu_btn').click(function () {
    $('.aside-menu').toggle(300);
  });
  $('.red_menu_media').click(function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $('.top-sliders').hide();
      $('.content').hide();
      $('footer').hide();
      $('.media_menu_block').show();
    } else {
      $(this).removeClass('active');
      $('.top-sliders').show();
      $('.content').show();
      $('footer').show();
      $('.media_menu_block').hide();
    }
  });
  $(".right_red_menu").click(function (e) {
    e.stopPropagation();
    $('.menu-open-block').removeClass('active');

    if ($(this).children('.drop_block').hasClass('active')) {
      if (!$(".drop_block").find(e.target).length) {
        $(".right_red_menu").find('.drop_block').removeClass('active');
      }
    } else {
      $(".right_red_menu").find('.drop_block').removeClass('active');
      $(this).children('.drop_block').addClass('active');
    }

    $(document).click(function (e) {
      if (!$(".right_red_menu").find(e.target).length) {
        $(".right_red_menu").find('.drop_block').removeClass('active');
      }
    });
  });
  $('.red_menu').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(".right_red_menu").find('.drop_block').removeClass('active');

    if ($('.menu-open-block').hasClass('active')) {
      $('.menu-open-block').removeClass('active');
    } else {
      $('.menu-open-block').addClass('active');
    }

    $(document).click(function (e) {
      if (!$(".for_red_menu").find(e.target).length) {
        $('.menu-open-block').removeClass('active');
      }
    });
  }); //Показать больше. Фильтр диаметр.

  $('.filter-values .btn--show-all').click(function (event) {
    var parent = $(this).closest('.filter-values');

    if (!$(parent).hasClass('show-all')) {
      $(parent).addClass('show-all');
    }

    var parent = $(this).closest('.category-filter-form');

    if (!$(parent).hasClass('show-all')) {
      $(parent).addClass('show-all');
    }
  }); //Скрыть. Фильтр диаметр.

  $('.filter-values .btn--hide').click(function (event) {
    var parent = $(this).closest('.filter-values');
    $(parent).removeClass('show-all');
  }); //Переключение видв списка каталога

  $('.category-products-btns .btn').click(function (event) {
    var containerClass = $(this).data('container');
    var container = $('.' + containerClass);
    container.removeAttr('class');
    container.addClass(containerClass);
    container.addClass($(this).data('class'));
  }); //Запуск и остановка видео в слайдере на гланой

  function onPlay(video) {
    console.log('onPlay');
    $(video).addClass('playing');
  }

  function onStop(video) {
    $(video).removeClass('playing');
    var videoEl = $(video).find('video');
    $(videoEl)[0].controls = false;
  }

  var slides = $('.main-slider-item');

  if (slides.length > 0) {
    slides.each(function (i, slide) {
      var video = $(slide).find('.main-slider-video');
      var playBtn = $(slide).find(".main-slider-play");
      $(playBtn).click(function (event) {
        console.log('playBtn on click');
        playVideo(video);
      });
      $(video).find('video')[0].addEventListener('pause', function () {
        onStop(video);
      });
      $(video).find('video')[0].addEventListener('ended', function () {
        onStop(video);
      });
      $(video).find('video')[0].addEventListener('play', function () {
        onPlay(video);
      });
      $(video).find('video')[0].addEventListener('playing', function () {
        onPlay(video);
      });
    });

    function playVideo(video) {
      console.log('playVideo');
      var videoEl = $(video).find('video');

      if ($(videoEl).length > 0) {
        $(videoEl)[0].play();
        $(videoEl)[0].controls = true;
      }
    }

    function pauseVideo(video) {
      console.log('pauseVideo');
      var videoEl = $(video).find('video');

      if ($(videoEl).length > 0) {
        $(videoEl)[0].pause();
        $(videoEl)[0].controls = false;
      }
    }

    var customizedFunction = function customizedFunction(info, eventName) {
      // direct access to info object
      console.log(info.event.type, info.container);
      var slides = $('.main-slider-item');

      if (slides.length > 0) {
        var video;
        slides.each(function (i, slide) {
          console.log(video);
          video = $(slide).find('.main-slider-video');
          pauseVideo(video);
        });
      }
    }; // bind function to event


    slider.events.on('transitionStart', customizedFunction);
  }
  /*END*/

});

function init() {
  document._video = document.getElementById("video");
}

document.addEventListener("DOMContentLoaded", init, false);

function switchVideo(n) {
  if (n >= videos.length) n = 0;
  var mp4 = document.getElementById("mp4");
  var parent = mp4.parentNode;

  document._video.setAttribute("poster", videos[n][0]);

  mp4.setAttribute("src", videos[n][1]);

  document._video.load();
}

$(".for-play").click(function () {
  $(".for-play").hide();
}); //Выбор региона

function show_reg_sel() {
  if ($(".header-reg-bl-sel").css("display") == 'none') {
    $(".header-reg-bl-sel").css("display", "block"); //$(".header-reg-bl-a").text("Скрыть");
  } else {
    $(".header-reg-bl-sel").css("display", "none"); //$(".header-reg-bl-a").text("Изменить");
  }

  return false;
}

var showAlert = function showAlert(text) {
  console.log('showAlert');
  var alert = $('footer').before('<div class="alert alert--product">' + text + '<button type="button" class="close">&times;</button></div>');
  setTimeout(function() {$(document.querySelector('.alert--product')).remove();}, 2000);
  $('.alert .close').click(function () {
    $(this).closest('.alert').remove();
  });

};

var loadFunc = function loadFunc() {
  var tooltipsCart = document.querySelectorAll('.has-tooltip--cart');

  for (var i = 0; i < tooltipsCart.length; i++) {
    setCartTooltip(tooltipsCart[i]);
  }
};

$('.add-to-compare').live('click', function () {
  var variant = $(this).data("id");
  var desc = $(this).data("name");

  if (variant > 0) {
    $('#CompareInfo').load("/classes/ajax/AjaxUpdate.php", {
      update: 'compare',
      id: variant
    }, function (response, status, xhr) {
      $('.btn--compare .action-amount').text(parseInt($('.btn--compare .action-amount').text()) + 1);

      if (status == "success") {
        showAlert('Товар <b>' + desc + '</b> добавлен в сравнение.');
      }
    });
  }
});

$('.add-to-cart').live('click', function () {
  var desc = $(this).data("name");

  var variant = $(this).data("id");

  if (variant > 0) {
    var amount = 1;
    var type = "";
    var price = "По запросу";

    if ($("*").is(".dn_select" + variant)) {
      type = $(".dn_select" + variant).find(":selected").text();
    }

    if ($("*").is(".qty-two" + variant)) {
      amount = $(".qty-two" + variant).val();
    }

    if ($("*").is(".price" + variant)) {
      price = $(".price" + variant).text();
    }

    $('#CartInfo').load("/classes/Sibloma.php", {
      ajaxCart: 'ok',
      variant: variant,
      amounts: amount,
      type: type,
      price: price
    }, function (response, status, xhr) {
      if (status == "success") {
        loadFunc();
        showAlert('Товар <b>' + desc + '</b> добавлен в корзину.');
      }
    });
  }
});

function add_to_fav(id, btn) {
  var desc = $(btn).data("name");
  jQuery.ajax({
    url: "/?module=favorite&par=add",
    type: "POST",
    data: {
      id: id
    },
    success: function success(response) {
      loadFunc();
      showAlert('Товар <b>' + desc + '</b> добавлен в избранное.');
      $("#count-fav-prod").text(response);
    }
  });
}