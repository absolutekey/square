
// function myFunction() {
//     var x = document.querySelectorAll("p.example");
//     x[0].style.backgroundColor = "red";
//   }
// function array2DSquare(){
//     console.log = "fuck";
//     var points, x, div;
//     points = [];   
//     for ( var a = 0; a<5; a++ ) {
//         points[a] = x = [];
//         for ( var b = 0; b<5; b++ ) { 
//             // do something with Array[y][x]
//             console.log = a;
//             console.log = b;
//             points[a][b] = div = document.createElement('div');
//             div.className = "a"+a+"b"+b;
//             div.id = "a"+a+"b"+b;
//         }
//      }    
// }

function array2DSquareX() {
    "use strict";
    var i, j, mainCube, a, div, elements;
    elements = document.querySelectorAll(".mainSquareClass");
    mainCube = [];
    for (i = 0; i < elements.length; ++i) {
        mainCube[i] = a = [];
        for (j = 0; j < elements.length; ++j) {
            // Create this div
            mainCube[i][j] = div = document.createElement('button');
  
            // Add class and such to div
            div.className = "Square";
            div.id = "a"+i+"b"+j;
  
            // Append it to the mainCubeClass element
            elements[i].appendChild(div);
        }
    }

}
function addX(x){
    var main,elements,i;
    // array2Dvalue = [];
    // for (var i = 0; i < x; i++) {
    //     for (var j = 0; j < x; j++){
    //         array2Dvalue[i][j] = 0; 
    //     }
    // }
    // console.log(array2Dvalue);
    
    if(x > 9){
        x = 9;
    }else if(x<2){
        x = 2;
    }else if(1< x && x <10){

    }else{
        x = 9;
    }
    
    elements = document.querySelectorAll(".mainSquareClass");
    // main = document.getElementById("main");
    changeWH(x);
    if(elements.length == 0)
    {
        for ( var i = 0; i < x; i++) {
            main = document.createElement("div");
            main.className = "mainSquareClass";
            document.getElementById("main").appendChild(main);
        }
        array2DSquareX();
    }else{

    }
     
    check();
}
function changeWH(x){
    var m = 100;
    document.getElementById("main").style.width = x*m+"px";
    document.getElementById("main").style.height = x*m+"px";

}
function check(){
    window.onclick = e => {// nhận event click
        if(e.target.className == "Square" || e.target.className == "Square SquareX"){//event click của 2 loại div
            var a1 = document.getElementById(e.target.id); //lấy phần tử được click bằng id
                let a = a1.id.slice(1,2);//cắt id a - 1 chữ
                let b = a1.id.slice(3,4);//cắt id b - 1 chữ
                let c = parseInt(a) + 1;
                let d = parseInt(b) + 1;
            var a2 = document.getElementById("a"+c+"b"+b);//vị trí của 3 nút quanh a1
            var a3 = document.getElementById("a"+a+"b"+d);
            var a4 = document.getElementById("a"+c+"b"+d);

            if(a1.value == 0 && a2.value == 0 && a3.value == 0 && a4.value == 0){// khi 4 vị trí đều có giá trị 0 thực hiện các lệnh
                console.log(e.target.id);  // to get the element
                    a1.classList.add("SquareX");//Thêm class SquareX vào classList 
                    a1.value = 1;//gán value của a1 = 1
                    a2.classList.add("SquareX");
                    a2.value = 2;//gán value của a2 = 2, khi ấn vào nơi có giá trị 2 thì không có gì diễn ra cả
                    a3.classList.add("SquareX");
                    a3.value = 2;//gán value của a3 = 2
                    a4.classList.add("SquareX");
                    a4.value = 2;//gán value của a4 = 2
                console.log(a1.value);//hiện value a1 lên console.log
                // console.log(a);
                // console.log(b);
            }else if(e.target.value == 1){//hoặc không nếu value của điểm được click = 1 thì thực hiện các lệnh
                console.log(e.target.id);  // to get the element
                    a1.classList.remove("SquareX");//lấy đi class SquareX trong classList 
                    a1.value = 0;//gán giá trị = 0
                    a2.classList.remove("SquareX");
                    a2.value = 0;
                    a3.classList.remove("SquareX");
                    a3.value = 0;
                    a4.classList.remove("SquareX");
                    a4.value = 0;
                console.log(a1.value);
                // changeV(x,e.target.id);
            }
        }
    }
}

function addY(x){
    var main,elements,i;
    // array2Dvalue = [];
    // for (var i = 0; i < x; i++) {
    //     for (var j = 0; j < x; j++){
    //         array2Dvalue[i][j] = 0; 
    //     }
    // }
    // console.log(array2Dvalue);
    
    if(x > 9){
        x = 9;
    }else if(x<2){
        x = 2;
    }else if(1< x && x <10){

    }else{
        x = 9;
    }
    
    elements = document.querySelectorAll(".mainSquareClass");
    // main = document.getElementById("main");
    changeWH(x);
    if(elements.length == 0)
    {
        for ( var i = 0; i < x; i++) {
            main = document.createElement("div");
            main.className = "mainSquareClass";
            document.getElementById("main").appendChild(main);
        }
        array2DSquareY();
    }else{

    }
     
    checkY();
}
function array2DSquareY() {
    "use strict";
    var i, j, mainCube, a, div, elements;
    elements = document.querySelectorAll(".mainSquareClass");
    mainCube = [];
    for (i = 0; i < elements.length; ++i) {
        mainCube[i] = a = [];
        for (j = 0; j < elements.length; ++j) {
            // Create this div
            mainCube[i][j] = div = document.createElement('button');
  
            // Add class and such to div
            div.className = "Square2";
            div.id = "a"+i+"b"+j;
  
            // Append it to the mainCubeClass element
            elements[i].appendChild(div);
        }
    }

}

function checkY(){
    window.onclick = e => {// nhận event click
        if(e.target.className == "Square2" || e.target.className == "Square2 SquareY"){//event click của 2 loại div
            var a1 = document.getElementById(e.target.id); //lấy phần tử được click bằng id
                let a = a1.id.slice(1,2);//cắt id a - 1 chữ
                let b = a1.id.slice(3,4);//cắt id b - 1 chữ
                let c = parseInt(a) + 1;
                let d = parseInt(b) + 1;
            var a2 = document.getElementById("a"+c+"b"+b);//vị trí của 3 nút quanh a1
            var a3 = document.getElementById("a"+a+"b"+d);
            var a4 = document.getElementById("a"+c+"b"+d);

            if(a1.value == 0 && a2.value == 0 && a3.value == 0 && a4.value == 0){// khi 4 vị trí đều có giá trị 0 thực hiện các lệnh
                console.log(e.target.id);  // to get the element
                    a1.classList.add("SquareY");//Thêm class SquareY vào classList 
                    a1.value = 1;//gán value của a1 = 1
                    a2.classList.add("SquareY");
                    a2.value = 2;//gán value của a2 = 2, khi ấn vào nơi có giá trị 2 thì không có gì diễn ra cả
                    a3.classList.add("SquareY");
                    a3.value = 2;//gán value của a3 = 2
                    a4.classList.add("SquareY");
                    a4.value = 2;//gán value của a4 = 2
                console.log(a1.value);//hiện value a1 lên console.log
                // console.log(a);
                // console.log(b);
            }else if(e.target.value == 1){//hoặc không nếu value của điểm được click = 1 thì thực hiện các lệnh
                console.log(e.target.id);  // to get the element
                    a1.classList.remove("SquareY");//lấy đi class SquareY trong classList 
                    a1.value = 0;//gán giá trị = 0
                    a2.classList.remove("SquareY");
                    a2.value = 0;
                    a3.classList.remove("SquareY");
                    a3.value = 0;
                    a4.classList.remove("SquareY");
                    a4.value = 0;
                console.log(a1.value);
                // changeV(x,e.target.id);
            }
        }
    }
}

// function changeV(x,n){
//     for ( var i = 0; i<x; i++ ) {
//         console.log("1");
//         for ( var j = 0; j<x; j++ ) {
//             console.log("2");
//             a = i+1;
//             b = j+1;
//             c = i-1;
//             d = j-1; 
//             if("a"+i+"b"+j == n){
//                 console.log("e");
//                 if(array2Dvalue[i][j] = 1){
//                     //vị trí giữa = 1
//                     document.getElementById("a"+i+"b"+j).classList.remove("SquareX");
//                     array2Dvalue[i][j] = 0;
//                     document.getElementById("a"+a+"b"+j).classList.remove("SquareX");
//                     array2Dvalue[a][j] = 0;
//                     document.getElementById("a"+i+"b"+b).classList.remove("SquareX");
//                     array2Dvalue[i][b] = 0;
//                     document.getElementById("a"+a+"b"+b).classList.remove("SquareX");
//                     array2Dvalue[a][b] = 0;
//                 }else if(array2Dvalue[i][j] == 0 && array2Dvalue[a][j] == 0 && array2Dvalue[i][b] == 0 && array2Dvalue[a][b] == 0){
//                     document.getElementById("a"+i+"b"+j).classList.add("SquareX");
//                     array2Dvalue[i][j] = 1;
//                     document.getElementById("a"+a+"b"+j).classList.add("SquareX");
//                     array2Dvalue[a][j] = 2;
//                     document.getElementById("a"+i+"b"+b).classList.add("SquareX");
//                     array2Dvalue[i][b] = 2;
//                     document.getElementById("a"+a+"b"+b).classList.add("SquareX");
//                     array2Dvalue[a][b] = 2;
//                 }
//             }
//         }
//      }
// }
