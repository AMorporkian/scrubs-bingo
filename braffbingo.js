let usedItems = []
const items = [
  "Bill says 5, 6, 7, 8!",
  "Zach says 'that's funny'",
  "Donald uses his Opera voice",
  "The guest is a healthcare worker",
  "Trevor is called upon for his expertise",
  "Donald talks about Booty",
  "The theme song is begun more than 5 times",
  "Zach says 'Another one'",
  "Zach namedrops two celebrities within 30 seconds",
  "Donald 'quits' using marijuana",
  "Zach mentions gluten-free beer",
  "Donald obsesses over Johnny C.'s physique",
  "Zach says 'now here's the thing...'",
  "Donald talks about his teeth",
  "Donald complains about not being in Garden State",
  "Zach brags about how well he can do a prattfall",
  "A guest is interrupted by an animal, co-worker, or family member",
  "Dan screws up the audio with a guest",
  "Zach doesn't watch a movie he promised to watch",
  "The term banana hammock is used",
  "Donald talks about how much he fucked up his audtion",
  "Donald talks to Zach about a movie he hasn't watched",
  "Season 9 is mentioned",
  "Donald finds a new favorite flavor of GT's Kombucha",
  "Zach finds a new favorite flavor of GT's Kombucha",
  "Donald mentions Star Wars",
  "Donald and Joelle talk about Star Wars for more than 2 minutes",
  "Zach berates Dan",
  "Zach and/or Donald talk about how they're going to need to cut this",
  "Zach forgets that weed is legal now",
  "Donald leaves for a significant period of time",
  "Donald talks about the different kinds of butts there are",
  "Ralph Machio makes an appearance",
  "Dan makes an apperance",
  "Trevor, the wiki master, makes an appearance",
  "Zach refuses to ask Bill to avoid a 5, 6, 7, 8",
  "Donald's package is mentioned",
  "Some portion of 'Guy Love' is sung",
  "Donald and Zach discuss docking"
]
function newBingo() {
  usedItems = []
	for(let i=0; i < 24; i++) {
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	let currSquare = "square"+thisSquare;
  let newItem = getNewItem();
  if (usedItems[newItem]) {
    setSquare(thisSquare)
  } else {
  usedItems[newItem] = true;
  const el = document.getElementById(currSquare);
  el.innerHTML = items[newItem];
  el.classList.remove("selected")  
  }
  
}

function getNewItem() {
	return Math.floor(Math.random() * items.length);
}

function anotherCard() {
	for(let i=1; i<usedItems.length; i++) {
	usedItems[i] = false;
	}
	
	newBingo();
}
function choose() {
  let index = Math.floor(Math.random() * items.length);
  return items[index];
}

function setSelected(el) {
  if (el.srcElement.classList.contains("selected")) {
    el.srcElement.classList.remove("selected")
  } else {
    el.srcElement.classList.add("selected")
  }
}

document.addEventListener("DOMContentLoaded", function(){
  newBingo();
  const boxes = document.getElementsByClassName("bingoBox");

  for (let i=0; i<boxes.length; i++) {
    boxes[i].addEventListener("click", i=>setSelected(i));
    boxes[i].addEventListener("tap", i=>setSelected(i));
  };
});