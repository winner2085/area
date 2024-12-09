function area(shape, measure1, measure2){           //parenthesis = variables in fuction
    if(shape === "rectangle"){
        return measure1 * measure2;
    }else if(shape === "triangle"){
        return 0.5 * measure1 * measure2;
    }else if (shape === "circle"){
        return Math.PI * measure1^2;
    }else{
        return "Shape not recognized";
    }
}

console.log(area("rectangle", 10, 5));               //arguments = assign parameters / variables in line 1
console.log(area("triangle", 4,7));
console.log(area("circle", 10));