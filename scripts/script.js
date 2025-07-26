    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        body.classList.add('light');
    }


    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');

        
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });


    // =====================Verification ===============================
function validateForm() {
    let isValid = true;

    // إعادة تعيين الأخطاء
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // التحقق من الاسم
    if (name === "") {
    document.getElementById("nameError").innerText = "الرجاء إدخال الاسم";
    isValid = false;
    }

    // التحقق من البريد الإلكتروني
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
    document.getElementById("emailError").innerText = "الرجاء إدخال البريد الإلكتروني";
    isValid = false;
    } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "البريد الإلكتروني غير صالح";
    isValid = false;
    }

    // التحقق من الرسالة
    if (message === "") {
    document.getElementById("messageError").innerText = "الرجاء إدخال الرسالة";
    isValid = false;
    }

    return isValid;
}




//  =================donate page===========================
function showCountryList() {
    const select = document.getElementById('country');
    select.style.display = 'block'; 
}
function showCurrencyList() {
    const select = document.getElementById('currency');
    select.style.display = 'block'; 
}
function filterCountries() {
    const input = document.getElementById('country-input');
    const filter = input.value.toLowerCase();
    const select = document.getElementById('country');
    const options = Array.from(select.options);

    options.forEach(option => {
        const text = option.text.toLowerCase();
        option.style.display = text.includes(filter) ? '' : 'none'; 
    });
}
function filterCurrencies() {
    const input = document.getElementById('currency-input');
    const filter = input.value.toLowerCase();
    const select = document.getElementById('currency');
    const options = Array.from(select.options);

    options.forEach(option => {
        const text = option.text.toLowerCase();
        option.style.display = text.includes(filter) ? '' : 'none';
    });
}
// input and list
const inputs = [document.getElementById('country-input'), document.getElementById('currency-input')];
const selects = [document.getElementById('country'), document.getElementById('currency')];
//focus
inputs.forEach((input, index) => {
    input.addEventListener('blur', function() {
        setTimeout(() => {
            selects[index].style.display = 'none'; 
        }, 500);
    });
});
//choose from list
selects.forEach((select, index) => {
    select.addEventListener('change', function() {
        inputs[index].value = this.options[this.selectedIndex].text; 
        this.style.display = 'none'; 
    });

    //click event
    select.addEventListener('click', function() {
        this.style.display = 'block'; 
    });
});
// donates btns
document.getElementById('one-time-donation-btn').addEventListener('click', function() {
    document.getElementById('one-time-donation-form').style.display = 'block';
    document.getElementById('monthly-donation-form').style.display = 'none';
});
document.getElementById('monthly-donation-btn').addEventListener('click', function() {
    document.getElementById('monthly-donation-form').style.display = 'block';
    document.getElementById('one-time-donation-form').style.display = 'none';
});

// submit
document.getElementById('one-time-donation-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('شكراً لتبرعك مرة واحدة!');
    selectCountry(country);
    selectCurrency(currency);
    this.reset(); 
});

document.getElementById('monthly-donation-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('شكراً لتبرعك الشهري!'); 
    this.reset(); 
});
// Use Local Storage
function selectCountry(country) {
    document.getElementById('country-input').value = country; 
    document.getElementById('country').style.display = 'none'; 
    localStorage.setItem('selectedCountry', country); 
    console.log('تم حفظ البلد', country); 
}
function selectCurrency(currency) {
    document.getElementById('currency-input').value = currency; 
    document.getElementById('currency').style.display = 'none'; 
    localStorage.setItem('selectedCurrency', currency); // حفظ القيمة في localStorage
    console.log('تم حفظ العملة', currency); 
}
function loadStoredData() {
    const storedCountry = localStorage.getItem('selectedCountry');
    const storedCurrency = localStorage.getItem('selectedCurrency');
    const storedAmount = localStorage.getItem('donationAmount');

    if (storedCountry) {
        document.getElementById('country-input').value = storedCountry; 
        console.log('تم تحميل البلد', storedCountry); 
    }

    if (storedCurrency) {
        document.getElementById('currency-input').value = storedCurrency; 
        console.log('تم تحميل العملة', storedCurrency); 
    }

    if (storedAmount) {
        document.getElementById('one-time-amount').value = storedAmount; 
        console.log('تم تحميل المبلغ', storedAmount); 
    }
}

window.onload = loadStoredData();