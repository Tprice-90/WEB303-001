/*
    Assignment 5
    Terry Price #0622422
*/

$(document).ready(function(){
    // your code here
    
});

class ContentCard {
    id;
    name;
    role;
    description;

    constructor(id,title,description,category) {
        this.id = id;
        this.title = title;
        this.descirption = description;
        this.category = category;
    }

    updateContent(title,description,category) {
        this.title = title;
        this.descirption = description;
        this.category = category;
    }

    toString() {
        return `<div id='content-${this.id}' style="border:5px solid red"><h4>${this.title}</h4><p>${this.descirption}</p><div>${this.category}</div></div>`;
    }
}

let contentCardArray = [
    new ContentCard(0,"Dragonknight", "These skillfull masters-at-arms use the ancient Akaviri martial arts tradition of battle-spirit.", "Tank"),
    new ContentCard(1, "Nightblade", "Nightblades are adventurers and opportunists with a gift for getting in and out of trouble.", "DPS"),
    new ContentCard(2, "Sorcerer", "Sorcerers can summon and control weather phenomena - hurling lightning bolts and creating electircal fields", "DPS"),
    new ContentCard(3, "Templar", "These traveling knights call upon the power of light and the burning sun to deal massive damage to their enemies while restoring health", "Healer"),
    new ContentCard(4, "Necromancer", "Necromancers are masters of elemental damage that protect themselves with bone and flesh sheilds while buffing themselves with Living Death magic", "DPS")
];

let div = document.getElementById('content-list');
div.innerHTML = contentCardArray;
