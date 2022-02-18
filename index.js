var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


function showHideKonten() {
  var konten = document.getElementById('hide-konten');
  var btnText=document.getElementById('showButton');
  if (konten.style.display === 'none') {
  konten.style.display = 'block';
    btnText.innerHTML = "Show Less";
  } else {
    konten.style.display = 'none';
    btnText.innerHTML = "Show More";
  }
}

const listQuotes = {
  "quotes1" : "Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri.",
  "quotes2" : "Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri? (Frank J Giblin)",
  "quotes3" : "Matahari akan tenggelam sore ini, namun esok pagi ia akan terbit lagi. Hari ini mungkin doa dan harapanmu belum terkabul. Namun esok hari, boleh jadi akan terkabul.",
  "quotes4" : "Jalan yang sulit sering kali mengarah ke tujuan yang indah."
};

function outputQuotes() {
 let quotes = document.getElementById("quotes");
  let output = document.getElementById("quotesOutput");

  for (let x in listQuotes) {
    console.log(x);  
    console.log(quotes);
    if(quotes.value==x){
      output.innerHTML = `<p style="text-align:center; font-size:1.5em;line-height:2em">&rdquo;${listQuotes[x]}&rdquo;</p>`;
    }
  } 
}

