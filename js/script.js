// 화면 사이즈가 바뀔 때 값을 다시 정의 필요
// 화면 사이즈(960px)보다 작으면 일정 스크립트들은 작동하지 않게 수정 필요

// 1️⃣ PC인지 mobile 사이즈인지 정하기
function setting_pcMobile() {
  let ww = $(window).width();
  if (ww > 960) {
    $("html").removeClass("mobile");
    $("html").addClass("PC");
  } else {
    $("html").removeClass("PC");
    $("html").addClass("mobile");
  }
}

// 2️⃣ PC일 때 들어가는 설정들
function setting_pc() {
  if ($("html").hasClass("PC")) {
    // ⭐⭐ 자바스크립트로 삽입한 설정 ⭐⭐
    let header = document.querySelector("#header");
    let header_nav = document.querySelector(".header_nav");
    let header_navline = document.querySelector(".header_navline");
    let depth_01 = document.querySelector(".depth_01");
    let depth_02 = document.querySelectorAll(".depth_02");

    let minHeight = parseInt(getComputedStyle(depth_01).height);
    let maxHeight = 0;
    let depth_02_height = 0;

    // 초기 설정
    header_nav.style.height = `${minHeight}px`;
    header_navline.style.bottom = `-${minHeight}px`;
    document.querySelector("#section").style.marginTop = `${minHeight}px`;

    // 최대 높이 계산
    // 인라인 스타일이 아니면 getAttribute로 안 가져와져서 getComputedStyle 을 사용
    for (let i = 0; i < depth_02.length; i++) {
      // 여기서는 parseInt를 사용해야 숫자로 최대값을 구할 수 있었음
      depth_02_height = parseInt(getComputedStyle(depth_02[i]).height);
      if (depth_02_height > maxHeight) {
        // 2024.01.26 (금) - 64_배열array 메서드 중 최대값or최소값 구하는 문제 활용
        maxHeight = depth_02_height;
      }
    }

    // 모든 depth_02에 최대 높이 적용 (유사배열이라 forEach 사용)
    depth_02.forEach(function (value, index) {
      // 숫자로 값을 받아오면 뒤에 px 단위 삽입
      value.style.height = `${maxHeight + 15}px`;
    });

    // 표준이벤트모델 (depth_01에 마우스를 올리거나 내릴 때)
    depth_01.addEventListener("mouseover", function () {
      header_nav.style.height = `${maxHeight + minHeight + 15}px`;
      header.classList.add("active");
      document.querySelector(".blackbox").classList.add("active");
    });

    depth_01.addEventListener("mouseleave", function () {
      document.querySelector(".header_nav").style.height = `${minHeight}px`;
      header.classList.remove("active");
      document.querySelector(".blackbox").classList.remove("active");
    });

    document.querySelector(".shortcutsbox_bt a").onclick = function () {
      document.querySelector(".shortcutsbox").classList.toggle("active");
    };
  }
}

// 3️⃣ pc일 때, popup창 설정
function setting_pcPopup() {
  // ☀️자바스크립트방식☀️
  // let popupbox = document.querySelector(".popupbox");
  // let popupimage = document.querySelectorAll(".popupbox img");

  // popupbox.onclick = function () {
  //     popupimage.forEach(function (value, index) {
  //         value.setAttribute("src", "./image/event_go0" + (index + 1) + ".png");
  //         value.classList.add("passive");
  //     });
  // };

  // ☀️제이쿼리방식☀️
  $(".popupbox .slick-list").on("click", function () {
    $(".popupbox").toggleClass("passive");
    if ($(".popupbox").hasClass("passive")) {
      for (let i = 0; i < $(".popupbox img").length; i++) {
        $(".popupbox img")
          .eq(i)
          .attr("src", `./image/event_go0${i + 1}.png`);
      }
    } else {
      for (let i = 0; i < $(".popupbox img").length; i++) {
        $(".popupbox img")
          .eq(i)
          .attr("src", `./image/right_banner0${i + 1}.png`);
      }
    }
  });

  $(".popupbox .close").on("click", function () {
    $(".popupbox").hide();
  });
}

// 4️⃣ 세로높이 설정 (pc, mobile 둘 다)
function setting_introductionCard() {
  $(".cardbox_02>li").height($(".cardbox_02>li").width());
  $(".cardbox_02_slide_a").height($(".cardbox_02>li").width());

  if ($(window).width() <= 520) {
    $(".cardbox_02>li").height($(".cardbox_02>li").width() / 2);
    $(".cardbox_02>li:last-child").height($(".cardbox_02>li").width());
  }
}

// 5️⃣ mobile 설정
function setting_mobile() {
  if ($("html").hasClass("mobile")) {
    $("#section").css({ marginTop: $("#header").height() });

    $(".menuopen > a").on("click", function () {
      $("#header").toggleClass("active");
      $("#header").children(".header_nav").slideToggle();
      $(".blackbox").toggleClass("active");
    });
    $(".header_nav_mainmenu").on("click", function () {
      // $(this).children().toggleClass("active");
      // $(this).siblings().children().removeClass("active");

      // $(this).addClass("active").siblings().removeClass("active");
      // 위의 방식을 사용하면, 자기 자신을 클릭했을 때에도 여전히 active가 남아있어서 아래의 방식으로 수정
      $(this).toggleClass("active").siblings().removeClass("active");

      $(this).children(".depth_02").stop().slideToggle();
      $(this).siblings().children(".depth_02").slideUp();
    });
  }
}

setting_pcMobile();
setting_pc();
setting_pcPopup();
setting_introductionCard();
setting_mobile();
