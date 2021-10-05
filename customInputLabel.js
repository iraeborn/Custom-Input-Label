const labels = document.querySelectorAll('#placeHolderCustom');

    labels.forEach(label => {
        
        label.setAttribute("style", "margin: 0.5rem;");

        if( !label.querySelector('label').getAttribute('id') ){
            label.querySelector('label').setAttribute('id', 'labelCustom');
            
        }

        label.addEventListener('keyup', () => {

            if(label.querySelector('input').value.length == 0){
                label.querySelector('label').setAttribute('id', 'labelCustom');
            }else{
                label.querySelector('label').setAttribute('id', 'labelCustomUp');
            }
        })
    })