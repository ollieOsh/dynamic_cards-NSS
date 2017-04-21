var newStuff = document.getElementById('newStuff'),
	create = document.getElementById('create'),
	text = document.getElementById('txt'),
	ugh = document.getElementsByClassName('delete');
	num = 0;

function make() {
	var newCard = document.createElement('div'),
	newId = "new" + num,
	crd = "card" + num,
	del = "delete" + num;

	newCard.id = newId;
	newCard.innerHTML = `<div class='card' id="${crd}">
							<h3>${text.value}</h3>
						</div>
						<button class='delete' id='delete${num}'>*Delete*</button>`;

	newStuff.appendChild(newCard);

	document.getElementById(del).onclick = function(){
		newStuff.removeChild(document.getElementById(newId));
	};

	num++;
}


create.onclick = make;