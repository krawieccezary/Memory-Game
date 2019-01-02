var container = document.getElementById('container');
var button_reset = document.getElementById('button-reset');

function removeSelect(select_1, select_2) {
   select_1.classList.remove('select');
   select_2.classList.remove('select');
}

function selectCard() {
   console.log(this.dataset.number);
   this.classList.add('select');

   var selects = document.querySelectorAll('.select');
   if (selects.length == 2) {
      if (selects[0].dataset.number == selects[1].dataset.number) {
         console.log('aaa');
      } else {
         window.setTimeout(removeSelect(selects[0], selects[1]), 1000);
      }
   }
};

function setupCard() {
   var cards = document.getElementsByClassName('card');

   [...cards].forEach(card => {
      card.addEventListener('click', selectCard);
   });
}


function createImages(result){
   var result_length = result.length;
   var output = '';

   for (i=0; i<result_length; i++) {
      output += '<div class="card" data-number="' + result[i] + '">';
      output += '<div class="card-face front" style="background-image: url(images/image-' + result[i] + '.jpg);"></div>';
      output += '<div class="card-face back"></div>';
      output += '</div>';
   }
   return output;
}

function addCarts(){
   var xhr = new XMLHttpRequest();
   xhr.open('GET', 'gra.php', true);
   xhr.onreadystatechange = function(){
      if (xhr.readyState == 4 && xhr.status == 200){
            var result = JSON.parse(xhr.responseText);

            container.innerHTML = createImages(result);

            setupCard();
      }
   }
   xhr.send();
}


addCarts();
button_reset.addEventListener('click', addCarts);
