/*
    The Search Algorithm using js method
 */


/*
     Lets pretend the names are loaded and stores in a JS array
 */
var name_bank = [
    "Kevin James", "Kelvin Nyonyi",
    "Kenneth James", "Kelvin Mramba",
    "NATHAN LUVINGA", "ANETHI RICHARD",
    "MERENGO MARWA", "LEONARD RAMADHAN",
    "DOUGLAS MKONYI", "ATIENO JACKLINE",
    "KIMARO ELICE ELIFINYA", "BUHARI CHOKA",
    "IAN TESHA", "FRANK OPIYO",
    "KIBONAJORO ACKRAM S.", "MARIJANI,RAMADHAN",
    "FREDRICK FELIX", "KIMAMBO, VANESSA GEORGE",
    "ANDREW HANS G.", "MWANGANYA, ALEX M.",
    "DAUDI, NELSON F.", "LIBERATHA DAWSON R",
    "KHALID ABDULIKADRI", "HAMISI, KASSIMU MOHAMEDI",
    "MBWAMBO, STEPHEN R", "MUSHI MACLEAN"
];

names = names.sort();   // Sort then alphabetically


// Searching algorithm

function searchAlg(input_name) {

    var limit_count = 6;    // Controls the number of predictions to show up

    var l_ct = 0;

    var regex;

    var matched_name = []; // Creating a new array;

    limit_count--;
    // Scrolls through the list
    for (var i = 0; i < name_bank.length; i++){
        regex = input_name.toLowerCase();
        regex = new RegExp(regex, "i");


        if(regex.test(name_bank[i])){
            matched_name[l_ct] = name_bank[i];
            if(l_ct === limit_count){
                break;
            }
            l_ct++;     // Move to next
        }
    }

    if(matched_name.length === 0){
        return false;
    }else{
        return matched_name;
    }
}