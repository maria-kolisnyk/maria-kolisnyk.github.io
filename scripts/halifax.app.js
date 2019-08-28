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
      '        </ul>' +
      '        <div class="footer-logo">' +
      '            <p>Powered by</p>' +
      '            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" viewBox="0 0 80 33">\n' +
      '                <g fill="#FFF" fill-rule="evenodd">\n' +
      '                  <path d="M54.64 7.69c-.173-.42.063-.875.524-.875h4.385c.462 0 .97.459 1.129.886l6.105 16.427c.079.21.38.238.46.028l6.148-16.47c.16-.426.669-.87 1.13-.87h4.246c.461 0 .698.454.524.875l-9.446 23.29c-.172.422-.692 1.058-1.153 1.058h-3.406c-.461 0-.981-.636-1.155-1.057L54.641 7.69zM43.943 26.42c-4.093 0-7.41-3.265-7.41-7.293 0-4.028 3.317-7.293 7.41-7.293 4.092 0 7.41 3.265 7.41 7.293 0 4.028-3.318 7.293-7.41 7.293m-.021-19.488c-6.843 0-12.39 5.46-12.39 12.195s5.547 12.194 12.39 12.194c6.843 0 12.39-5.46 12.39-12.194 0-6.735-5.547-12.195-12.39-12.195M53.227 2.397a.543.543 0 0 1-.546.538H35.046a.542.542 0 0 1-.547-.538V.562c0-.297.245-.538.547-.538H52.68c.302 0 .546.241.546.538v1.835zM31.542 7.115c0-.329-.45-.59-.785-.584-3.738.07-6.05 1.568-7.735 4.344-.128.21-.351.124-.351-.12V7.619c0-.323-.65-.804-.977-.804H5.914V.902c0-.323-.05-.878-.377-.878h-4.45C.757.024 0 .58 0 .902v23.619c0 5.325 3.49 7.518 7.641 7.518h2.94c.328 0 .262-.734.262-1.057v-3.796c0-.323.066-.968-.262-.968H9.227c-1.913 0-3.313-.412-3.313-2.57V12.292c0-.323.482-.626.81-.626h9.332c.328 0 .7.303.7.626v18.69c0 .323.16 1.057.487 1.057h4.45c.329 0 .978-.734.978-1.057v-8.986c0-6.183 3.647-9.45 8.326-9.69a.573.573 0 0 0 .545-.582v-4.61z"/>\n' +
      '                </g>\n' +
      '            </svg>\n' +
      '        </div>\n' +
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