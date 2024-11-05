let homCounter = 0;
let guestCounter = 0

function addH1() {
   homCounter += 1
   document.getElementById("homeCounter").innerText = homCounter
}

function addH2() {
   homCounter += 2
   document.getElementById("homeCounter").innerText = homCounter
}

function addH3() {
   homCounter += 3
   document.getElementById("homeCounter").innerText = homCounter
}

function addG1() {
   guestCounter += 1
   document.getElementById("guestCounter").innerText = guestCounter
}


function addG2() {
   guestCounter += 2
   document.getElementById("guestCounter").innerText = guestCounter
}

function addG3() {
   guestCounter += 3
   document.getElementById("guestCounter").innerText = guestCounter
}

function reset() {
   setWinner();
   homCounter = 0;
   guestCounter = 0;
   document.getElementById("homeCounter").innerText = homCounter
   document.getElementById("guestCounter").innerText = guestCounter

}

function setWinner() {
   let home = parseFloat(homCounter)
   let guest = parseFloat(guestCounter)

   const winnersList = document.getElementById("winnersList");
   const newEntry = document.createElement("p");

   if (home === guest) {
      newEntry.textContent = "Draw " + "(" + home + " - " + guest + ")";
   } else if (home > guest) {
      newEntry.textContent = "Home " + "(" + home + " - " + guest + ")";
   } else {
      newEntry.textContent = "Guest " + "(" + home + " - " + guest + ")";
   }

   winnersList.appendChild(newEntry);
}