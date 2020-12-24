document.addEventListener('DOMContentLoaded', function() {
  function initiateFooter() {
    const footerBlock = document.getElementsByClassName('footer-bar')[0];

    const innerSection =
        '<div class="footer-container">\n' +
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

  function addToLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const urlParams = new URLSearchParams(window.location.search);
    const returnUrl = urlParams.get('ReturnUrl');
    const returnUrlParams = new URLSearchParams(returnUrl);
    const redirect_uri = returnUrlParams.get('redirect_uri');
    if (redirect_uri) {
      const create_password_link =
          redirect_uri.substring(0, redirect_uri.indexOf('loginSuccessful')) + 'confirm-email';

      const innerSection =
          '<div class="row create-password-link">' +
          '<p>Need to finish setting up your account? </p>' +
          '<a href="' +
          create_password_link +
          '">Create Password</a>' +
          '</div>';

      loginForm.innerHTML += innerSection;
    }
  }
  addToLoginForm();

  function initiatePolicy() {
    const passwordPolicyMessage = document.getElementById('passwordPolicyMessage');

    if (passwordPolicyMessage) {
      const parentDiv = passwordPolicyMessage.parentNode;
      const passwordPolicy = document.createElement('div');
      passwordPolicy.setAttribute('class', 'password-policy');
      const innerPolicy =
          '<p>Your password must contain at least <strong>8 characters</strong> containing <strong>uppercase</strong>, <strong>lowercase</strong>, <strong>a number</strong>, and <strong>a special character</strong>.</p>';

      parentDiv.replaceChild(passwordPolicy, passwordPolicyMessage);
      passwordPolicy.innerHTML = innerPolicy;
    }
  }
  initiatePolicy();

  const input = document.getElementById('txtNewPassword');

  function passwordValidation() {
    const password = input.value;

    const passwordLength = /(?=.{8,})/.test(password);
    const containsDigits = /[0-9]/.test(password);
    const containsSpecial = /[@%+\\/'`!*<>"=;#$£^&?:,.(){}[\]~_-]/.test(password);
    const containsUpper = /[A-Z]/.test(password);
    const containsLower = /[a-z]/.test(password);

    const length = passwordLength
        ? '<strong class="done">8 characters</strong>'
        : '<strong>8 characters</strong>';
    const digits = containsDigits
        ? '<strong class="done">a number</strong>'
        : '<strong>a number</strong>';
    const special = containsSpecial
        ? '<strong class="done">a special character</strong>'
        : '<strong>a special character</strong>';
    const uppercase = containsUpper
        ? '<strong class="done">uppercase</strong>'
        : '<strong>uppercase</strong>';
    const lowercase = containsLower
        ? '<strong class="done">lowercase</strong>'
        : '<strong>lowercase</strong>';

    const passwordPolicy = document.getElementsByClassName('password-policy')[0];

    const innerPolicy =
        '<p>Your password must contain at least ' +
        length +
        ' containing ' +
        uppercase +
        ', ' +
        lowercase +
        ', ' +
        digits +
        ', and ' +
        special +
        '</p>';

    passwordPolicy.innerHTML = innerPolicy;
  }
  if (input) {
    input.oninput = passwordValidation;

    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.target.classList.contains('input-validation-error')) {
          const passwordPolicy = document.getElementsByClassName('password-policy')[0];
          passwordPolicy.classList.add('has-error');
        }
      });
    });
    const config = { attributes: true, characterData: true, childList: true };
    observer.observe(input, config);
  }

  const txtUsername = document.getElementById('txtUsername');

  if (txtUsername) {
    txtUsername.placeholder = 'Enter your email address';
  }

  const formHeader = document.getElementsByClassName('form-header')[0];
  const text = formHeader.innerText;
  if (text === 'Sign in to continue.') {
    formHeader.innerText = 'Sign In to Continue';
  }

  const setPasswordButton = document.getElementsByClassName('set-password-button-text')[0];
  if (setPasswordButton) {
    setPasswordButton.innerHTML = setPasswordButton.innerHTML.toLowerCase();
  }

  function changeFavicon() {
    const old_Link = document.querySelector("link[rel*='shortcut icon']");

    const link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href =
        'data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////////////////////////////////////////////////////8iISX/5OTk//////8iISX/k5KU//////////////////////////////////////////////////////+GhYj/VVRY//////+zs7T/IiEl////////////////////////////////////////////////////////////IiEl/729vv//////IiEl/+/v7////////////////////////////////////////////////////////////6Skpf9VVFj/mZmZ/3d2eP/////////////////////////////////////////////////MzMz////////////Dw8T/IiEl/zMzN/8kIyj/pKSl//////////////////////////////////////+zs7T/MzI2////////////d3Z4/yIhJf8XFhv/GRgd/ygnLP+GhYj/aWhr/2loa/+ZmZn/w8PE//7+/v//////VVRY///////Pz8//5OTk/1pYXP+ZmZn/VVVV/wUEB/8FBAf/EA8T/xMSFv8dHCD/IiEl/x8eIv9OTlH/hoWI/zMyNv/Dw8T/MzI2/xAPE/93dnj/d3Z4/xAPE/8QDxP/ZmZm/yIhJf8iISX/HRwg/xYVGf8TEhb/HRwg/zMyNv8zMjb/MzI2/319gP93dnj/EA8T/zMyNv+kpKX/s7O0/6+vsP+kpKX/IiEl/0NCRv8dHCD/QD4//zk4PP99fYD/MzI2/+Tk5P//////w8PE/8jHyP/a2dr/////////////////////////////////MzI2/0A+P/9paGv///////////////////////////////////////////////////////////9VVVX/2tna/2loa/9APj//YF9g////////////////////////////////////////////////////////////VVVV/xYVGf8WFRn/FhUZ/0NCRv////////////////////////////////////////////////////////////////9APj//FhUZ/xYVGf+9vb7/////////////////////////////////////////////////////////////////s7O0/19eYv+zs7T//////////////////////////////////////////////////////////////////////9rZ2v/Hx8j/////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==';
    document.head.removeChild(old_Link);
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  changeFavicon();

  function togglePassword() {
    const t = document.getElementById('txtPassword');
    'password' === t.getAttribute('type')
        ? t.setAttribute('type', 'text')
        : t.setAttribute('type', 'password');
  }

  const passwordIcon = document.getElementsByClassName('toggle-password')[0];
  if (passwordIcon)
    passwordIcon.onclick = togglePassword;
});

(function(y, a, b, c, d, z) {
  try {
    z = new Date()
        .toISOString()
        .substr(0, 13)
        .split('-')
        .join('')
        .split('T')
        .join('');
  } catch (e) {
    z = Math.random();
  }
  a = 'https://tags.tiqcdn.com/utag/lbg/code/prod/utag.16.js' + '?cb=' + z;
  c = 'script';
  d = y.createElement(c);
  d.src = a;
  d.type = 'text/java' + c;
  d.async = true;
  b = y.getElementsByTagName(c)[0];
  b.parentNode.insertBefore(d, b);
})(document);
const path = window.location.pathname;
window.utag_cfg_ovrd = { noview: true };
window.utag_data = {
  //System
  '@context': {
    owner: 'Lloyds Banking Group - Group Web Analytics',
    version: '1.0'
  }, //e.g. BOS, Halifax, Lloyds, MBNA, ScottishWidows
  'ApplicationID': '', //e.g. Online, Offline
  'ApplicationState': '', //e.g. Retail, Commercial
  'Brand': 'Halifax', //e.g. apply, secure, etc
  'Channel': 'Online',
  'Division': 'Insurance',
  'Environment': document.location.hostname.split('.')[0], //e.g. auth, mobile, public, unauth
  'JourneyAction': '',
  'JourneyActionNarrative': '', //e.g. GeneralInsurance, Mortgages, Service, etc
  'JourneyEvent': 'Page Load', //e.g. Insurance
  'JourneyName': 'rentersInsurance', //e.g. Home Insurance, Car Insurance, etc
  'JourneyStep': path === '/property' ? '1' : '0', //e.g. auth, mobile, public, unauth
  'JourneyStepName': path === '/property' ? 'property' : 'Initial', //e.g. Aries, Galaxy, Teamsite
  //Journey
  'JourneyType': 'Quote',
  'PageRole': 'Sales',
  'PageTitle': document.title,
  'Platform': 'Unauth',
  'Presentation': 'Responsive',
  'ProductFamily': 'GeneralInsurance',
  'ProductGroup': 'Insurance',
  'ProductSubGroup': 'HomeInsurance',
  'State': 'Unauth', // placeholder for app id
  //TaggingSpecification
  'System': 'Trov',
  'TagVersion': 'C3.20', //set to true for form tracking
  'TrackEvents': true, //set to true for single page applications using hashchange
  'TrackHashChanges': false,
  'TrustDataLayer': true
};

const script = document.createElement('script');
script.type = 'text/javascript';
document.head.appendChild(script);
script.src = 'https://tags.tiqcdn.com/utag/lbg/code/prod/utag.sync.js';

const analytics = (window.analytics = window.analytics || []);
if (!analytics.initialize)
  if (analytics.invoked)
    window.console && console.error && console.error('Segment snippet included twice.');
  else {
    analytics.invoked = !0;
    analytics.methods = [
      'trackSubmit',
      'trackClick',
      'trackLink',
      'trackForm',
      'pageview',
      'identify',
      'reset',
      'group',
      'track',
      'ready',
      'alias',
      'debug',
      'page',
      'once',
      'off',
      'on',
      'user',
      'anonymousId'
    ];
    analytics.factory = function(t) {
      return function() {
        // eslint-disable-next-line prefer-rest-params
        const e = Array.prototype.slice.call(arguments);
        e.unshift(t);
        analytics.push(e);
        return analytics;
      };
    };
    for (let t = 0; t < analytics.methods.length; t++) {
      const e = analytics.methods[t];
      analytics[e] = analytics.factory(e);
    }
    analytics.load = function(t, e) {
      const n = document.createElement('script');
      n.type = 'text/javascript';
      n.async = !0;
      n.src = 'https://cdn.segment.com/analytics.js/v1/' + t + '/analytics.min.js';
      const a = document.getElementsByTagName('script')[0];
      a.parentNode.insertBefore(n, a);
      analytics._loadOptions = e;
    };
    analytics.SNIPPET_VERSION = '4.1.0';
    const robots = [
      'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      'Mozilla/5.0 (compatible; Bingbot/2.0; +http://www.bing.com/bingbot.htm)',
      'Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)',
      'DuckDuckBot/1.0; (+http://duckduckgo.com/duckduckbot.html)',
      'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)',
      'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)',
      'Mozilla/5.0 (compatible; Konqueror/3.5; Linux) KHTML/3.5.5 (like Gecko) (Exabot-Thumbnails)',
      'Mozilla/5.0 (compatible; Exabot/3.0; +http://www.exabot.com/go/robot)',
      'ia_archiver (+http://www.alexa.com/site/help/webmasters; crawler@alexa.com)'
    ];
    if (robots.indexOf(window.navigator.userAgent) === -1) {
      const urlParams = new URLSearchParams(window.location.search);
      const returnUrl = urlParams.get('ReturnUrl');
      const returnUrlParams = new URLSearchParams(returnUrl);
      const segmentID = returnUrlParams.get('segmentID');
      analytics.load(segmentID);
    }
  }
