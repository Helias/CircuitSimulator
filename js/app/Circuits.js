(function () {
  var app = angular.module('FullAdder', ['ui.router', 'ui.bootstrap']);

  app.controller("ModalController", function($scope, $modal, $rootScope, $sce) {

    // Gestione lingua
    $rootScope.lang = 0;
    $rootScope.switchLang = function ()
    {
      $rootScope.lang = !$rootScope.lang | parseInt;
    };

    $rootScope.indexStep = 0;

    $rootScope.language    = [];
    $rootScope.language[0] = "it.png";
    $rootScope.language[1] = "en.png";

    $rootScope.about    = [];
    $rootScope.about[0] = "Fatto con:";
    $rootScope.about[1] = "Made with:";
    $rootScope.about[2] = "Rilasciato con licenza:";
    $rootScope.about[3] = "Released with license:";

    $rootScope.menu    = [];
    $rootScope.menu[0] = "Info";
    $rootScope.menu[1] = "About";
    $rootScope.menu[2] = "Lingua";
    $rootScope.menu[3] = "Language";

    $rootScope.helpFA4    = [];
    $rootScope.helpFA4[0] = $sce.trustAsHtml("Per effettuare la somma di numeri binari a 4 bit si possono utilizzare 4 full adder in serie.<br> L’ultimo full adder prende in input le due cifre meno significative, ovvero quelle più a destra, dei due numeri binari da sommare. Il penultimo full adder fa lo stesso con le terzultime cifre meno significative dei due numeri binari, e così via dicendo finché non si arriva fino alle cifre più significative. <br> Ogni full adder prende in input anche il riporto in entrata proveniente dall’operazione eseguita dal precedente full adder. Ovviamente il riporto in entrata del primo full adder, quello più a destra, sarà 0, in quanto esso sarà il primo ad eseguire un operazione e quindi non ci sarà riporto in entrata. <br> Ad ogni full adder si hanno perciò in uscita due output: <br><br> 1) Il risultato della somma, che concorre a comporre il numero binario a partire dalla sua cifra meno significativa sino a quella più significativa <br><br> 2) Il riporto in uscita o carry-out che costituisce l’input carry-in per il successivo full adder. <br><br> Al termine della procedura da ogni full adder sarà uscito in output una delle cifre del risultato. Un eventuale riporto in uscita dall’ultimo sommatore completo concorre a formare la cifra più significativa del risultato.");
    $rootScope.helpFA4[1] = $sce.trustAsHtml("To perform the sum of two 4-bit binary numbers we can utilize 4 in series full adder.<br> The last full adder takes as input the last two less significant digits, which are the rightmost ones, of the two binary numbers. The third full adder does the same with the other less significant digits of the numbers and so on until the most significant digits are reached. <br> Each full adder takes as input even a carry-in, which comes from the operation performed of the preceding full adder. Obviously , the carry-in of the first full adder, the rightmost one, is 0, since it’s the first to perform an operation , hence there’s no carry-in, it’s 0. <br><br> For each full adder, therefore we have two outputs: <br><br>1) The result of the sum, which composes the binary number starting from its less significant digits until the most significant is reached.  <br><br> 2) The carry-out, that is the carry-in for the next full adder. <br><br>At the end of the process, each full adder contributed to form the result. The last outgoing carry-out becomes the most significant digits of the result.");

    $rootScope.helpFA    = [];
    $rootScope.helpFA[0] = [];
    $rootScope.helpFA[1] = [];

    $rootScope.helpFA[0][0] = "Numero binario (A) da 1 bit da dare in input al circuito";
    $rootScope.helpFA[0][1] = "Numero binario (B) da 1 bit da dare in input al circuito";
    $rootScope.helpFA[0][2] = "Numero binario questo valore viene utilizzato come valore di riporto/prestito nel caso di circuiti paralleli (vedi circuiti 4 bit)";

    $rootScope.helpFA[1][0] = "Binary number (A) from 1 bit to give input to the circuit";
    $rootScope.helpFA[1][1] = "Binary number (B) from 1 bit to give input to the circuit";
    $rootScope.helpFA[1][2] = "Binary number this value is used as a carry/borrow value in the case of circuit parallel (see circuits 4 bits)";

    $rootScope.DocFullSubtractor    = [];
    $rootScope.DocFullSubtractor[0] = "FullSubtractorDocIta.html";
    $rootScope.DocFullSubtractor[1] = "FullSubtractorDocEng.html";


    $rootScope.helpXOR    = [];
    $rootScope.helpXOR[0] = "Lo XOR (Exclusive OR), o \"somma modulo 2\", è un operatore che restituisce 1 se e solo se uno dei due operandi è 1, 0 altrimenti.";
    $rootScope.helpXOR[1] = "XOR or esclusive OR, or \"two's complement sum\" , is an operator which returns 1 if and only if one of the two operands is 1, 0 otherwise";

    $rootScope.helpAND    = [];
    $rootScope.helpAND[0] = "L'operazione AND o di prodotto logico è un operazione che restituisce 1 se tutti gli operandi sono 1, 0 altrimenti.";
    $rootScope.helpAND[1] = "The AND operation or logic product is an operation which returns one if all operands are 1, 0 otherwise.";

    $rootScope.helpOR    = [];
    $rootScope.helpOR[0] = "L'operazione OR o di somma logica è un operazione che restituisce 0 se tutti gli operandi sono 0, 1 altrimenti.";
    $rootScope.helpOR[1] = "The OR operation or logic sum is an operation which returns 0 of all the operands are 0, 1 otherwise.";

    $rootScope.helpNOT    = [];
    $rootScope.helpNOT[0] = "L'operazione NOT inverte il segnale in entrata";
    $rootScope.helpNOT[1] = "The NOT operator is an operation that invert the signal in input.";


    $rootScope.SubtractorStep = [];
    $rootScope.SubtractorStep[0] = [];
    $rootScope.SubtractorStep[1] = [];

    $rootScope.SubtractorStep[0][0] = $sce.trustAsHtml("Caricamento Bit <br>");
    $rootScope.SubtractorStep[0][1] = $sce.trustAsHtml("DIFFERENZA tra A e B <br> XOR calcola la differenza <br> NOT esegue la negazione logica del valore A");
    $rootScope.SubtractorStep[0][2] = $sce.trustAsHtml("AND calcola il riporto");
    $rootScope.SubtractorStep[0][3] = $sce.trustAsHtml("XOR esegue la differenza tra Bin e il primo risultato <br> NOT esegue la negazione logica del valore risultante tra A e B");
    $rootScope.SubtractorStep[0][4] = $sce.trustAsHtml("AND calcola il riporto della differenza");
    $rootScope.SubtractorStep[0][5] = $sce.trustAsHtml("OR tiene conto dei riporti delle due differenze");

    $rootScope.SubtractorStep[1][0] = $sce.trustAsHtml("Loading data");
    $rootScope.SubtractorStep[1][1] = $sce.trustAsHtml("Difference of A and B <br> XOR performs difference <br> NOT performs logical negation of the value A");
    $rootScope.SubtractorStep[1][2] = $sce.trustAsHtml("AND calculates borrow-out");
    $rootScope.SubtractorStep[1][3] = $sce.trustAsHtml("XOR performs difference of Bin and first XOR result <br> NOT performs logical negation of the difference of A and B");
    $rootScope.SubtractorStep[1][4] = $sce.trustAsHtml("AND calculates the borrow-out of this difference");
    $rootScope.SubtractorStep[1][5] = $sce.trustAsHtml("OR determines the outgoing borrow-out");

    $rootScope.helpSADocs    = [];
    $rootScope.helpSADocs[0] = $sce.trustAsHtml("Il circuito full Subtractor si serve delle porte logiche fondamentali (NOT, OR, AND) per realizzare la sottrazione tra due bit. n full subtractor in serie possono realizzare la sottrazione di numeri binari a n bit. Questo è possibile perché tale circuito è in grado di tenere in considerazione il prestito in uscita della precedente sottrazione avvenuta nel full subtractor precedente, che diventa pertanto prestito in entrata nel Full subtractor successivo. Nel full subtratctor il primo XOR si occupa di eseguire la differenza tra gli input A e B. Nel frattempo in valore di A viene negato e immesso nella porta AND insieme al valore di B al fine di calcolare il prestito di quella differenza. Il secondo XOR esegue la differenza tra il risultato della prima differenza e il prestito in entrata. Analogamente alla prima parte del circuito il valore in uscita dal primo XOR viene negato e poi immesso nel secondo AND insieme al valore del Borrow-in, al fine di calcolare il riporto di tutta l'operazione. L'OR finale tiene in considerazione i risultati uscenti dai due AND e gli eventuali riporti da essi calcolati per calcolare il riporto in uscita.");
    $rootScope.helpSADocs[1] = $sce.trustAsHtml("The full subtractor circuit uses basic logic gates (NOT, OR, AND) to realize the subtraction of two binary digits. n in series full subtractors can realize the subtraction of n bit binary numbers. This is possible because this circuit is able to consider the borrow-out of the preceding subtraction, which took place in the preceding full subtractor. Therefore the borrow-out becomes borrow-in in the next full subtractor. In this ciruit first XOR has the task of performing the subtraction of A and B, which are the inputs. Meanwhile the logic negation of A (with a NOT gate) is introduced in AND gate with the value of B in order to determine borrow of this subtraction. Second XOR performs the subtraction of the first result outgoing from first XOR and the borrow-in. Similarly to the first part of the circuit, the outgoing value from first XOR has to be negated with a NOT gate. The result is put in the second AND gate together with the borrow-in, in order to determine borrow out. Ending OR considerates both outgoing borrows and calculates overall borrow.");

    $rootScope.DocLogicGates    = [];
    $rootScope.DocLogicGates[0] = "PorteLogicheDoc.html";
    $rootScope.DocLogicGates[1] = "LogicGatesDoc.html";

    // Gestione delle modal
    $scope.animationsEnabled = true;
    $scope.open = function (size, template) {

      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: template,
        size: size
      });

    };
  });

  app.controller("FullAdderController", function($scope, $rootScope, $sce) {

    // Inizializzazione variabili per la documentazione
    $rootScope.DocFulladder    = [];
    $rootScope.DocFulladder[0] = "FullAdderDocIta.html";
    $rootScope.DocFulladder[1] = "FullAdderDocEng.html";

    $scope.step = [];
    $scope.step[0] = [];
    $scope.step[1] = [];

    $scope.step[0][0] = $sce.trustAsHtml("Caricamento Bit <br>");
    $scope.step[0][1] = $sce.trustAsHtml("SOMMA tra A e B <br> XOR calcola la somma <br> AND calcola il riporto");
    $scope.step[0][2] = $sce.trustAsHtml("XOR esegue la somma tra Cin e il primo risultato <br> AND calcola il riporto di questa somma <br>");
    $scope.step[0][3] = $sce.trustAsHtml("OR tiene conto dei riporti delle due somme");

    $scope.step[1][0] = $sce.trustAsHtml("Loading data");
    $scope.step[1][1] = $sce.trustAsHtml("Sum of A and B <br> XOR performs sum <br> AND calculates carry-out");
    $scope.step[1][2] = $sce.trustAsHtml("XOR performs sum of Cin and first XOR result <br> AND calculates the carry-out of this sum.");
    $scope.step[1][3] = $sce.trustAsHtml("OR determines the outgoing carry-out");

    $scope.helpFAdocs    = [];
    $scope.helpFAdocs[0] = $sce.trustAsHtml("Il circuito Full adder si serve delle porte logiche di cui sopra per realizzare la somma tra due bit. n Full adder in serie possono realizzare la somma di numeri binari a n bit. Questo &egrave; possibile perché il circuito del full-adder &egrave; in grado di tenere in considerazione del riporto in uscita dalla precedente somma avvenuta nel full adder precedente, che diventa pertanto riporto in entrata nel Full Adder successivo.       Nel Full Adder il primo XOR si occupa si eseguire la somma tra gli input A e B, mentre il primo AND calcola l'eventuale riporto di quella somma. Il secondo XOR e il secondo AND si occupano di tenere in considerazione il riporto in entrata. Lo XOR esegue la somma tra il risultato uscente dal primo XOR e il riporto in entrata, mentre il secondo AND calcola l'eventuale riporto di questa somma. L'OR finale tiene in considerazione i due AND e gli eventuali riporti da essi calcolati e calcola il riporto in uscita.       <br><br>      La tabella di verità del Full'Adder &egrave; la seguente:");
    $scope.helpFAdocs[1] = $sce.trustAsHtml("The Full adder circuit uses logic gates seen above to realize the sum of two binary digits. A series circuit with n in series full adder can calculate the sum of n binary digits numbers. This is possibile because the full adder circuits considerates the carry-out of the preceiding sum which took place in the preceiding full adder, which becomes the carry-in of the successive full adder. In full adder circuit , first XOR performs sum of A and B, while first AND calculates carry-out. Second XOR and second AND have the task of of considering the carry-in. XOR performs the sum of the outgoing results of the first XOR and the carry-in, while second AND calcultates the carry-out of this sum. Final OR calculates final carry-out using the results of the two AND as operands.<br><br>Table Truth of full-adder is here: ");

  });

}());

/* Funzioni generiche */
function Key(evt, button)
{
  var charCode = (evt.which) ? evt.which : event.keyCode;

  if (charCode == 48 || charCode == 49 || charCode == 8 || charCode == 0)
    return true;

  return false;
}

function selected(obj)
{
  var menu = document.getElementsByClassName("menu-title");

  for (var i = 0; i < menu.length; i++)
    menu[i].parentNode.className = "";

  obj.parentNode.className = 'menu-actived';
}


/* Funzioni e variabili del FullAdder (singolo) */

// Dichiarazione variabili
var stB, input = [], step = [], backstep, nStep, path, stepDesc;

function start(AddOrSub)
{
  /* Inizializzazione variabili */

  stepDesc = document.getElementById("ngSteps");

  // contatore step
  nStep = 0;

  // Pulsante start
  stB   = document.getElementById("start");

  // Inizializzo le variabili step e backstep da eseguire successivamente
  input = document.getElementsByTagName("input");

  path = input[0].value + input[1].value + input[2].value;

  if (AddOrSub)
  {
    step[0] = "change_faddr('" + path + "/1.png', " + AddOrSub + ");";
    step[1] = "change_faddr('" + path + "/2.png', " + AddOrSub + ");";
    step[2] = "change_faddr('" + path + "/3.png', " + AddOrSub + ");";
    step[3] = "change_faddr('" + path + "/4.png', " + AddOrSub + ");";
    step[4] = "change_faddr('" + path + "/5.png', " + AddOrSub + ");";
    step[5] = "change_faddr('" + path + "/6.png', " + AddOrSub + ");";
  }
  else
  {
    step[0] = "change_faddr('" + path + "/a.PNG');";
    step[1] = "change_faddr('" + path + "/b.PNG');";
    step[2] = "change_faddr('" + path + "/c.PNG');";
    step[3] = "change_faddr('" + path + "/d.PNG');";
  }

  if (document.getElementById("step").checked == true)
  {
    startstep(AddOrSub);
    return;
  }

  // Resetta il FullAdder nel caso in cui è già stato avviato
  resetta(AddOrSub);

  // Disabilito il pulsante "Start"
  stB.disabled    = 'disabled';
  stB.className   = 'btn-lg btn-danger';

  var finishTime;

  if (AddOrSub)
  {
    setTimeout(step[0] + "nStep++; stepDesc.style.display = 'block';", 1000);
    setTimeout(step[1] + "nStep++;", 5000);
    setTimeout(step[2] + "nStep++;", 10000);
    setTimeout(step[3] + "nStep++;", 15000);    
    setTimeout(step[4] + "nStep++;", 20000);    
    setTimeout(step[5] + "nStep++;", 25000);
    finishTime = 30000;
  }
  else
  {
    setTimeout(step[0] + "nStep++; stepDesc.style.display = 'block';", 1000);
    setTimeout(step[1] + "nStep++;", 5000);
    setTimeout(step[2] + "nStep++;", 10000);
    setTimeout(step[3] + "nStep++;", 15000);
    finishTime = 18000;
  }

  // Resetto il pulsante Start
  setTimeout("stB.disabled = ''; stB.className = 'btn-lg btn-info'; nStep = 0; stepDesc.style.display = 'none';", finishTime);
}

function startstep(AddOrSub)
{
  backstep = document.getElementById("backstep");
  backstep.style.display = "";
  document.getElementById("stepLabel").style.display = "none";

  // Resetta il FullAdder nel caso in cui è già stato avviato
  resetta(AddOrSub);

  // Disabilito il pulsante "Start"
  stB.onclick = function() { goStep('', AddOrSub); };
  stB.innerHTML   = "Next Step";

  // Disabilita gli input A,B e Cin
  input[0].disabled = "disabled";
  input[1].disabled = "disabled";
  input[2].disabled = "disabled";
}

function goStep(back, AddOrSub) {
  stepDesc.style.display = "block";
  if (back)
  {
    if (nStep == 0)
      return;

    if (nStep == 1)
    {
      nStep--;
      change_faddr('empty.png', AddOrSub);
      stepDesc.style.display = "none";
      return;
    }

    if (stB.innerHTML == "Finish?")
      stB.innerHTML = "Next Step";

    nStep -= 2;
    eval(step[nStep]);
    nStep++;
    stB.onclick = function() { goStep('', AddOrSub); };
  }
  else
  {
    eval(step[nStep]);
    nStep++;
  }

  var last;

  if (AddOrSub)
    last = 6;
  else
    last = 4;

  if (nStep == last)
  {
    stB.innerHTML = "Finish?";
    stB.onclick = function() {

      // Abilita gli input A,B e Cin
      input[0].disabled = "";
      input[1].disabled = "";
      input[2].disabled = "";

      // Resetto il pulsante Start e Backstep
      stB.innerHTML          = "Start";
      stB.onclick            = function() { start(AddOrSub); };
      backstep.style.display = "none";
      document.getElementById("stepLabel").style.display = "";

      resetta(AddOrSub);
    };
  }
}

function change_faddr(val, AddOrSub)
{

  if (AddOrSub)
    document.getElementById('Subtractor').src = "images/subtractor/" + val;
  else
    document.getElementById('FullAdder').src = "images/faddr/" + val;



  var scope = angular.element(stepDesc).scope();
  scope.$apply(function(){ scope.indexStep = nStep; });
}

function resetta(AddOrSub)
{
  // Resetta il FullAdder nel caso in cui è già stato avviato
  change_faddr('empty.png', AddOrSub);
  stepDesc.style.display = "none";
}

/* 
 *   Funzioni del "FullAdder 4 bit"
 */

/* Dichiarazione variabili */
var view, add1, add2, member, riporto = 0, overAdder;

function select(val, add1, add2)
{
  view = document.getElementById("analizza");

  view.innerHTML = "<span class=\"line selected\">" + add1.substr(0, 4-val) + "<b>|</b>" + add1.substr(-val, 1) + "<b>|</b>" + add1.substr((4-val)+1, 3) + " <strong>A</strong></span> <p style=\"height: 4px;\"></p> <span class=\"selected\">" + add2.substr(0, 4-val) + "<b>|</b>" + add2.substr(-val, 1) + "<b>|</b>" + add2.substr((4-val)+1, 3) + " <strong>B</strong></span>";
}

function start4bit(AddOrSub)
{
  /* Inizializzazione variabili */

  view = document.getElementById("analizza");

  add1 = document.getElementById("add1").value;
  add2 = document.getElementById("add2").value;

  member = document.getElementsByClassName("member");

  var space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

  member[3].innerHTML = add1.substr(-1, 1) + space + add2.substr(-1, 1);
  member[2].innerHTML = add1.substr(-2, 1) + space + add2.substr(-2, 1);
  member[1].innerHTML = add1.substr(-3, 1) + space + add2.substr(-3, 1);
  member[0].innerHTML = add1.substr(-4, 1) + space + add2.substr(-4, 1);

  // contatore step
  nStep = 0;

  // Pulsante start
  stB   = document.getElementById("start");

  // Inizializzo le variabili step e backstep da eseguire successivamente
  step[0] = "change_4bit('1', " + AddOrSub + "); select(1, add1, add2); resultx(3, " + AddOrSub + ");";
  step[1] = "change_4bit('2', " + AddOrSub + "); select(2, add1, add2); resultx(2, " + AddOrSub + ");";
  step[2] = "change_4bit('3', " + AddOrSub + "); select(3, add1, add2); resultx(1, " + AddOrSub + ");";
  step[3] = "change_4bit('4', " + AddOrSub + "); select(4, add1, add2); resultx(0, " + AddOrSub + ");";

  if (document.getElementById("step").checked == true)
  {
    startstep4bit(AddOrSub);
    return;
  }

  // Resetta il FullAdder nel caso in cui è già stato avviato
  resetta4bit(AddOrSub);

  // Disabilito il pulsante "Start"
  stB.disabled    = 'disabled';
  stB.className   = 'btn-lg btn-danger';

  if (AddOrSub)
  {
    setTimeout(step[0] + "nStep++;", 1000);
    setTimeout(step[1] + "nStep++;", 16000);
    setTimeout(step[2] + "nStep++;", 32000);
    setTimeout(step[3] + "nStep++;", 47000);

    // Resetto il pulsante Start
    setTimeout("stB.disabled = ''; stB.className = 'btn-lg btn-info'; nStep = 0; overAdder.style.display= 'none';", 62000);
  }
  else
  {  
    setTimeout(step[0] + "nStep++;", 1000);
    setTimeout(step[1] + "nStep++;", 11000);
    setTimeout(step[2] + "nStep++;", 21000);
    setTimeout(step[3] + "nStep++;", 31000);

    // Resetto il pulsante Start
    setTimeout("stB.disabled = ''; stB.className = 'btn-lg btn-info'; nStep = 0; overAdder.style.display= 'none';", 41000);
  }
}


function startstep4bit(AddOrSub)
{
  backstep = document.getElementById("backstep");
  backstep.style.display = "";
  document.getElementById("stepLabel").style.display = "none";

  // Resetta il FullAdder nel caso in cui è già stato avviato
  resetta4bit(AddOrSub);

  // Disabilito il pulsante "Start"
  stB.onclick = function() { goStep4bit('', AddOrSub); };
  stB.innerHTML   = "Next Step";
}

function goStep4bit(back, AddOrSub) {
  if (back)
  {
    if (nStep == 0)
      return;

    if (nStep == 1)
    {
      nStep--;
      change_4bit('0', AddOrSub);
      return;
    }

    if (stB.innerHTML == "Finish?")
      stB.innerHTML = "Next Step";

    nStep -= 2;

    resetta4bit(AddOrSub);
    for (var i = 0; i < nStep; i++)
      eval(step[i]);

    eval(step[nStep]);
    nStep++;
    stB.onclick = function() { goStep4bit('', AddOrSub); };
  }
  else
  {
    eval(step[nStep]);
    nStep++;
  }

  if (nStep == 4)
  {
    stB.innerHTML = "Finish?";
    stB.onclick = function() {

      // Resetto il pulsante Start e Backstep
      stB.innerHTML          = "Start";
      stB.onclick            = function() { start4bit(AddOrSub); };
      backstep.style.display = "none";
      document.getElementById("stepLabel").style.display = "";
      document.getElementById("overAdder").style.display = "none";

      resetta4bit(AddOrSub);
    };
  }
}

function change_4bit(val, AddOrSub)
{
  if (AddOrSub)
    document.getElementById('Subtractor4bit').src = "images/subtractor4bit/4BIT" + val + ".PNG";
  else
    document.getElementById('FullAdder4bit').src = "images/4bit/4BIT" + val + ".PNG";
}

function resetta4bit(AddOrSub)
{
  // Resetta il FullAdder nel caso in cui è già stato avviato
  change_4bit('0', AddOrSub);
  var results = document.getElementsByClassName("result");

  for (var i = 0; i < results.length; i++)
    results[i].innerHTML = "&nbsp;";

  riporto = 0;

  document.getElementsByClassName("lastcarry")[0].style.display = "none";
}

function resultx(val, AddOrSub)
{
  var results = document.getElementsByClassName("result");
  overAdder = document.getElementById("overAdder");

  for (var i = 0; i < results.length; i++)
    results[i].style.color = "#2a82a1";

  switch(val)
  {
    case 0:
      overAdder.style.right = "660px";
      break;
    case 1:
      overAdder.style.right = "470px";
      break;
    case 2:
      overAdder.style.right = "280px";
      break;
    case 3:
      overAdder.style.right = "80px";
      break;
  }

  if (AddOrSub)
    overAdder.src = "images/subtractor/" + add1.substr(-(4-val), 1) + add2.substr(-(4-val), 1) + riporto + "/animation.gif";
  else
    overAdder.src = "images/faddr/" + add1.substr(-(4-val), 1) + add2.substr(-(4-val), 1) + riporto + "/animation.gif";

  overAdder.style.display = "block";

  results[val].style.color = "red";
  if (AddOrSub)
    results[val].innerHTML = subtract(add1, add2, val);
  else
    results[val].innerHTML = sumBin(add1.substr(-(4-val), 1), add2.substr(-(4-val), 1));

  if (AddOrSub && val == 0)
  {
    if (add1 < add2)
    {
      document.getElementsByClassName("lastcarry")[0].innerHTML = "-";
      document.getElementsByClassName("lastcarry")[0].style.display = "block";
    }
  }
  else if(riporto == 1 && val == 0)
  {
    document.getElementsByClassName("lastcarry")[0].style.display = "block";
    document.getElementsByClassName("lastcarry")[0].innerHTML     = riporto;
  }
}

function sumBin(val1, val2)
{
  if (val1 == 1 && val2 == 1 && riporto == 1)
  {
    riporto = 1;
    return 1;
  }
  else if (val1 == 1 && val2 == 1 && riporto == 0)
  {
    riporto = 1;
    return 0;
  }
  else if ((val1 == 1 || val2 == 1) && riporto == 1)
  {
    riporto = 1;
    return 0;
  }
  else if ((val1 == 1 || val2 == 1) && riporto == 0)
    return 1;
  else
  {
    if (riporto == 1)
    {
      riporto = 0;
      return 1;
    }
    else
      return 0;
  }
}

function subtract(sub1, sub2, val)
{
  sub1 = parseInt(sub1, 2);
  sub2 = parseInt(sub2, 2);

  var difference = parseInt((sub1-sub2), 10).toString(2);

  if (difference.substr(-(4-val), 1) == "-")
    return 0;
  else
    return difference.substr(-(4-val), 1);
}

