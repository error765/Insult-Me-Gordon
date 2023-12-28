let fw = ["Lamb Sauce","Chicken","Gravy","Soup","Lamb Chop","Spinnach","Spagetti","Quail","Risotto","Egg"]
let tw = ["Absoulute Donkey","Dirtry Pig","Toilet Brush","Walnut","Disgrace","Idoit Sandwich","Yankee Doodle Donkey","Lazy Cow","Muppet","Donut"]
let sw = ["like dog food scraps","RAW RAW RAW RAW","Half Dead","like a rubber implant","like gandhis flip flop","pinker than the panther","practically cremated","offensive","like a door stop","like wet cardboard","in need of jesus","like toxic scum",]
function start(){
document.getElementById("output").innerHTML = "This " + fw[Math.floor(Math.random() * 9)] + " is " + sw[Math.floor(Math.random() * 12) + 1] + " you " + tw[Math.floor(Math.random() * 9)] + "!"
}