function passGen(lett){
   
    console.log(lett)

    if(!isNaN(lett) && lett <= 18){
        
        let comb = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
        let pass = "";  

        for( i = 1; i<=lett; i++){
            pass += comb.charAt(Math.floor(Math.random()*comb.length));
        }

        document.passGenerator.output.value = pass;
        console.log(pass);

    } else{
        document.getElementById("letterError").innerHTML = "Only numbers less than 18 allowed!!";
    }
}
