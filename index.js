class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter() {
        let total = 0
        for (let i = 0; i < this.sides.length; i++){
            total = total + this.sides[i]
        } 
        return total  
    }
}

class Triangle extends Polygon {
    get isValid(){
        if (!Array.isArray(this.sides)) return;
        if (this.countSides !== 3) return;
        let [side1, side2, side3] = this.sides
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        }
}

class Square extends Polygon {
    get isValid(){
        if (this.countSides !== 4) return;
        let [amount, ...rest] = this.sides
        for (let i = 0; rest.length; i++){
            if (amount == rest[i]){
                return true
            } else {
                return false
            }
        }
    }

    get area(){
        if (!Array.isArray(this.sides)) return;
        if (this.countSides !== 4) return;
        return this.sides[0] * this.sides[1]
    }
}