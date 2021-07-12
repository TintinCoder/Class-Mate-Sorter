console.log("Class 79 Class Mates Array");
var names = [];
function submit() {
    var firstName = document.getElementById('1name').value;
    var secondName = document.getElementById('2name').value;
    var thirdName = document.getElementById('3name').value;
    var fourthName = document.getElementById('4name').value;
    // Changing The Array Values
    names.push(firstName);
    names.push(secondName);
    names.push(thirdName);
    names.push(fourthName);
    console.log(names);
    document.getElementById('name').innerHTML = names;
    // document.getElementById('btn').innerHTML = "Sort";
    document.getElementById('btn').style.display = "none";
    document.getElementById('btn-sort').style.display = "inline-block";
    console.log(names);
}
function sorting() {
    names.sort();    
    console.log(names);
    document.getElementById('name').innerHTML = names;
}