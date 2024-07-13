function getItemNameTS(id){
    let itemNameTS = "timestamps_"+id;
    return itemNameTS;
}
function getItemNameCNT(id){
    let itemNameCNT = "counter_"+id;
    return itemNameCNT;
}

function createStatFromButtonID(id){
    let itemNameTS = getItemNameTS(id);
    let itemNameCNT = getItemNameCNT(id);
    createStats(itemNameCNT,"counterlist");
    createStats(itemNameTS,"timestamplist");
}
function createStatsBulk(){
    console.log("Creating List of stats");
    var buttonlist=['social','friends','homepage','adverts'];
    buttonlist.forEach(createStatFromButtonID);

}

// Getting back the results and showing them
function createStats(ItemNameStorage,outputID){
    id = ItemNameStorage;
    let itemNameCNT = ItemNameStorage;

    console.log("Showing ID:"+itemNameCNT);
    const counter=window.localStorage.getItem(itemNameCNT);
    // Show the Result
    let outputText = itemNameCNT+": "+counter;
    var rec = outputID+id;
    const elem = document.getElementById(rec);

    if (!elem){
        const container = document.getElementById("results");
        
        const node = document.createElement("li");
        const textnode = document.createTextNode(outputText);
        node.id=rec;
        node.appendChild(textnode);
        document.getElementById(outputID).appendChild(node);
    }
    else{
        elem.textContent=outputText;
    }

}


function choiceMade(element,id){

    let itemNameTS = getItemNameTS(id);
    let itemNameCNT = getItemNameCNT(id);

    // Add to timestamp
    
    let date = Date.now();
    var timestamps=window.localStorage.getItem(itemNameTS);
    console.log(timestamps)
    if (typeof timestamps == 'undefined'){
        timestamps = "";
        console.log("Init timestamps for "+itemNameTS);
    }
    timestamps = timestamps+";"+date;
    window.localStorage.setItem(itemNameTS,timestamps)

    // Add to counter
    var counter=window.localStorage.getItem(itemNameCNT);
    console.log(counter)
    if (typeof counter == 'undefined'){
        counter = 0;
        console.log("Init Counter for "+itemNameCNT);
    }

    counter = Number(counter)+1;
    window.localStorage.setItem(itemNameCNT,counter);
    console.log("Counter:"+counter);
    showBlock();
    console.log("End choice");
    
}



function hideBlock(){
    console.log("Hiding again");
    document.getElementById("block").style.visibility = "hidden";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and 
}

function showBlock(){
    document.getElementById("block").style.visibility = "visible";
    setTimeout(function() {hideBlock();},1000);
}

function showStats(){
    elem = document.getElementById("results");
    if(elem.style.visibility == "visible")
        elem.style.visibility = "hidden";
    else{
        elem.style.visibility = "visible";
        createStatsBulk();
    }
    

}



