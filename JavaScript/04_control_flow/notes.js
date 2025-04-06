// js is single threaded
// jab js file banti hai tab Global exectuion context banta hai aur usse refer kiya jata hai this keyword se
// Fumction execution context banta hai jab function call hota hai
// Eval execution context bhi reheta hai just banta hona chahiye
// js code 2 phases me run hota hai
// 1. Creation phase - memory creation phase - memory allocation hota hai sirf
// 2. Code execution phase - code run hota hai
//-------------------------------------------------------------------------------------
// 1. sabse phele jo js ka code hai vo global execution me run hota hai
// aur uss global execution ko allote kiya jata hai 'this' se

// 2. Memory phase me sirf memory allocate hoti hai aur uss memory me variables aur functions ka reference hota hai
// isko 1st cycle kehte hai, ye hoga hi hoga

// 3. Execution phase me code run hota hai aur uss time pe jo bhi function call hota hai uska execution context banta hai
// aur uss context ke andar new variable environment + execution thread banta hai
// aur uss context ke liye memory phase aur exection phase dono bante hai
// context ka kaam hone ke baad vo detele hota hai

// call stack me sabse pehle global execution context hota hai
// jab bhi koi function call hota hai to vo call stack me push hota hai aur jab function ka kaam ho jata hai to vo pop hota hai
