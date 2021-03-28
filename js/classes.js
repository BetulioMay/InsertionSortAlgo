
class arrayElement{
    constructor(e){
        if(e==""){
            this.e = "0";
        }else{
            this.e = e
        }
    }

    getElement(){
        return this.e;
    }
    setElement(e){
        this.e = e;
    }
}
