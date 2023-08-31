let string = "";
window.addEventListener('load',bind);
function bind(){
      let buttons=document.getElementsByClassName('btn');
      Array.prototype.forEach.call(buttons, (button)=>{
            button.addEventListener('click', (e)=>{
            if(e.target.innerHTML == '='){
                  string = eval(string)
            }
            else if(e.target.innerHTML == 'X'){
                  string = string + '*';
            }
            else if(e.target.innerHTML == 'C'){
                  string="";
            }
            else{
            string = string + e.target.innerHTML;
            }
            document.querySelector('input').value=string;
      })
})
}