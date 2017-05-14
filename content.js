console.log("Run App Script");
var script = 'http://coolshell.cn/asyncjs/alert.js';

document.addEventListener('DOMContentLoaded', onInit, false);

function onInit(){
  //loadjs(script);
}

function loadjs(script_filename) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', script_filename);
    script.setAttribute('id', 'coolshell_script_id');
  
    script_id = document.getElementById('coolshell_script_id');
    if(script_id){
        document.getElementsByTagName('head')[0].removeChild(script_id);
    }
    document.getElementsByTagName('head')[0].appendChild(script);
}


//console.log("Run App Script");
var images = document.getElementsByTagName('img');
images[0].src = 'http://placekitten.com/' + images[0].width + '/' + images[0].height;
/*for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
}*/
//var basket = document.getElementsByClassName('basket');
//console.log(basket);
//basket[0].addEventListener('load', func(), false);

//var element1;


var basket = document.getElementsByClassName('bask');
for (var i = 0, l = basket.length; i < l; i++) {
  addEvent(basket[i], 'click', function(event) {runScript();}, false);
}

//Изменяет фрейм заказа
function calculate(frame){
  amount = frame.contentWindow.document.getElementById('amount');
  amount1 = frame.contentWindow.document.getElementById('amount1');
  nacenka = frame.contentWindow.document.getElementById('nacenka');
  tonns = frame.contentWindow.document.getElementById('tonns');
  price_basket1 = frame.contentWindow.document.getElementById('price_basket1');
  
  console.log(parseInt(amount.value));
  console.log(parseInt(nacenka.value));
  console.log(parseInt(amount.value) + parseInt(nacenka.value));
  
  if (amount.value.length !== 0){
    if(parseInt(nacenka.value) > 0){
      
    }
    else{
      nacenka.value = '5000';
    }
    amount1temp = parseInt(amount.value) + parseInt(nacenka.value);
    console.log(amount1temp);
    price_basket1temp = amount1temp / parseFloat(tonns.value.replace(',', '.'));
    price_basket1temp = Math.ceil(price_basket1temp/10, 1) * 10;
    price_basket1.value =( price_basket1temp ).toString();
    amount1.value = Math.round(parseFloat(tonns.value.replace(',', '.')) * price_basket1temp).toString();  
  }
}

//Добавление слушателя события для разных браузеров
function addEvent(elm, evType, fn, useCapture) {
  if (elm.addEventListener) {
    elm.addEventListener(evType, fn, useCapture);
  }
  else if (elm.attachEvent) {
    elm.attachEvent('on' + evType, fn);
  }
  else {
    elm['on' + evType] = fn;
  }
}


function main() {
  var myframe = document.getElementById('tip_f');
  if (typeof myframe !== 'undefined') {
    myframe.style.height = '210px';
    
    var content1 = myframe.contentWindow.document.getElementById('background');
    //content1.insertAdjacentHTML('afterend', '<script language="Javascript" type="text/javascript">function modifyText(){this.innerHTML = "<b>Куценко</b>";}</script>');
    console.log(content1);
    
    var table1 = content1.getElementsByTagName('table')[0];
    console.log(table1);
    var row1 = table1.insertRow(-1);
    var row2 = table1.insertRow(-1);
    var row3 = table1.insertRow(-1);

    var cells1 = [];
    var cells2 = [];
    var cells3 = [];
    for(i=0; i<=5; i++){
      cells1.push(row1.insertCell(i));
      cells2.push(row2.insertCell(i));
      cells3.push(row3.insertCell(i));
    }

    cells1[4].innerHTML = '<b>Наценка</b>';
    element1 = cells1[4];
    
    cells2[4].innerHTML = '<input type="text" autofocus="autofocus" id="nacenka" name="nacenka" tabindex="1" style="width: 80; text-align: center">';

    cells3[1].innerHTML = '<input type="text" autocomplete="off" id="tonns1" name="tonns1" tabindex="1" value="" style="width: 58; text-align: center">'; /*onkeyup="modifyText()"*/
    cells3[2].innerHTML = '<input type="text" autocomplete="off" id="meters1" name="meters1" onkeyup="" tabindex="1" style="width: 58; text-align: center">';
    cells3[3].innerHTML = '<input type="text" id="price_basket1" name="price_basket1" tabindex="1" style="width: 80; text-align: center">';
    cells3[4].innerHTML = '<input type="text" id="amount1" name="amount1" tabindex="1" style="width: 80; text-align: center">'; /*disabled="disabled"*/
    
    element1 = myframe.contentWindow.document.getElementById('amount1');
    //console.log(element1);
    element2 = myframe.contentWindow.document.getElementById('nacenka');
    //console.log(element2);
    addEvent(element2, 'keyup', function(event) {calculate(myframe);}, false);
    //element2.addEventListener('keyup', function(event) {modifyText();}, false);
    element3 = myframe.contentWindow.document.getElementById('tonns');
    addEvent(element3, 'keyup', function(event) {calculate(myframe);}, false);
    element4 = myframe.contentWindow.document.getElementById('meters');
    addEvent(element4, 'keyup', function(event) {calculate(myframe);}, false);
    
  }
  else{
    console.log('myframe is NOT defined');
  }
}

function runScript(){
}setTimeout(main, 5000);