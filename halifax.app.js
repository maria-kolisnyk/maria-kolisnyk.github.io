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

    passwordPolicy.innerHTML = innerPolicy;
  }
  initiatePolicy();

  const input = document.getElementById('txtNewPassword');

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
});