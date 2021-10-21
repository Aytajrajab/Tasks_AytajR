let tree = "";

for(i=1; i<=15; i++){
  tree = "";

  for(j=i; j<15; j++){
    tree += " ";
  }

  for(k=0; k<(i*2)-1; k++){
    tree += "*";
  }
  console.log(tree);
}