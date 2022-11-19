# css-animation-generator  
  
This code will generate a CSS keyframe for when you want to move an HTML element around in a circle, triangle, square, etc.  

> script.js
```js
const kframe = new CSSKeyframeGen("aniOne", 20, 16, 0, 0, 1);

console.log(kframe.keyframe); //Prints the generated keyframe
console.log(kframe.coords); //Prints out the coordinations for every point of the path relative from its current position in pixels;
kframe.write(); //Appends the keyframe to the head tag
```
> style.css
```css
element{
  animation: 1s ease aniOne infinite;
}
```  
  
<hr>  

> SYNTAX:  
```js
new CSSKeyframeGen(Name, Radius, Steps, OffsetX, OffsetY, Rotation);
```  
**Name:** string => The name you will reference with a CSS animation, in order to access the keyframe
**Radius**: integer => Value in pixels of the rotation radius  
**Steps**: integer => How many edges does the path have  
**OffsetX**: integer => Offset on the X axis  
**OffsetY**: integer => Offset on the Y axis  
**Rotation**: integer => 1 for counter-clockwise, -1 for clockwise  
  
Feel free to use this in any project, website, whether for personal or commercial use without giving me credit (if anyone even finds this useful)  
  
Any suggestions for extensibility are welcome in the issues folder of this repository.
