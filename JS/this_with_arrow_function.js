const student ={
    name : "Parth",
    age : 20,
    marks : 90,
    prop : this,
    getname : function(){
        console.log(this);
        return this.name;
    },
    getage : () => {
        console.log(this);
        return this.age;
    },
    
    getinfo1 : function(){
        setTimeout( () => {       
        console.log("Ever green field")
    },2000);
    },
    
    getinfo2 : function(){
        setTimeout( function(){       
        console.log("Ever green field")
    },2000);
    }
}