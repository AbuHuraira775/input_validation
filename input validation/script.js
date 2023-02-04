let input = document.getElementById('input');
let password = document.getElementById('password');
let btn = document.getElementById('btn');
let paraerror = document.getElementById('paraerror')
let passerror = document.getElementById('passerror')



btn.addEventListener("click", (e)=>{

    e.preventDefault()

    console.log(`${input.value}`)
    console.log(`${password.value}`)
    paraerror.classList.remove('correct')

    
    function inputerror(message){
        
        paraerror.innerText = message
        return message
    }

    function passworderror(message){
        
        passerror.innerText = message
        return message
    }

    var passerr = 0
    var inperr = 0

    function inputValidate(){
        
       

        if(input.value == ""){
            input.classList.add('active')
            input.classList.remove('success')
            paraerror.classList.add('show')
            inputerror('input name')
            inperr++
        }
        else if(input.value.length<3){
            
            input.classList.add('active')
            input.classList.remove('success')
            inputerror('at least 3 characters')
            paraerror.classList.add('show')
            input.value = ""
            inperr++
        }
        
        
        for(var i=0; i<=input.value.length;i++){

   
            if(input.value[i] === '!' || input.value[i] === '.' || 
               input.value[i] === '*' || input.value[i] === '$' || 
               input.value[i] === '#' || input.value[i] === '-' || 
               input.value[i] === '_'){

               input.classList.add('active')
               input.classList.remove('success')
               inputerror('no specrial character is allowed')
               paraerror.classList.add('show')
               input.value = ""
               inperr++
               break

             }
             
         }

         for(var i=0; i<=input.value.length;i++){

   
            for(var j=0; j<=9; j++){
                if(input.value[i] == j ){

                    input.classList.add('active')
                    input.classList.remove('success')
                    inputerror('Number is not allowed')
                    paraerror.classList.add('show') 
                    input.value = ""
                    inperr++
                    break
                  }
            }           
         }
  
        if (inperr == 0){
            input.classList.add('success')
            input.classList.remove('active')
            input.value = ""
            paraerror.classList.remove('show')
            
        }
    }


    function passwordValidate(){


              
                if(password.value == ""){
                    password.classList.add('active')
                    password.classList.remove('success')
                    passerror.classList.add('show')
                    passworderror('empty')
                    passerr++
                }
                else if(password.value.length<8){
                    
                    password.classList.add('active')
                    password.classList.remove('success')
                    password.value = ""
                    passerror.classList.add('show')
                    passworderror('at least 8 characters')
                    passerr++
        }

                else if(password.value[0] == " "){
                    
                    password.classList.add('active')
                    password.classList.remove('success')
                    password.value = ""
                    passerror.classList.add('show')
                    passworderror('no space if allowed before password')
                    passerr++
                }

                else{
                    
                    password.classList.add('success')
                    password.classList.remove('active')
                    password.value = ""
                    passerror.classList.remove('show')

                }

                if(inperr == 0 && passerr == 0){
                    btn.classList.add('btn')
                }
    }

    
   inputValidate()

   passwordValidate()

})

