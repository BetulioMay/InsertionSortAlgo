

function insertionSort(arr) {
    var aux;
    var clave;
    
    for(let i = 1; i < arr.length; i++) {

        clave = i;

        for(let j = i-1; j >= 0; j--) {
            if(parseInt(arr[clave].getElement()) <= parseInt(arr[j].getElement())) {
                aux = arr[clave].getElement();
                arr[clave].setElement(arr[j].getElement());
                arr[j].setElement(aux);

                clave--;
            }
        }

    }
}

function addElementToContainer(number, arr){

    let new_element = document.createElement("div");

    new_element.setAttribute("class", "flex-item");        
    new_element.innerHTML = number.toString();

    setOrder(new_element, arr);
    new_element.setAttribute("id", arr.length-1 + "");

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


function changeOrder(element, arr, index){
    $(element).css('order', arr[index]);
}
