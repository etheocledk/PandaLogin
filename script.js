let inputText=document.querySelector('.panda__formulaire__username div input[type=text]')
if(inputText){
    inputText.addEventListener('click', (e)=>{
        console.log('kjdsguy');
        let eyeShow=document.querySelectorAll('.eye-show')
        eyeShow.forEach(item =>{
            if(!item.classList.contains('active')){
                item.classList.add('active')
            }
        }) 
        e.stopPropagation()
    })

    document.addEventListener('click', (e)=>{
        let eyeShow=document.querySelectorAll('.eye-show')
        eyeShow.forEach(item =>{
            if(item.classList.contains('active')){
                item.classList.remove('active')
            }
        }) 
        
     }) 
}


 let inputPassword=document.querySelector('.panda__formulaire__password input[type=password]')
if(inputPassword){
    inputPassword.addEventListener('focusin', (e)=>{
        let pandaHand=document.querySelector('.panda__hand')
        let pandaHandLeft=document.querySelector('.panda__hand.left')
        let pandaHandRight=document.querySelector('.panda__hand.right')
        if(!pandaHand.classList.contains('active') && !pandaHandLeft.classList.contains('active') && !pandaHandRight.classList.contains('active') ){
            pandaHand.classList.add('active') 
            pandaHandLeft.classList.add('active') 
            pandaHandRight.classList.add('active')
            e.stopPropagation()
        } 
    })

     document.addEventListener('focusin', (e)=>{
       let elementactive=document.querySelectorAll('.active')
       elementactive.forEach(item =>{
        if(!item.contains(e.target)){
            item.classList.remove('active')
        }
       })
    }) 

} 