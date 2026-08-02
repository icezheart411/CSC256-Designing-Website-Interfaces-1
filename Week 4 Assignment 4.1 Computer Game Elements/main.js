// creating a function to handle the event
function processForm(event){
    // this stops the form from submitting
    event.preventDefault();
    // setting variable names from input elements so it equals the value
    let userName = document.getElementById("userName").value;
    let weaponUsed = document.getElementById("weaponUsed").value;
    let weaponDmg = document.getElementById("weaponDmg").value;
    let dmgBonus = document.getElementById("dmgBonus").value;
    // make the display string output for user
    let output = "User Name: " + userName + "\n\n" + "Weapon Used: " + weaponUsed + "\n\n" + "Weapon Damgae: " + weaponDmg + "\n\n" + "Damage Bonus: " + dmgBonus;
    // show the data in the textarea
    document.getElementById("txtaOutput").value = output;
    // clear input once you submit for output, ?I WASN'T SURE HOW TO DO IT WITH ONE LINE OF CODE, WASN'T SURE IF THERE WAS A WAY TO GROUP THEM TOGETHER?
    document.getElementById("userName").value = " ";
    document.getElementById("weaponUsed").value = " ";
    document.getElementById("weaponDmg").value = " ";
    document.getElementById("dmgBonus").value = " ";
}