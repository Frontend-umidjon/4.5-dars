// ustoz bergan masalalar
// 1-masala
{
   arr = [10 ,20 ,-30 ,40 ,-50] 

   posArr = arr.filter(n => n > 0)

   console.log(posArr)
}

// 2-masala
{
    str = "frontend developer"
    arr = str.split(" ").map(l => l.charAt(0).toUpperCase() + l.slice(1)).join(" ") 
    console.log(arr)
}

// 3-masala
{
    num = 8999

    console.log(num.toString().split("").reverse().join(""))
}

// 4-masala
{
    arr = [true , false , true ,false , true ,false , true ,false , true ,false]

    console.log(arr.filter(n => n === false))
}

// 5-masala
{
    arr = [1 , -2, -3 , 4 , 5]
    console.log(arr.filter(n => n > 0).reduce((a , b) => a + b));
    
}

// CODEWARS dagi masalalar

// 1-masala
{
    // berilaidgan arraydagi musbat sonlarni yig'indisini qaytaruvchi funksiya
    function positiveSum(arr) {
        return arr.filter(n => n > 0).reduce((a , b) => a + b,0);
       }
}

// 2-masala
{
    // berilgan stringda nechta unli harf borligini qaytaruvchi funksiya
    function getCount(str) {
        return str.split('').filter( vowel => 'aeiou'.includes(vowel)).length;
        
      }
}

// 3-masala
{
    // Booleanga qarab yes yoki no qaytaruvchi funksiya
    function boolToWord( bool ){
        if (bool === true){
          return "Yes"
        }
        else{
          return "No"
        }
      }
}

// 4-masala
{
    // berilgan sonning qarama qarshi sonini qaytaruvchi funksiya
    function opposite(number) {
        return number * -1
      }
}

// 5-masala
{
    // Agar son musbat bo'lsa uni manfiyga aks holda shunday qoldiradigan funksiya
    function makeNegative(num) {
        if (num < 0){
           return (num)
         }
         else if ( num === 0){
           return (num)
         }else {
           return (-num)
         }
       
     }
}

// 6-masala

{
    // stringni teskarisini qaytaruvchi funksiya
    function solution(str){
        return str = str.split("").reverse() .join("");
      }
}

// 7-masala

{
    // berilgan sonni stringga aylantiruvchi funksiya
    function numberToString(num) {
        return num.toString();
      }
}

// 8-masala
{ 
    // arraydagi sonlarni qaytaruvchi funksiya
    function filter_list(l) {
        return l.filter((n) => typeof n === 'number');
 
 }
}

// 9-masala
{
    // berilgan sonni toq yoki juft sonligini chiqaruvchi funksiya
    function evenOrOdd(number) {
        if (number % 2 === 0){
          return "Even"
        }else{
          return "Odd"
        }
      }
}

// 10-masala
{
    // oddiy return tushib qolgan funksiya
    function multiply(a, b){
        return a * b
      }
}

// Biroz berilib ketganim uchun yana masala ishladim 

// 1-masala
{
    // s da keladigan stringni n marotaba qaytaruvchi funksiya
    function repeatStr (n, s) {
        return s.repeat(n)
      }
}

// 2-masala
{
    // berilgan stringni boshidagi va oxirgi belgini o'chiruvchi funksiya
    function removeChar(str){
        return str.slice(1, -1)
    }
    console.log(removeChar("Elzero"));
    

}

// 3-masala
{
    // berilgan arraydagi sonlarni kvadlatlarini yig'indisini qaytaradigan funksiya
    function squareSum(numbers){
        return numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
    }
    console.log(squareSum([2,2]));
    
}


