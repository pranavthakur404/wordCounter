let data = document.getElementById('input');
let word = document.getElementById('word');
let ch = document.getElementById('char');
data.addEventListener('input',function(){
    // character
     let value = this.value;
     ch.innerHTML = value.length;

    //  word
    value = value.trim();
    let w = value.split(' ');
    let cleanList = w.filter(function(elm){
          return elm !="";
    });

    
    word.innerHTML = cleanList.length;
})