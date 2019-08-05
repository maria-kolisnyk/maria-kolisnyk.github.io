$(function() {

  function initiateFooter(){
    const footerBlock = $('.footer-bar');

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

    footerBlock.append(innerSection);
  }

  initiateFooter();
});