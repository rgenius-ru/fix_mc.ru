//global variables
//**************************
var iframeChkReadyNum = 60;//counter - number of Check iframe ready
var iframeChkReadyCount = 0;
var intervalID;
var logOn = false;
//**************************
console.log("Run Fix_mc Script");

InitScript();

/*var script = 'http://coolshell.cn/asyncjs/alert.js';
document.addEventListener('DOMContentLoaded', onInit, false);
function loadScript(script_filename){
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', script_filename);
  script.setAttribute('id', 'coolshell_script_id');

  script_id = document.getElementById('coolshell_script_id');
  if(script_id){
      document.getElementsByTagName('head')[0].removeChild(script_id);
  }
  document.getElementsByTagName('head')[0].appendChild(script);
}*/

function InitScript(){//initialization
  addCats();
  
  var basket = document.getElementsByClassName('bask');
  for (var i = 0, l = basket.length; i < l; i++) {
    addEvent(basket[i], 'click', function(event) {runScript();}, false);
  }
}

function runScript(){
  //setTimeout(main, 5000); 
  intervalID = setInterval(isIframeready, 1000);
}

function main() {
  var myframe = document.getElementById('tip_f');
  if (typeof myframe !== 'undefined') {
    myframe.style.height = '250px';
    //myframe.style.width = '530px';
    
    var content1 = myframe.contentWindow.document.getElementById('background');
    //content1.insertAdjacentHTML('afterend', '<script language="Javascript" type="text/javascript">function modifyText(){this.innerHTML = "<b>Куценко</b>";}</script>');
    if (logOn){
      console.log(content1);
    }
    var table1 = content1.getElementsByTagName('table')[0];
    if (logOn){
      console.log(table1);
    }
    var row1 = table1.insertRow(-1);
    var row2 = table1.insertRow(-1);
    var row3 = table1.insertRow(-1);
    var row4 = table1.insertRow(-1);

    var cells1 = [];
    var cells2 = [];
    var cells3 = [];
    var cells4 = [];
    for(i=0; i<=6; i++){
      cells1.push(row1.insertCell(i));
      cells2.push(row2.insertCell(i));
      cells3.push(row3.insertCell(i));
      cells4.push(row4.insertCell(i));
    }

    cells1[1].innerHTML = '<b>Наценка</b>';
    element1 = cells1[4];
    
    cells2[3].innerHTML = '<b>За тонну</b>';
    cells2[4].innerHTML = '<b>Сумма+Нац.</b>';
    cells2[1].innerHTML = '<input type="text" autofocus="autofocus" id="nacenka" name="nacenka" tabindex="1" style="width: 58; text-align: center">';

    cells3[2].innerHTML = '<b>За мп</b>';
    //cells3[1].innerHTML = '<input type="text" autocomplete="off" id="tonns1" name="tonns1" tabindex="1" value="" style="width: 58; text-align: center">'; /*onkeyup="modifyText()"*/
    //cells3[2].innerHTML = '<input type="text" autocomplete="off" id="meters1" name="meters1" onkeyup="" tabindex="1" style="width: 58; text-align: center">';
    cells3[3].innerHTML = '<input type="text" id="price_basket1" name="price_basket1" tabindex="1" readonly="readonly" style="width: 80; text-align: center; cursor: text">';
    cells3[4].innerHTML = '<input type="text" id="amount1" name="amount1" tabindex="1" readonly="readonly" style="width: 80; text-align: center; cursor: text">';
    cells3[1].innerHTML = '<input type="text" id="nacenka1" name="nacenka1" tabindex="1" readonly="readonly" style="width: 58; text-align: center; cursor: text">';
    
    //cells4[1].innerHTML = '<input type="text" autocomplete="off" id="tonns2" name="tonns2" tabindex="1" value="" style="width: 58; text-align: center">'; /*onkeyup="modifyText()"*/
    cells4[2].innerHTML = '<input type="text" autocomplete="off" id="meters2" name="meters2" onkeyup="" tabindex="1" readonly="readonly" style="width: 58; text-align: center; cursor: text">';
    //cells4[3].innerHTML = '<input type="text" id="price_basket2" name="price_basket2" tabindex="1" disabled="disabled" style="width: 80; text-align: center; cursor: text">';
    cells4[4].innerHTML = '<input type="text" id="amount2" name="amount2" tabindex="1" readonly="readonly" style="width: 80; text-align: center; cursor: text">';
    cells4[1].innerHTML = '<input type="text" id="nacenka2" name="nacenka2" tabindex="1" readonly="readonly" style="width: 58; text-align: center; cursor: text">';
    
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
    if (logOn){
      console.log('myframe is NOT defined');
    }
  }
}

function calculate(frame){
  amount = frame.contentWindow.document.getElementById('amount');
  amount1 = frame.contentWindow.document.getElementById('amount1');
  amount2 = frame.contentWindow.document.getElementById('amount2');
  nacenka = frame.contentWindow.document.getElementById('nacenka');
  nacenka1 = frame.contentWindow.document.getElementById('nacenka1');
  nacenka2 = frame.contentWindow.document.getElementById('nacenka2');
  tonns = frame.contentWindow.document.getElementById('tonns');
  price_basket1 = frame.contentWindow.document.getElementById('price_basket1');
  meters1 = frame.contentWindow.document.getElementById('meters1');
  meters2 = frame.contentWindow.document.getElementById('meters2');
  meters = frame.contentWindow.document.getElementById('meters');
  
  if (logOn){
    console.log(parseInt(amount.value));
    console.log(parseInt(nacenka.value));
    console.log(parseInt(amount.value) + parseInt(nacenka.value));
  }
  
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
    amount1.value = Math.ceil(parseFloat(tonns.value.replace(',', '.')) * price_basket1temp).toString();
    meters2.value = Math.ceil(amount1temp / parseInt(meters.value)).toString();
    amount2.value = (parseInt(meters2.value) * parseInt(meters.value)).toString();
    nacenka1.value = (parseInt(amount1.value) - parseInt(amount.value)).toString();
    nacenka2.value = (parseInt(amount2.value) - parseInt(amount.value)).toString();
  }
  else{
    price_basket1.value = '';
    amount1.value = '';
    amount2.value = '';
    meters2.value = '';
    nacenka1.value = '';
    nacenka2.value = '';
  }
}

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

function addCats(){//just for fun and it's indicate run script
  var images = document.getElementsByTagName('img');
  images[0].src = 'http://placekitten.com/' + images[0].width + '/' + images[0].height;
  /*for (var i = 0, l = images.length; i < l; i++) {
    images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
  }*/
}

function isIframeready(){
  var iframe = document.getElementById('tip_f');
  if (logOn){
    console.log(iframe);
  }
  var iframeDoc = iframe.contentWindow.document;
    if(iframeChkReadyCount < iframeChkReadyNum){
      if (iframeDoc.readyState == 'complete') {
        clearInterval(intervalID);
        iframeChkReadyCount = 0;
        main();
      }
      else{
        iframeChkReadyCount++;
      }
    }
    else{
      clearInterval(intervalID);
    }
}