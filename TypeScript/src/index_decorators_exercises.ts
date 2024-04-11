// Exercise 1: Create a decorator for adding a sauce to Pizza instances:
// @Sauce('pesto')
// class Pizza {}

// In the above example, all instances of the Pizza class should have a sauce property set 
// to pesto. 

// Solution 1
function Sauce(sauce: string) {
    return (constructor: Function) => {
        constructor.prototype.sauce = sauce;
    }
}

@Sauce('pesto')
class Pizza {}