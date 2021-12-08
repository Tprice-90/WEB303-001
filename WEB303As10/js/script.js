function addEvent(el, event, callback) {
    el.addEventListener(event, callback);
}

(function(){
    // assigning form and form elements to variables
    var form = document.getElementById('form');
    var submit = document.getElementById('submit');
    var username = document.getElementById('username');
    var pass1 = document.getElementById('password1');
    var pass2 = document.getElementById('password2');
    var tOs = document.getElementById('tOs');
    // setting tOs checkbox to className 'fail'
    tOs.className = 'fail';
    var selectList = document.getElementById('country');
    // Welcome div to be populated after form submission
    var welcome = document.getElementById('welcome');
    // First option for select list
    var options = `<option selected>Choose your Country</option>`;
    // declaring key variable to be used in assigning select list options
    var key;
    // list of countries to be assigned to Select List options
    var countryList = {
        CA: 'Canada',
        US: "United States",
        MX: 'Mexico'
    }
    // disable submit button and set class to disabled
    submit.className = "disabled";
    submit.disabled = true;

    // Check if field is empty and set class accordingly
    function isEmpty(e) {
        var target = e.target;
        if (target.value == '') {
            target.className = 'fail';
        }
        else {
            target.className = 'pass';
        }
    }

    // Test if password 1 matches password 2 and length is equal to or more than 10 chars
    function match(e) {
        var target = e.target;
        if ((pass1.value === target.value) && target.value.length >= 10) {
            target.className = 'pass';
        }
        else target.className = 'fail';
    }

    // Check if checkbox has been checked
    function checkBox(e) {
        var target = e.target;
        if (target.checked) {
            target.className = 'pass';
        }
        else {
            target.className = 'fail'
        }
    }

    // Test if all fields have passed their tests and re-enable submit button if true
    function completedForms() {
        if(username.className == "pass" && pass1.className == "pass" && pass2.className == "pass" && tOs.className == "pass") {
            submit.disabled = false;
            submit.className = '';
        }
        else {
            submit.disabled = true;
            submit.className = 'disabled';
            return;
        }
    }

    // Populate Select List
    for(key in countryList) {
        options += `<option value="${key}">${countryList[key]}</option>`;
    }
    selectList.innerHTML = options;

    // Add events to each field
    addEvent(username, 'blur', isEmpty)
    addEvent(pass1, 'blur', isEmpty);
    addEvent(pass2, 'focus', isEmpty);
    addEvent(pass2, 'blur', match);
    addEvent(tOs, 'click', checkBox);

    // Add event to form change and submission
    addEvent(form, 'change', completedForms)
    addEvent(form, 'submit', function(e) {
        e.preventDefault();
        var msg = `Welcome ${username.value}! The country code you selected is ${selectList.value}`;
        welcome.textContent = msg;
    });
}());