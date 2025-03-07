let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        // Change the image based on the button clicked
        productImg.src = `images/image${i + 1}.png`;

        // Remove 'active' class from all buttons
        for (let bt of btn) {
            bt.classList.remove("active");
        }

        // Add 'active' class to the clicked button
        this.classList.add("active");
    }
}
