
// menu iphone 

let navbar = document.querySelector(".navbar");
let isMenuVisible = false;

document.querySelector("#menu-btn").onclick = () => {
    isMenuVisible = !isMenuVisible; // Đảo ngược trạng thái hiển thị menu
    navbar.classList.toggle("active", isMenuVisible); // Thêm hoặc loại bỏ lớp active dựa trên trạng thái hiện tại của menu
}

document.addEventListener('click', (event) => {
    const isClickInsideMenu = navbar.contains(event.target); // Kiểm tra xem sự kiện click có xảy ra trong menu không
    const isClickInsideToggleBtn = document.querySelector("#menu-btn").contains(event.target); // Kiểm tra xem sự kiện click có xảy ra trong nút toggle không
    if (!isClickInsideMenu && !isClickInsideToggleBtn) {
        isMenuVisible = false; // Nếu click không xảy ra trong menu hoặc nút toggle, ẩn menu
        navbar.classList.remove('active');
    }
});


//cart item 
let cartItem = document.querySelector(".cart-item-container");
let isMenuVisible1 = false;

document.querySelector("#cart-btn").onclick = () => {
    isMenuVisible1 = !isMenuVisible1; // Đảo ngược trạng thái hiển thị cart item
    cartItem.classList.toggle("active", isMenuVisible1); // Thêm hoặc loại bỏ lớp active dựa trên trạng thái hiện tại của cart item
}

document.addEventListener('click', (event) => {
    const isClickInsideMenu1 = cartItem.contains(event.target); // Kiểm tra xem sự kiện click có xảy ra trong cart item không
    const isClickInsideToggleBtn1 = document.querySelector("#cart-btn").contains(event.target); // Kiểm tra xem sự kiện click có xảy ra trong nút toggle không
    if (!isClickInsideMenu1 && !isClickInsideToggleBtn1) {
        isMenuVisible1 = false; // Nếu click không xảy ra trong cart item hoặc nút toggle, ẩn cart item
        cartItem.classList.remove('active');
    }
});



// back to top

//   window.onscroll = function(){scrollFuntion()};

// function scrollFuntion(){
//    if(document.body.scrollTop > 20 || document.documentElement > 20){
//       document.getElementById("to-top").style.display = "block";
//      }
//      else{
//         document.getElementById("to-top").style.display = "none";

//      }
//  }

// document.getElementById("to-top").onclick = function(){
//     document.body.scrollTop = 0;
//      document.documentElement.scrollTop = 0;
//  }