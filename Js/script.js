$('.first-carousel').owlCarousel({
    loop:false,
    // nav:true,
    dots:false,
    
    responsive:{
        0:{
            items:4
        },
        600:{
            items:6
        },
        1000:{
            items:10
        }
    }
}) // owl carousel özellikleri ve responsive

$('.second-carousel').owlCarousel({
    loop:false,
    // nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// ! fixed buton

const fixed = document.querySelector('.fixed');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100){
        fixed.classList.add("active")
    }else{
        fixed.classList.remove("active")
    }
})


// ! sidebar icon değiştirme

function font() { 
    const i = document.querySelector(".fa-chevron-down")
    
    i.classList.add("fa-chevron-up")
    i.classList.remove("fa-chevron-down")
 }

// ! Favorilere ekle



// function favori() { 
//     const favorim = document.querySelector(".favori-ekle")
//     favorim.remove()
    
//     const card = document.querySelector(".card")
//     const favoriler = document.querySelector(".favoriler")

//     favoriler.appendChild(card)

//  }

// ! Giriş yap
 function Uye(){
    $(".uye").addClass("d-block");
    $(".uye").removeClass("d-none");
   $(".giris").addClass("d-none");

  $(".btn1").css({
    "background-color": "#F2F2F2",
    "border-bottom":"1px solid #e6e6e6",
    "color":"black",
  });
  $(".btn2").css({
    "background-color": "#fff",
    "color": "#f27b1b",
    "border":"1px solid #e6e6e6",
    "border-bottom":0,
  });
 }

 function giris() { 
    $(".giris").addClass("d-block");
    $(".giris").removeClass("d-none");
   $(".uye").addClass("d-none");

   $(".btn2").css({
    "background-color": "#F2F2F2",
    "border-bottom":"1px solid #e6e6e6",
    "color":"black",
  });
  $(".btn1").css({
    "background-color": "#fff",
    "color": "#f27b1b",
    "border":"1px solid #e6e6e6",
    "border-bottom":0,
  });
  }
