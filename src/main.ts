import * as $ from "jquery"
class SweetSweetBasil{
	color: string;
	constructor(name:string, startColor:string){
		console.log("Hey " + name)
		this.color = startColor
	}
	getColor(){
		console.log(this.color)
	}
}

let basil = new SweetSweetBasil("Worlds", "red")
basil.getColor()
console.log(basil.color)

class Basil extends SweetSweetBasil{
	constructor(name:string, startColor: string){
		super(name, startColor)
	}
	setNewColor(newColor:string){
		this.color = newColor
	}
}

let basil2 = new Basil("newBasilName", "colorful")
basil2.getColor()
basil2.setNewColor("Orange")
basil2.getColor()

import {MustHaveCoffee} from './coffee/getcoffee'

class ReallyCoffee extends MustHaveCoffee{
	constructor(){super()}
	show (input: boolean){
		let a = 100
		if (input){
			let b = 1010
			return b;
		}
		return a;
	}
	setCoffeeType(name: string){
		super.setCoffeeType(name)
		console.log("Hey there " + name)
	}
	setBackgroundColor(){
		$("body").css('background-color', 'lightgrey')
	}
}
let newCoffee = new ReallyCoffee()
console.log(newCoffee.show(true))
newCoffee.setCoffeeType("bullet proof")
newCoffee.setBackgroundColor()
let oldCoffee = new MustHaveCoffee()
