// ==============navigation menu================= 
const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeMenu");
const navigation = document.querySelector("#navigation");


menuIcon.addEventListener("click", () => {
    navigation.style.top = "0";
});
closeIcon.addEventListener("click", () => {
    navigation.style.top = "-100%"
});


// =========================billing =============== 

 const options = document.querySelectorAll('.billing-option');

        options.forEach(option => {
            option.addEventListener('click', () => {
                // Remove active class from all
                options.forEach(opt => opt.classList.remove('active'));

                // Add active class to clicked one
                option.classList.add('active');
            });
        });


// =======================image container========= 
const resultImg = document.querySelectorAll('.result-img')

resultImg.forEach(img => {
    img.addEventListener("click", () => {
        removeClass (resultImg);
        img.classList.add('show-img')
    })
});
function removeClass (resultImg){
    resultImg.forEach(img => {
        img.classList.remove("show-img")
    })
};

// ========================ask ================= 

  const faqContent = document.querySelectorAll('.faq-content');

faqContent.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    })
});



