

const arrayOfClass =
 [{
    className :'sunglasses',
    classImage : 'image/home card 3.avif'
},{
    className : 'powered glasses',
    classImage : 'image/home card 2.avif'
},{
    className : ' Designer Brands',
    classImage : 'image/home card 4.avif'
},{
     className : 'Transitions',
     classImage : 'image/home card 5.avif'
},{
    className : 'blue Light',
    classImage : 'image/home card 6.avif'
}]

let wrapper =document.getElementById('wrapper')
 arrayOfClass.map(({className,classImage})=> {
    wrapper.innerHTML +=`
    <div class="card " style="width: 10rem;  margin: 1.5rem; "  >
  <img src="${classImage}" class="card-img-top" alt="image"  >
  <div class="card-body"style=; >
    <p class="card-text center">${className}</p>
  </div>
</div>` 
 }
)
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:15,
  nav:false,
  dots:false,
  stagepadding:50,
  responsive:{
      0:{
          items:1.6
      },
      600:{
          items:3.6
      },
      1000:{
          items:1.6
      }
  }
});
$('.owl-slide ').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:false,
    autoplayTime:2000,
    stagepadding:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
  });
//   $(document).ready(function() {
 
//     $("#owl-demo").owlCarousel({
//       navigation : true,
//       padding:0,
//       responsive:{
//         0:{
//             items:1.5
//         },
//         600:{
//             items:3.5
//         },
//         1000:{
//             items:4.5
//         }
//       }
//     });
   
//   });
  
$(document).ready(function() {
    var owl = $("#owl-demo").owlCarousel({
      navigation: false, // Hide default navigation
      padding: 0,
      responsive: {
        0: {
          items: 1.5
        },
        600: {
          items: 3.5
        },
        1000: {
          items: 4.5
        }
      }
    });
  
    // Custom navigation buttons
    $(".prev-btn").click(function() {
      owl.trigger("prev.owl.carousel");
    });
  
    $(".next-btn").click(function() {
      owl.trigger("next.owl.carousel");
    });
  });
  $(".prev").click(function() {
    owl.trigger("prev.owl.carousel");
  });

  $(".next").click(function() {
    owl.trigger("next.owl.carousel");
  });