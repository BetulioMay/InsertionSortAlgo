
var darkColor = "rgb(9, 9, 61,1)"
var bod = $('body');

$(document).ready(function() {

    var arr = [];

    btn_submit = $('#btn_submit');
    btn_reset = $('#btn_reset');
    btn_sort = $('#btn_sort');
    input = $('#element_input');

    btn_submit.click(function() {
        value = input.val();

        new_element = new arrayElement(value);
        arr.push(new_element);
        console.log(arr);
        input.val("");
    });

    btn_sort.click(function() {
        if(arr.length > 0){
            insertionSort(arr);
            console.log(arr);
        }
    })
    btn_reset.click(function() {
        if(arr.length > 0){
            arr = [];
            console.log("The array is empty");
            console.log(arr);
        }else{
            console.log("The array is already empty");
            console.log(arr);
        }
    })






    // console.log(arr);

});

