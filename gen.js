let radius = 20;
let steps = 12;
let offsetX = -40;
let offsetY = 0;
let rotation = 1;

const coordinates = [];

for (let i = 0; i < 7; i++) {
    const alphaRad = 2*Math.PI/steps*i;
    console.log(alphaRad);
    const a = Math.sqrt(2 - 2 * Math.cos(alphaRad))*radius*rotation;
    const height = a/radius * Math.sqrt(Math.pow(radius,2) - Math.pow(a,2)/4);
    
    const b = Math.sqrt(Math.pow(a,2)-Math.pow(height,2));
    if(steps / 2 > i){
        coordinates.push([(b+offsetX),(height+offsetY)]);
    }else{
        coordinates.push([(b+offsetX),(-height+offsetY)]);
    }
}

for (let i = 1; i < 13; i++) {
    const alphaRad = 2*Math.PI/steps*i;
    console.log(alphaRad);
    const a = Math.sqrt(2 - 2 * Math.cos(alphaRad))*radius*-rotation;
    const height = a/radius * Math.sqrt(Math.pow(radius,2) - Math.pow(a,2)/4);
    
    const b = Math.sqrt(Math.pow(a,2)-Math.pow(height,2));
    if(steps / 2 > i){
        coordinates.push([(b+0),(height+offsetY)]);
    }else{
        coordinates.push([(b+0),(-height+offsetY)]);
    }
}
for (let i = 7; i < 13; i++) {
    const alphaRad = 2*Math.PI/steps*i;
    console.log(alphaRad);
    const a = Math.sqrt(2 - 2 * Math.cos(alphaRad))*radius*rotation;
    const height = a/radius * Math.sqrt(Math.pow(radius,2) - Math.pow(a,2)/4);
    
    const b = Math.sqrt(Math.pow(a,2)-Math.pow(height,2));
    if(steps / 2 > i){
        coordinates.push([(b+offsetX),(height+offsetY)]);
    }else{
        coordinates.push([(b+offsetX),(-height+offsetY)]);
    }
}

const keyframe = `@keyframes circle{${coordinates.map((v,i) => {
    return `${Math.floor(100/(coordinates.length-1)*i)}%{transform: translate(${v[0]}px, ${v[1]}px);}`;
}).join("")}}`;

console.log(keyframe);

styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
document.head.appendChild(styleSheet);

styleSheet.sheet.insertRule(keyframe);