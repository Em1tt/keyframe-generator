class CSSKeyframeGen {
    constructor(name, radius, steps,  offsetX, offsetY, rotation){
        this.name = name;
        this.radius = radius;
        this.steps = steps;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.rotation = rotation;
        
        this.coordinates = [];

        for (let i=0; i<this.steps+1; i++) { //+1 because we want it to return to original position;
            const alphaRad = 2*Math.PI/this.steps*i;
            const a = Math.sqrt(2 - 2 * Math.cos(alphaRad))*this.radius*this.rotation;
            const height = a/this.radius * Math.sqrt(Math.pow(this.radius,2) - Math.pow(a,2)/4);
            const b = Math.sqrt(Math.pow(a,2)-Math.pow(height,2));
            this.coordinates.push([(b+this.offsetX),(( this.steps/2 > i?1:-1) * height+this.offsetY)]); //Detect half of animation, invert Y value so the animation doesn't loop back the same way around
        };
        this.kf = `@keyframes ${this.name}{${this.coordinates.map((v,i) => {
            return `${Math.floor(100/(this.coordinates.length-1)*i)}%{transform: translate(${v[0]}px, ${v[1]}px);}`;
        }).join("")}}`;
    }

    get keyframe() {
        return this.kf;
    }

    get coords(){
        return this.coordinates;
    }

    write(){
        let styleSheet = document.createElement('style');
        document.head.appendChild(styleSheet);
        styleSheet.sheet.insertRule(this.kf);
        return styleSheet;
    }
}
