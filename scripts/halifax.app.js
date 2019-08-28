document.addEventListener("DOMContentLoaded", function(event) {
  function initiateFooter(){
    const footerBlock = document.getElementsByClassName('footer-bar')[0];

    const innerSection = '<div class="footer-container">\n' +
      '        <ul>\n' +
      '            <li>\n' +
      '                <a href="https://www.halifax.co.uk/insurance/home-insurance/app/short-privacy-policy/" target="_blank">Privacy Policy</a>\n' +
      '            </li>\n' +
      '            <li>\n' +
      '                <a href="https://www.halifax.co.uk/insurance/home-insurance/app/terms-conditions/" target="_blank">Terms and Conditions</a>\n' +
      '            </li>\n' +
      '            <li>\n' +
      '                <a href="https://www.halifax.co.uk/accessibility/" target="_blank">Accessibility</a>\n' +
      '            </li>\n' +
      '            <li>\n' +
      '                <a href="https://www.halifax.co.uk/securityandprivacy/cookies/" target="_blank">Cookie Policy</a>\n' +
      '            </li>\n' +
      '        </ul>\n' +
      '    </div>';

    footerBlock.innerHTML = innerSection;
  }
  initiateFooter();

  function initiatePolicy(){
    const passwordPolicy = document.getElementsByClassName('password-policy')[0];
    const innerPolicy = '<p>Your password must contain at least <strong>8 characters</strong> containing <strong>uppercase</strong>, <strong>lowercase</strong>, <strong>a number</strong>, and <strong>a special character</strong>.</p>';

    if(passwordPolicy){
      passwordPolicy.innerHTML = innerPolicy;
    }
  }
  initiatePolicy();

  const input = document.getElementById('txtNewPassword');

  if(input){
    input.oninput = function(){
      const password = input.value;

      const passwordLength = /(?=.{8,})/.test(password);
      const containsDigits = /[0-9]/.test(password);
      const containsSpecial = /[@%+\\/'!#$^&?:.(){}[\]~]/.test(password);
      const containsUpper = /[A-Z]/.test(password);
      const containsLower = /[a-z]/.test(password);

      const length = passwordLength ? '<strong class="done">8 characters</strong>' : '<strong>8 characters</strong>';
      const digits = containsDigits ? '<strong class="done">a number</strong>' : '<strong>a number</strong>';
      const special = containsSpecial ? '<strong class="done">a special character</strong>' : '<strong>a special character</strong>';
      const uppercase = containsUpper ? '<strong class="done">uppercase</strong>' : '<strong>uppercase</strong>';
      const lowercase = containsLower ? '<strong class="done">lowercase</strong>' : '<strong>lowercase</strong>';

      const passwordPolicy = document.getElementsByClassName('password-policy')[0];

      const innerPolicy = '<p>Your password must contain at least ' + length + ' containing ' + uppercase + ', ' + lowercase + ', ' + digits + ', and ' + special + '</p>';

      passwordPolicy.innerHTML = innerPolicy;
    }

    let observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if(mutation.target.classList.contains('input-validation-error')){
          const passwordPolicy = document.getElementsByClassName('password-policy')[0];
          passwordPolicy.classList.add("has-error");
        }
      });
    });
    let config = { attributes: true, childList: true, characterData: true };
    observer.observe(input, config);
  }


  const txtUsername = document.getElementById('txtUsername');

  if(txtUsername){
    txtUsername.placeholder = "Enter your email address";
  }

  const formHeader = document.getElementsByClassName('form-header')[0];
  const text = formHeader.innerText;
  if(text === 'Sign in to continue.'){
    formHeader.innerText = 'Sign In to Continue'
  }

});