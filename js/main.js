
// var darkColor = "rgb(9, 9, 61,1)"
var bod = $('body');

$(document).ready(function() {

    var arr = [];

    btn_submit = $('#btn_submit');
    btn_reset = $('#btn_reset');
    btn_sort = $('#btn_sort');
    var container = document.querySelector(".flex-container");
    input = $('#element_input');

    btn_submit.click(function() {
        value = input.val();
        
        if(value == "" || value == null){
            console.log("Please, insert a number");
        }else{
            new_element = new arrayElement(value);
            arr.push(new_element);
            addElementToContainer(value, arr);
        }
        
        input.val("");
    });
    
    btn_sort.click(function() {
        if(arr.length > 0){
            insertionSort(arr);
            console.log(arr);
        }
        else{
            console.log("Array is empty");
        }
        
    });
    btn_reset.click(function() {
        if(arr.length > 0){
            arr = [];
            clearContainer(container);
            console.log("The array is empty");
            console.log(arr);

        }else{
            console.log("The array is already empty");
            console.log(arr);
        }
    });





    
    // btn_add.addEventListener('click', function() {
    //     addElement(1);
    // });

    // btn_clear.addEventListener('click', function() {
    //     clearContainer(parent);
    // })


    // console.log(arr);

});



