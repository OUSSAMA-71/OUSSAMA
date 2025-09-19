
let list =["C1","C2","C6","C3","C1","C3","C6","C2",];

let code = "C1";
let compteur = 0;
for ( let i = 0; i<list.length; i++){
    if (code===list[i]){
        compteur++;
    }
}console.log(code + "  " +compteur);





