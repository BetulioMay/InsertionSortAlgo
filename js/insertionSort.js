
function insertionSort(arr) {
    var aux;
    var clave;

    var mainElement;
    var secondaryElement;


    $('.flex-item').toggle('fast');


    setTimeout(function(){
        for(let i = 1; i < arr.length; i++) {
    
            clave = i;
            
            for(let j = i-1; j >= 0; j--) {
                if(parseInt(arr[clave].getElement()) <= parseInt(arr[j].getElement())) {
                    
                    mainElement = document.getElementById(clave);
                    secondaryElement = document.getElementById(j);
    
        
                    aux = arr[clave].getElement();
                    aux_order = mainElement.style.order;
                        
        
                    arr[clave].setElement(arr[j].getElement());
                    changeOrder(mainElement, secondaryElement.style.order);
                        
                    arr[j].setElement(aux);
                    changeOrder(secondaryElement, aux_order);
        
        
                    clave--;
    
                }
            }
        }
        $('.flex-item').toggle('fast');
    }, 500);

    
}

function addElementToContainer(number, arr){

    let new_element = document.createElement("div");

    new_element.setAttribute("class", "flex-item");        
    new_element.innerHTML = number.toString();

    setOrder(new_element, arr);
    new_element.setAttribute("id", new_element.style.order);

    document.querySelector(".flex-container").append(new_element);
}

function clearContainer(parent){
    
    $('.flex-item').fadeOut('fast');
    setTimeout(function(){
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
    },1000);
}

function setOrder(element, arr){
    $(element).css('order', arr.length-1);
}


function changeOrder(element, newOrder){

    element.style.order = newOrder;
    element.setAttribute('id', element.style.order);

}