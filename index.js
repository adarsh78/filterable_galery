const btn = document.querySelectorAll("button");
const logoDesign = document.querySelectorAll(".logoDesign")
const mobileDesign = document.querySelectorAll(".mobileDesign")
const webDesign = document.querySelectorAll(".webDesign")
const allImages = document.querySelectorAll(".img")


for(var i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function() {

        if(this.classList.contains("logo")){
            logoDesign.forEach(function(element) {
                element.style.display = "block";
            });
            mobileDesign.forEach(function(element) {
                element.style.display = "none";
            });
            webDesign.forEach(function(element) {
                element.style.display = "none";
            });
        }

        else if(this.classList.contains("mobile")){
            mobileDesign.forEach(function(element) {
                element.style.display = "block";
            });
            logoDesign.forEach(function(element) {
                element.style.display = "none";
            });
            webDesign.forEach(function(element) {
                element.style.display = "none";
            });
        }

        else if(this.classList.contains("web")){
            webDesign.forEach(function(element) {
                element.style.display = "block";
            });
            mobileDesign.forEach(function(element) {
                element.style.display = "none";
            });
            logoDesign.forEach(function(element) {
                element.style.display = "none";
            });
        }

        else if(this.classList.contains("all")){
            allImages.forEach(function(element) {
                element.style.display = "block";
            });
        }

    })
}


