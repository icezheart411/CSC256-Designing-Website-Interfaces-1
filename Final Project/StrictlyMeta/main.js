// main JavaScript
// stats page
let statsMain = document.querySelector("main");

if (document.title === "Stats" && statsMain) {
    let statsForm = document.createElement("form");
    statsForm.id = "statsForm";
    let gunRows = [];

    let formTitle = document.createElement("h2");
    formTitle.textContent = "Enter Gun Stats";

    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit Stats";

    let results = document.createElement("div");
    results.id = "statsResults";

    statsForm.appendChild(formTitle);

    for (let i = 1; i <= 5; i++) {
        let gunFieldset = document.createElement("fieldset");

        let gunLegend = document.createElement("legend");
        gunLegend.textContent = "Gun " + i;

        let gunName = document.createElement("input");
        gunName.type = "text";
        gunName.placeholder = "Gun Name";

        let damage = document.createElement("input");
        damage.type = "number";
        damage.placeholder = "Damage";

        let damageBonus = document.createElement("input");
        damageBonus.type = "number";
        damageBonus.placeholder = "Damage Bonus";

        let range = document.createElement("input");
        range.type = "number";
        range.placeholder = "Range";

        gunFieldset.appendChild(gunLegend);
        gunFieldset.appendChild(gunName);
        gunFieldset.appendChild(damage);
        gunFieldset.appendChild(damageBonus);
        gunFieldset.appendChild(range);
        statsForm.appendChild(gunFieldset);

        gunRows.push({
            gunName: gunName,
            damage: damage,
            damageBonus: damageBonus,
            range: range
        });
    }

    statsForm.appendChild(submitButton);
    statsForm.appendChild(results);

    statsMain.appendChild(statsForm);

    statsForm.addEventListener("submit", function(event) {
        event.preventDefault();
        results.innerHTML = "";

        for (let i = 0; i < gunRows.length; i++) {
            let row = gunRows[i];
            let hasGunStats = row.gunName.value || row.damage.value || row.damageBonus.value || row.range.value;

            if (hasGunStats) {
                let gunStats = document.createElement("p");
                gunStats.textContent = "Gun: " + row.gunName.value +
                    " | Damage: " + row.damage.value +
                    " | Damage Bonus: " + row.damageBonus.value +
                    " | Range: " + row.range.value;

                results.appendChild(gunStats);
            }
        }

        statsForm.reset();
    });
}

// upcoming games page
let mw4Form = document.getElementById("mw4Form");

if (mw4Form) {
    let form = document.createElement("form");
    form.id = "addressForm";

    let formTitle = document.createElement("h2");
    formTitle.textContent = "Get Upcoming Game Updates";

    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "fullName");
    nameLabel.textContent = "Name";

    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "fullName";
    nameInput.name = "fullName";
    nameInput.required = true;

    let addressLabel = document.createElement("label");
    addressLabel.setAttribute("for", "address");
    addressLabel.textContent = "Address";

    let addressInput = document.createElement("input");
    addressInput.type = "text";
    addressInput.id = "address";
    addressInput.name = "address";
    addressInput.required = true;

    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";

    let message = document.createElement("p");
    message.id = "formMessage";

    form.appendChild(formTitle);
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(addressLabel);
    form.appendChild(addressInput);
    form.appendChild(submitButton);
    form.appendChild(message);

    mw4Form.appendChild(form);

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        message.textContent = "Thanks, " + nameInput.value + "! Your address has been entered.";
        form.reset();
    });
}
