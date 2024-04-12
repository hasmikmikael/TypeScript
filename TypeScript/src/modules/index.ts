import { Sphere } from "./shapes";

let sphere = new Sphere(1);
console.log(sphere.radius);

//------Default Exports--------
import Store, { Format } from "./storage";

//------Wildcard Imports-------------
//import { Sphere, Square } from "./shapes";
import * as Shapes from "./shapes";

let square = new Shapes.Square(1);