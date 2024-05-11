function calculaMedia() {
    var input = document.getElementById("inputValues").value;
    var n = input.split(",");
    var soma = 0;
    var i = 0;
    
    for (i = 0; i < n.length; i++) {
      soma = soma + parseInt(n[i]);
    }
    
    var media = soma / n.length;
    
    var res = document.getElementById("result");
    res.innerHTML = "A média é = " + media;
  }
  
  