let lin1='';
for (let c=0;c<8;c++){
    if (c%2==0){
        lin1=lin1+'0';
    }
    if (c%2==1){
        lin1=lin1+'x';
    }
}
let lin2='';
for(let c=0;c<8;c++){
    if (c%2==0){
        lin2=lin2+'x';
    }
    if(c%2==1){
        lin2=lin2+'0';
    }
}
console.log(lin1);
console.log(lin2)