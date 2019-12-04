//write first method
function firstLast6(arr) {
    var num = false;
    for(var i = 0; i < arr.length; i ++){
        if(arr[i] == 6){
            if(i == 0 || i == arr.length - 1){
              num = true;
            }
        }
    }
    return num;
}


function has23(arr){
    for(var i = 0; i < arr.length; i ++){
        if(arr[i] == 2 || arr[i] == 3){
            return true;
            }

    }
    return false;
}

function fix23(arr) {
    for(var i = 0; i < arr.length - 1; i++){
        if(arr[i] == 1 || arr[i +1] == 3){
            arr[i + 1] = 0
        }
    }
    return arr;
}


function countYZ(str){
    var num = 0;
    str = str.toLowerCase();
    for(var i = 0; i < str.length-1; i++){
        if(str[i] == " "){
            if(str[i-1] == "y" || str[i-1] == "z"){
                num = num + 1;
            }
        }
    }
    if(str[str.length-1] == "y" || str[str.length-1] == "z"){
        num = num + 1;
    }
    return num;
}


function endOther(str1, str2){
    var num = false;
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    for(var i = 0; i < str1.length-1; i++){
        if(str1[str1.length-3] == str2[str2.length-3]){
                num = true;
            }
        }
        if(str1[str1.length-2] == str2[str2.length-2]){
            num = true;
        }
        if(str1[str1.length-1] == str2[str2.length-1]){
            num = true;
        }
    return num;
}


function starOut(str){
    var num = "";
    str = str.toLowerCase();
    for(var i = 0; i <str.length; i++){
        if(str[i] != "*" && str[i+1] != "*" && str[i-1] != "*"){
            num = num + str[i]
        }
    }
    return num;
}


function getSandwich(str){
    var num = "";
    var bread = str.indexOf("bread");
    var bread2 = str.lastIndexOf("bread");
    if(bread != bread2){
        num += str.substring(bread + 5, bread2);
    }
    return num;
}

function canBalance(arr){
    var outsideSum = 0;
    var insideSum = 0;
    for(var i = 0; i<arr.length; i++){
        outsideSum += arr[i];
        for(var a = i+1; a<arr.length; a++){
            insideSum += arr[a];
        }
        if(outsideSum==insideSum){
            return true;
        }
        insideSum = 0;
    }
    return false;
}

function countClumps(arr){
    var num = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i-1] == arr[i] && arr[i] != arr[i+1]){
            num += 1
        }
    }
    return num;
}

function evenlySpaced(int1, int2, int3){
    if(Math.abs(int2-int1) == Math.abs(int3 - int2)){
        return true;
    }
    if(int1-int3 == int2 - int1){
        return true;
    }
    if(int3-int2 == int1 - int3){
        return true;
    }else{
        return false;
    }
}



//write second method
function monkey_trouble(param1, param2) {
    return param1;
}

//add 2-10 below here...

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += firstLast6(1, 2, 6);
    document.getElementById("output").innerHTML += has23(2, 5);
    document.getElementById("output").innerHTML += fix23(1, 2, 3);
    document.getElementById("output").innerHTML += countYZ("fez day");
    document.getElementById("output").innerHTML += endOther("Hiabc", "abc");
    document.getElementById("output").innerHTML += getSandwich("breadjambread");
    document.getElementById("output").innerHTML += canBalance(1,1,1,2,1);
    document.getElementById("output").innerHTML += countClumps(1,1,1,1,1);
    document.getElementById("output").innerHTML += evenlySpaced(2, 4, 6);
    //test third method, etc
}
