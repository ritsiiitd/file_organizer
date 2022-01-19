let fs=require('fs');
let path=require("path");


function treeFn(srcPath){
    let baseName=path.basename(srcPath);
    console.log(baseName);
    console.log("\n\t"+"└──");
    let content=fs.readdirSync(srcPath);
    for(let i=0;i<content.length;i++){
        let filepath=path.join(baseName,content[i]);
        console.log(filepath);
        // if(!fs.lstatSync(filepath).isFile()){
        //     treeFn(filepath);
        // }
    }
    let allEntities="";
    for(let i=0;i<content.length;i++){
        allEntities+='\n\t'+"├──"+content[i];
        // console.log(content[i]);
    }
    //console.log(allEntities);
}

module.exports={
    treeFn:treeFn
}