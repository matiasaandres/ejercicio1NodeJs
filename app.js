// tabla del 5

multi = (tabla)=>{

    console.clear();
    console.log("===============================");
    console.log(`============  ${tabla } ================`);
    console.log("===============================");
    console.log("");

    let number = 12;

    for (let index = 1; index <= number; index++) {
        

        console.log(` ${tabla} x ${index}` + ` = ${tabla*index}` );
    }
    console.log(""); 
    console.log("===============================");

}

multi(355);

