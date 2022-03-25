
let rateValue = 1 ; 
const ratings = document.querySelectorAll('li');
for (let i = 0; i < ratings.length; i++) {
   //hover effect on 4 and 5
      if (i == 4) {
          ratings[i].onmouseenter = (e)=>{
           ratings[3].style.backgroundColor = 'hsl(217, 12%, 63%)'
           ratings[3].style.color = 'hsl(0, 0%, 100%)'
          }
          ratings[i].onmouseleave = (e)=>{
            ratings[3].style.backgroundColor = 'hsl(213, 18%, 26%)'
            ratings[3].style.color = 'hsl(217, 12%, 63%)'
           }
      }
   ratings[i].onclick = function(e){
    rateValue = ratings[i].innerHTML
}
}
//submit function..
function submitRating(){
    const rateDispaly =  document.getElementById('selected-rate');
    rateDispaly.innerHTML = rateValue;
    const rateContainer = document.getElementById('rating-state')
    rateContainer.style.display = 'none';
    document.getElementById('thank-you-state').style.display = 'block';
}