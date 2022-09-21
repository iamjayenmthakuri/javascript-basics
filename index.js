// encapsulation
// Abstraction
// inheritance
// polumorphism

// factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);

// constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// functions are object in JavaScripts

const Circle1 =new Function('radius',`
this.radius =radius;
this.draw = function(){
    console.log('draw');
}`
);
Circle.call({window},1);
Circle.apply({},[1,2,3]);
const another = new Circle1();

const Circle =new Circle(1);

// constructor property
let x = {};
// let x = new object();

new String(); // '', "", ``
new Boolean(); // true, false
new Number();  // 1,2,3,...


// value Types 
let x ={value: 10};
let y = x;
x.value= 20;


let number =10;
function increase(number);{
number++;
}
increase(number);
console.log (number);






