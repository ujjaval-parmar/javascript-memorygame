const resetBtn = document.querySelector('.reset');



let emojis = ['😀', '😀', '😂', '😂', '😉', '😉', '😍', '😍', '😎', '😎', '😡', '😡', '😈', '😈', '🤑', '🤑'];
       
let surfEmojis = emojis.sort(()=> ((Math.random())>0.5) ? 2 : -1);

// console.log(surfEmojis);

surfEmojis.forEach((emoji, i)=>{
    let box = document.createElement('div');
    box.classList.add('item');
    box.innerHTML = surfEmojis[i];



    box.onclick = function(){
        this.classList.add('box-open');
        // console.log(this);
        const openEmojis = document.querySelectorAll('.box-open');
        // console.log(openEmojis);
        
        setTimeout(function(){
            console.log(openEmojis);
            if(openEmojis.length > 1){

                if(openEmojis[0].innerHTML === openEmojis[1].innerHTML){
                   openEmojis[0].classList.add('box-match') ;
                   openEmojis[1].classList.add('box-match') ;

                   openEmojis[0].classList.remove('box-open') ;
                   openEmojis[1].classList.remove('box-open') ;
                    
                    

                    const matchEmojis = document.querySelectorAll('.box-match');
                    // console.log(matchEmojis);

                    if(matchEmojis.length === emojis.length){
                        alert('WIN');
                    }
                    

                }else{
                    // console.log(openEmojis);
                    openEmojis[0].classList.remove('box-open') ;
                    openEmojis[1].classList.remove('box-open') ;
                }
            }
        },500)
    }


    document.querySelector('.game').appendChild(box);
})





resetBtn.addEventListener('click', function(){
    window.location.reload();
})