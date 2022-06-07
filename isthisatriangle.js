// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

function isTriangle(a,b,c){
    if( (a+b)>c && (a+c)>b && (b+c)>a ){
        return console.log(`${true}: The sides ${a}, ${b}, ${c} can form a triangle`)
    } else {
        return console.log(`${false}: The sides ${a}, ${b}, ${c} can NOT form a triangle`)
    }
}
isTriangle(1,2,2)
console.log('=====')
isTriangle(7,2,2)