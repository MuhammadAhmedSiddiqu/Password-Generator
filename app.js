function generatePasswordUpperCase(){
    var char = "QHUYTWRWERTYUIOPLKJHGFDSAZZZZZZZMNBVCXZ";
    var password = " " ; 
        for( var i = 0 ; i < 12 ; i++){
         randomNum = Math.floor(Math.random() * char.length);
         password  += char[randomNum]
        }
        document.getElementById("main").value = password;
}
 

function generatePasswordlowerCase(){
    var char2 = "qwertyuiopasdfghjklzxcvbnm";
    var password2 = " " ; 
        for( var i = 0 ; i < 12 ; i++){
         randomNum2 = Math.floor(Math.random() * char2.length);
         password2  += char[randomNum2]
        }
        document.getElementById("main2").value = password2;
}
  
