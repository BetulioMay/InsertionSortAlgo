

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
