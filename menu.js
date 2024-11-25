//Menu App 

//created a class that is Pokemon
    //name of pokemon as well as their type is needed

class Pokemon {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

//class Menu 

class Menu {
    constructor() {
    //pokemon array will act as the data base of a 
    // pokedex left blank for the user will add the 
    //pokemon in the menu
        this.Pokemon=[];  
    }


    //add pokemon
    //prompt for a name 
    //prompt for a type 
    //state pokemon and type then push into array

addPokemon() {
    let pokemonName = prompt("Enter Pokemon name:");
    let pokemonType = prompt("Enter Pokemon type:");
    this.Pokemon.push(new Pokemon(pokemonName, pokemonType));
    }

    //delete pokemon by index location in array or 
    //pokedex

deletePokemon() {
    let pokemonIndex = prompt("Enter Pokemon index to DELETE:");
    this.Pokemon.splice(pokemonIndex, 1);
}

    //view pokemon name & type with index location

viewPokemon(){
    let displayPokemon = "";
    for (let i = 0; i < this.Pokemon.length; i++) {

        displayPokemon += `
        ${i}) ${this.Pokemon[i].name} ${this.Pokemon[i].type}`
    }

    alert(`
        Pokedex: 
        --------------------------
        ${displayPokemon}
        `);
    }

        //see pokedex or main menu , give options to
        //navigate menu and interact with

showMainMenu(){
    return prompt(` 
    Pokedex Menu: 
    -----------------------
    0) Exit Pokedex
    1) Add Pokemon
    2) Delete Pokemon
    3) View All Pokemon
`);
}

    //start the pokedex menu , any option that is not
    //given on menu will restart menu 

start(){
    let selection = this.showMainMenu();

    while(selection != 0) {
        switch(selection) {

            case "1": this.addPokemon(); 
            break;

            case "2": this.deletePokemon();
            break; 

            case "3": this.viewPokemon(); 
            break; 

            default: selection = 0;
        } 
        selection = this.showMainMenu();
    } 
  alert("Exiting Pokedex .. goodbye!"); 
}

}

//instantiate the pokedex or menu and invoke 
//the start method 


let menu = new Menu(); 

menu.start();