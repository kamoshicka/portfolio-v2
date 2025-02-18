'use strict';

// タブ
// タブ
// タブ
function GethashID(hashIDName) {
  if (hashIDName && hashIDName.startsWith('#')) {
    // 対象となるタブとエリアをアクティブにする
    var targetTab = $('#label-container label').find('a[href="' + hashIDName + '"]').parent();
    $('#label-container label').removeClass("active");
    $(targetTab).addClass("active");

    $(".area").removeClass("is-active");
    $(hashIDName).addClass("is-active");
  }
}

$(document).ready(function() {
  // 内部ナビゲーションリンクの処理
  $('a[href^="#"]').on("click", function(e) {
      e.preventDefault();
      var href = $(this).attr('href');
      GethashID(href);
  });

  // ページ読み込み時にハッシュを処理
  var hashName = location.hash;
  if (hashName && hashName.startsWith('#')) {
      GethashID(hashName);
  }

  // 外部リンクの処理
  $('a[href^="http://"], a[href^="https://"]').on("click", function(e) {
      // ここで何もしない場合は、このハンドラは実際には不要です。
      // 外部リンクのデフォルト動作を保証するためには、ここに何も記述しないか、明示的に return true; を記述します。
  });

  setupTabs();
});

function GethashID(hashIDName) {
  if (hashIDName && hashIDName.startsWith('#')) {
      var targetTab = $('#label-container label').find('a[href="' + hashIDName + '"]').parent();
      $('#label-container label').removeClass("active");
      $(targetTab).addClass("active");

      $(".area").removeClass("is-active");
      $(hashIDName).addClass("is-active");
  }
}

function setupTabs() {
  $('.tab a').each(function() {
      $(this).on('click', function(e) {
          e.preventDefault();
          var idName = $(this).attr('href');
          if (idName.startsWith('#')) {
              GethashID(idName);
              $('.area').removeClass('is-active');
              $(idName).addClass('is-active');
              $('.tab').removeClass('active');
              $(this).parent().addClass('active');
          }
      });
  });
}

  // タブのセットアップ
  // setupTabs();


function setupTabs() {
  $('.tab a').each(function() {
    $(this).on('click', function(e) {
      e.preventDefault();
      var idName = $(this).attr('href');
      if (idName.startsWith('#')) {
        GethashID(idName);
        $('.area').removeClass('is-active');
        $(idName).addClass('is-active');
        $('.tab').removeClass('active');
        $(this).parent().addClass('active');
      }
    });
  });


  activateTab('#skill');
  $('#label-container label:first-of-type').addClass("active");
  $('.area:first-of-type').addClass("is-active");
  var hashName = location.hash;
  GethashID(hashName);
}

$(document).ready(function() {
  setupTabs();
});



// カーソル
// カーソル
// カーソル
gsap.registerPlugin();

let cursor = $(".cursor"),
      follower = $(".follower"),
      cWidth = 8, 
      fWidth = 40, 
      delay = 8, 
      posX = 0, 
      posY = 0; 

let mouseX = 0, 
    mouseY = 0;

// マウスの動きに応じたアニメーション
gsap.ticker.add(() => {
  posX += (mouseX - posX) / delay;
  posY += (mouseY - posY) / delay;
  
  gsap.set(follower, {
    x: posX - (fWidth / 2),
    y: posY - (fWidth / 2)
  });
  
  gsap.set(cursor, {
    x: mouseX - (cWidth / 2),
    y: mouseY - (cWidth / 2)
  });
});

$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$("a").on({
  "mouseenter": function() {
    cursor.addClass("is-active-cursor");
    follower.addClass("is-active-cursor");
  },
  "mouseleave": function() {
    cursor.removeClass("is-active-cursor");
    follower.removeClass("is-active-cursor");
  }
});

$("a").on({
  "mouseenter": function() {
    cursor.addClass("is-active-cursor");
    follower.addClass("is-active-cursor");
  },
  "mouseleave": function() {
    cursor.removeClass("is-active-cursor");
    follower.removeClass("is-active-cursor");
  },
  "click": function() {
    // カーソルのサイズを2倍に拡大
    gsap.to(cursor, {
      duration: 1, 
      scale: 2, 
      ease: "power1.inOut", 
      onComplete: function() {
        // サイズ拡大アニメーション完了後に実行
        gsap.to(cursor, {
          duration: 1, 
          scale: 1,
          ease: "power1.inOut"
        });
      }
    });

    // フォロワーのサイズを2倍に拡大
    gsap.to(follower, {
      duration: .6,
      scale: 2, 
      ease: "power1.inOut",
      onComplete: function() {
        // サイズ拡大アニメーション完了後に実行
        gsap.to(follower, {
          duration: .6,
          scale: 1,
          ease: "power1.inOut" 
        });
      }
    });
  }
});

// 文字パラ
function EachTextAnimeControl() {
  $('.eachTextAnime').each(function() {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");
    } else {
      $(this).removeClass("appeartext");
    }
  });
}

// This function initializes text animations on load
function initTextAnimation() {
  $(".eachTextAnime").each(function() {
    var element = $(this);
    var html = element.html();
    var lines = html.split('<br>');
    var newHtml = lines.map(function(line) {
      var spans = line.split('').map(function(char, index) {
        var delay = index * 0.1;  // Delay increases by 0.1s for each character
        return '<span style="animation-delay:' + delay + 's;">' + char + '</span>';
      }).join('');
      return spans;
    }).join('<br>');  // Rejoin lines with <br> tags
    element.html(newHtml);
  });
}

// Run animations on scroll
$(window).scroll(EachTextAnimeControl);

// Initialize animations on load
$(window).on('load', function() {
  initTextAnimation();
  EachTextAnimeControl();
});
