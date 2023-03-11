
let links = document.querySelectorAll('a');

// setting id for links using js 

links[0].id = 'forget' ;
links[1].id = 'sign' ;

// styling login btn

loginBtn.classList.add('btn');
loginBtn.classList.add('btn-primary');
loginBtn.classList.add('w-100');
loginBtn.classList.add('mb-4');

 
// control links

links.forEach(element =>{
    element.addEventListener('click' ,(e)=>{

        if(e.currentTarget.id == 'forget'){

            e.currentTarget.setAttribute('href' , 'http://localhost:3000/api/forgetPass')
            e.currentTarget.setAttribute('target' , '_blank')

        }else{

            links[1].setAttribute('href' ,'http://localhost:3000/api/signup/')
            links[1].setAttribute('target' , '_blank')
        }
    })
})




  
 

