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

import {MustHaveCoffee} from './src/coffee/getcoffee'

let oldCoffee = new MustHaveCoffee()