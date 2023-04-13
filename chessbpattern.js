let picksize =prompt("Pick the size of the chess board");
alert("Size is "+ picksize)

let lin1='';
let lin2='';
for (var i = 0; i<picksize; i++){
    if(i%2 == 0){
        lin1 = lin1 + '0';
        lin2 = lin2 + 'x';
    }
    if (i%2 == 1){
        lin1 = lin1 + 'x';
        lin2 = lin2 + '0';
    }

}
for (var i =0; i<picksize; i++){
    if(i%2==0){
        console.log(lin1)
    }
    if(i%2==1){
        console.log(lin2)
    }
}