let liczbaclassic = 0;
let promocjaTF = 0;
let wspolpracaLiczenie = 0;
let znizkaTyg = 0;
let cena = 0;
let classic = 0;
let classicc = 1200;
let premiumc = 1300;
let goldc = 1500;
let kingc = 2000;
let pizzac = 700;
let sokc = 700;
let pizzapiecc = 900;
let colac = 900;
function wspolpraca(wspolpracaKtora) {
  wspolpracaLiczenie++;
  switch (wspolpracaKtora) {
    case 0:
      if (wspolpracaLiczenie % 2 != 0) {
        console.log("true -- w ifie");
        document.getElementById("tygId").disabled = true;
        document.getElementById("tyg2Id").disabled = true;
        document.getElementById("tyg3Id").disabled = true;
        document.getElementById("tyg4Id").disabled = true;
        document.getElementById("blackmoon").disabled = true;
      } else {
        console.log("false -- w ifie");
        document.getElementById("tygId").disabled = false;
        document.getElementById("tyg2Id").disabled = false;
        document.getElementById("tyg3Id").disabled = false;
        document.getElementById("tyg4Id").disabled = false;
        document.getElementById("blackmoon").disabled = false;
      }
      break;
    case 1:
      if (wspolpracaLiczenie % 2 != 0) {
        console.log("true -- w ifie");
        document.getElementById("tygId").disabled = true;
        document.getElementById("tyg2Id").disabled = true;
        document.getElementById("tyg3Id").disabled = true;
        document.getElementById("tyg4Id").disabled = true;
        document.getElementById("bahama").disabled = true;
      } else {
        console.log("false -- w ifie");
        document.getElementById("tygId").disabled = false;
        document.getElementById("tyg2Id").disabled = false;
        document.getElementById("tyg3Id").disabled = false;
        document.getElementById("tyg4Id").disabled = false;
        document.getElementById("bahama").disabled = false;
      }
      break;
  }
}
function tyg(tygodnia) {
  znizkaTyg++;
  console.log(znizkaTyg);
  switch (tygodnia) {
    case 0:
      console.log(znizkaTyg);

      if (znizkaTyg % 2 != 0) {
        console.log("true -- w ifie");
        document.getElementById("bahama").disabled = true;
        document.getElementById("blackmoon").disabled = true;
        document.getElementById("tyg2Id").disabled = true;
        document.getElementById("tyg3Id").disabled = true;
        document.getElementById("tyg4Id").disabled = true;
      } else {
        console.log("false -- w ifie");
        document.getElementById("bahama").disabled = false;
        document.getElementById("blackmoon").disabled = false;
        document.getElementById("tyg2Id").disabled = false;
        document.getElementById("tyg3Id").disabled = false;
        document.getElementById("tyg4Id").disabled = false;
      }
      break;
    case 1:
      console.log(znizkaTyg);

      if (znizkaTyg % 2 != 0) {
        console.log("true -- w ifie");
        document.getElementById("bahama").disabled = true;
        document.getElementById("blackmoon").disabled = true;
        document.getElementById("tygId").disabled = true;
        document.getElementById("tyg3Id").disabled = true;
        document.getElementById("tyg4Id").disabled = true;
      } else {
        console.log("false -- w ifie");
        document.getElementById("bahama").disabled = false;
        document.getElementById("blackmoon").disabled = false;
        document.getElementById("tygId").disabled = false;
        document.getElementById("tyg3Id").disabled = false;
        document.getElementById("tyg4Id").disabled = false;
      }
      break;
    case 2:
      console.log(znizkaTyg);

      if (znizkaTyg % 2 != 0) {
        console.log("true -- w ifie");
        document.getElementById("bahama").disabled = true;
        document.getElementById("blackmoon").disabled = true;
        document.getElementById("tygId").disabled = true;
        document.getElementById("tyg2Id").disabled = true;
        document.getElementById("tyg4Id").disabled = true;
      } else {
        console.log("false -- w ifie");
        document.getElementById("bahama").disabled = false;
        document.getElementById("blackmoon").disabled = false;
        document.getElementById("tygId").disabled = false;
        document.getElementById("tyg2Id").disabled = false;
        document.getElementById("tyg4Id").disabled = false;
      }
      break;
    case 3:
      console.log(znizkaTyg);

      if (znizkaTyg % 2 != 0) {
        console.log("true -- w ifie");
        document.getElementById("bahama").disabled = true;
        document.getElementById("blackmoon").disabled = true;
        document.getElementById("tygId").disabled = true;
        document.getElementById("tyg3Id").disabled = true;
        document.getElementById("tyg2Id").disabled = true;
      } else {
        console.log("false -- w ifie");
        document.getElementById("bahama").disabled = false;
        document.getElementById("blackmoon").disabled = false;
        document.getElementById("tygId").disabled = false;
        document.getElementById("tyg3Id").disabled = false;
        document.getElementById("tyg2Id").disabled = false;
      }
      break;
  }
}
function liczenie() {
  liczbaclassic = classic;
  classic = document.getElementById("classicHtml").value;
  let premium = document.getElementById("premium").value;
  let gold = document.getElementById("gold").value;
  let king = document.getElementById("king").value;
  let pizza = document.getElementById("pizza").value;
  let sok = document.getElementById("sok").value;
  let pizzapiec = document.getElementById("pizzapiec").value;
  let cola = document.getElementById("cola").value;
  let bahama = document.getElementById("bahama").checked;
  let blackmoon = document.getElementById("blackmoon").checked;
  let tyg = document.getElementById("tygId").checked;
  let tyg2 = document.getElementById("tyg2Id").checked;
  let tyg3 = document.getElementById("tyg3Id").checked;
  let tyg4 = document.getElementById("tyg4Id").checked;

  console.log("Sprawdzanie skryptow - Aktualnie sprawdzane: ", "TYG ", tyg);

  // -------------- Bahama --------------
  if (bahama == true) {
    if (classic >= 2) {
      classic--;
      liczbaclassic--;
      cena =
        classic * classicc +
        premium * premiumc +
        gold * goldc +
        king * kingc +
        pizza * pizzac +
        sok * sokc +
        cola * colac +
        pizzapiec * pizzapiecc;
      document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $`;
      promocjaTF++;
    } else if (classic == 1) {
      document.getElementById(
        "wynik"
      ).innerHTML = `Wychodzi:  Że nie dasz samego zestawu za free! Przeczytaj kanał współprace!`;
    }
  }
  // -------------- Blackmoon --------------
  if (blackmoon == true) {
    classicc = 700;
    cena =
      classic * classicc +
      premium * premiumc +
      gold * goldc +
      king * kingc +
      pizza * pizzac +
      sok * sokc +
      cola * colac +
      pizzapiec * pizzapiecc;
    document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $`;
    promocjaTF++;
  }
  // --------------  Tygodnia 2 za 2  --------------
  if (tyg == true) {
    let ile = classic % 2;
    console.log(
      "Sprawdzanie skryptow - Aktualnie sprawdzane: ",
      "ile reszty z dzielenia tyg 2za 2 ",
      ile
    );
    if (ile == 0) {
      if (classic != 0) {
        let classicc = 1000;
        console.log("Drugi if, Ile za classica? ", classicc);
        cena =
          classic * classicc +
          premium * premiumc +
          gold * goldc +
          king * kingc +
          pizza * pizzac +
          sok * sokc +
          cola * colac +
          pizzapiec * pizzapiecc;
        document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $`;
        promocjaTF++;
      }
    }
    if (ile == 1) {
      if (classic != 0) {
        let classicc = 1000;
        console.log("Drugi if, Ile za classica? ", classicc);
        cena =
          classic * classicc +
          premium * premiumc +
          gold * goldc +
          king * kingc +
          pizza * pizzac +
          sok * sokc +
          cola * colac +
          pizzapiec * pizzapiecc;
        cena = cena + 200;
        document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $`;
        promocjaTF++;
      }
    }
  }
  // -------------- Tygodnia 3 za 3 --------------

  if (tyg2 == true) {
    let ile = classic % 3;
    console.log("reszta z dzielenia modulo = ", ile);
    if (ile == 0) {
      if (classic != 0) {
        let classicc = 1000;
        //console.log("Drugi if, Ile za classica? ", classicc)
        cena =
          classic * classicc +
          premium * premiumc +
          gold * goldc +
          king * kingc +
          pizza * pizzac +
          sok * sokc +
          cola * colac +
          pizzapiec * pizzapiecc;
        document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $`;
        promocjaTF++;
      }
    }
    if (ile == 1) {
      let classicc = 1000;
      //console.log("Drugi if, Ile za classica? ", classicc)
      cena =
        classic * classicc +
        premium * premiumc +
        gold * goldc +
        king * kingc +
        pizza * pizzac +
        sok * sokc +
        cola * colac +
        pizzapiec * pizzapiecc;
      cena = cena + 200; // Ile dodatkowo ze wzgledu na pozapromocyjne
      document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $`;
      promocjaTF++;
    }
    if (ile == 2) {
      let classicc = 1000;
      //console.log("Drugi if, Ile za classica? ", classicc)
      cena =
        classic * classicc +
        premium * premiumc +
        gold * goldc +
        king * kingc +
        pizza * pizzac +
        sok * sokc +
        cola * colac +
        pizzapiec * pizzapiecc;
      cena = cena + 400; // Ile dodatkowo ze wzgledu na pozapromocyjne
      document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $`;
      promocjaTF++;
    }
  }

  // -------------- Oferta 2 + 1 --------------

  if (tyg3 == true) {
    if (classic % 3 == 0) {
      let classicDoProm = classic / 3;
      console.log("tyle po dzieleniu 2+1 ", classicDoProm);
      classic = classicDoProm * 2;
      console.log("tyle po dzieleniu 2+1 classic = ", classic);
      cena =
        classic * classicc +
        premium * premiumc +
        gold * goldc +
        king * kingc +
        pizza * pizzac +
        sok * sokc +
        cola * colac +
        pizzapiec * pizzapiecc;

      document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $`;
    }else if (classic % 3 == 1) {
      classic--;
      let classicDoProm = classic / 3;
      classic = classicDoProm * 2;
      classic++;

      cena =
        classic * classicc +
        premium * premiumc +
        gold * goldc +
        king * kingc +
        pizza * pizzac +
        sok * sokc +
        cola * colac +
        pizzapiec * pizzapiecc;

      document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $`;
    }else if (classic % 3 == 2) {
      classic--;
      classic--;
      let classicDoProm = classic / 3;
      classic = classicDoProm * 2;
      classic++;
      classic++;

      cena =
        classic * classicc +
        premium * premiumc +
        gold * goldc +
        king * kingc +
        pizza * pizzac +
        sok * sokc +
        cola * colac +
        pizzapiec * pizzapiecc;

      document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $`;
    }
    promocjaTF++;
  } // Koniec instrukcji dla tyg3

  // -------------- Tygodniowa 3 + 1 gratis --------------

  if (tyg4 == true && classic >= 4) {
    if (classic % 4 == 0) {
        let classicDoProm = classic / 4;
        classic = classicDoProm * 3;
        cena =
          classic * classicc +
          premium * premiumc +
          gold * goldc +
          king * kingc +
          pizza * pizzac +
          sok * sokc +
          cola * colac +
          pizzapiec * pizzapiecc;
  
        document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $`;
      }else if (classic % 4 == 1) {
        classic--;
        let classicDoProm = classic / 4;
        classic = classicDoProm * 3;
        classic++;
  
        cena =
          classic * classicc +
          premium * premiumc +
          gold * goldc +
          king * kingc +
          pizza * pizzac +
          sok * sokc +
          cola * colac +
          pizzapiec * pizzapiecc;
  
        document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $`;
      }else if (classic % 4 == 2) {
        classic -= 2;
        let classicDoProm = classic / 4;
        classic = classicDoProm * 3;
        classic += 2;
  
        cena =
          classic * classicc +
          premium * premiumc +
          gold * goldc +
          king * kingc +
          pizza * pizzac +
          sok * sokc +
          cola * colac +
          pizzapiec * pizzapiecc;
  
        document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $`;
      }else if (classic % 4 == 3) {
        classic -=3;
        let classicDoProm = classic / 4;
        classic = classicDoProm * 3;
        classic += 3;
  
        cena =
          classic * classicc +
          premium * premiumc +
          gold * goldc +
          king * kingc +
          pizza * pizzac +
          sok * sokc +
          cola * colac +
          pizzapiec * pizzapiecc;
  
        document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $`;
      }
      promocjaTF++;
  } // Koniec instrukcji dla tyg4

  // -------------- Brak Promocji i wspolpracy --------------
  if (promocjaTF == 0) {
    cena =
      classic * classicc +
      premium * premiumc +
      gold * goldc +
      king * kingc +
      pizza * pizzac +
      sok * sokc +
      cola * colac +
      pizzapiec * pizzapiecc;

    document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $`;
  }
  promocjaTF = 0;
  // =--------------- Wypisanie faktury ---------------=

  // =--------------- Wypis Zestawów ---------------=
  if(classic > 0) {
    if(bahama == true) {
        document.getElementById("wklasyczne").innerHTML = `${liczbaclassic} x classic`
    }else if(blackmoon == true) {
        document.getElementById("wklasyczne").innerHTML = `${liczbaclassic} x classic (zniżka BM)`
    }else if(tyg == true && classic >= 2) {
        document.getElementById("wklasyczne").innerHTML = `${liczbaclassic} x classic (oferta tygodnia 2 za 2)`
    }else if(tyg2 == true && classic >= 3) {
        document.getElementById("wklasyczne").innerHTML = `${liczbaclassic} x classic (oferta tygodnia 3 za 3)`
    }else if(tyg3 == true && classic >= 3) {
        document.getElementById("wklasyczne").innerHTML = `${liczbaclassic} x classic (oferta tygodnia 2+1 gratis)`
    }else if (tyg4 == true && classic >= 4) {
        document.getElementById("wklasyczne").innerHTML = `${liczbaclassic} x classic (oferta tygodnia 3+1 gratis)`
    }else {
       document.getElementById("wklasyczne").innerHTML = `${liczbaclassic} x classic`
  }
    
    
    
    //document.getElementById("wklasyczne").innerHTML = `${classic} x classic`
  }
  
  if(premium > 0) {
    document.getElementById("wpremium").innerHTML = `${premium} x premium`
  }
  
  if (gold > 0) {
    document.getElementById("wgold").innerHTML = `${gold} x gold`
  }
  
  if (king > 0) {
    document.getElementById("wking").innerHTML = `${king} x king`
  }

  // =--------------- Wypis Pojedynczych rzeczy ---------------=

  if (pizza > 0) {
    document.getElementById("wpizza").innerHTML = `${pizza} x pizza`
  }

  if (sok > 0) {
    document.getElementById("wsok").innerHTML = `${sok} x sok pomaranczowy`
  }
  
  if (pizzapiec > 0) {
    document.getElementById("wpizzapiec").innerHTML = `${pizzapiec} x pizza z pieca`
  }
  if (cola > 0) {
    document.getElementById("wcola").innerHTML = `${cola} x cola`    
  }
}
  // =---------------  ---------------=
// cena = (classic * classicc) + (premium * premiumc) + (gold * goldc) + (king * kingc) + (pizza * pizzac) + (sok * sokc) + (cola * colac) + (pizzapiec * pizzapiecc);

//document.getElementById("wynik").innerHTML = `Wychodzi:  ${cena} $ $`;
