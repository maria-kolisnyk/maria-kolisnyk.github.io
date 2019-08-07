document.addEventListener("DOMContentLoaded", function(event) {
  function initiateFooter(){
    const footerBlock = document.getElementsByClassName('footer-bar')[0];

    const innerSection = '<div class="footer-container">\n' +
      '        <div class="footer-top">\n' +
      '            <div>\n' +
      '                <h5>LEARN MORE</h5>\n' +
      '                <ul>\n' +
      '                    <li>\n' +
      '                        <a href="#">Get Notified</a>\n' +
      '                    </li>\n' +
      '                    <li>\n' +
      '                        <a href="#">Support</a>\n' +
      '                    </li>\n' +
      '                    <li>\n' +
      '                        <a href="#">Privacy & Terms</a>\n' +
      '                    </li>\n' +
      '                    <li>\n' +
      '                        <a href="#">Global Availability</a>\n' +
      '                    </li>\n' +
      '                    <li>\n' +
      '                        <a href="#">US Roll-Out</a>\n' +
      '                    </li>\n' +
      '                </ul>\n' +
      '            </div>\n' +
      '            <div>\n' +
      '                <h5>COMPANY</h5>\n' +
      '                <ul>\n' +
      '                    <li>\n' +
      '                        <a href="#">About</a>\n' +
      '                    </li>\n' +
      '                    <li>\n' +
      '                        <a href="#">Blog</a>\n' +
      '                    </li>\n' +
      '                    <li>\n' +
      '                        <a href="#">Careers</a>\n' +
      '                    </li>\n' +
      '                    <li>\n' +
      '                        <a href="#">Contact</a>\n' +
      '                    </li>\n' +
      '                    <li>\n' +
      '                        <a href="#">Media</a>\n' +
      '                    </li>\n' +
      '                </ul>\n' +
      '            </div>\n' +
      '            <div>\n' +
      '                <h5>FRESH FROM THE BLOG</h5>\n' +
      '                <ul>\n' +
      '                    <li>\n' +
      '                        <a href="#" class="underline">Blog Post Title Here…</a>\n' +
      '                    </li>\n' +
      '                    <li>\n' +
      '                        <a href="#" class="underline">Blog Post Title Here…</a>\n' +
      '                    </li>\n' +
      '                    <li>\n' +
      '                        <a href="#" class="underline">Blog Post Title Here…</a>\n' +
      '                    </li>\n' +
      '                    <li>\n' +
      '                        <a href="#" class="underline">Blog Post Title Here…</a>\n' +
      '                    </li>\n' +
      '                    <li>\n' +
      '                        <a href="#" class="underline">Blog Post Title Here…</a>\n' +
      '                    </li>\n' +
      '                </ul>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '        <div class="footer-bottom">\n' +
      '            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n' +
      '            <div class="social">\n' +
      '                <p>© 2017 Trōv, Inc. All Rights Reserved.</p>\n' +
      '                <ul>\n' +
      '                    <li>\n' +
      '                        <a href="#">\n' +
      '                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">\n' +
      '                                <path fill="#FFF" fill-rule="evenodd" d="M18.788 17.849c0 .576-.449 1.043-1.003 1.043H13.15v-7.316h2.364l.355-2.85H13.15V6.903c0-.825.221-1.387 1.36-1.387l1.454-.001v-2.55a18.8 18.8 0 0 0-2.118-.113c-2.095 0-3.53 1.33-3.53 3.77v2.102h-2.37v2.851h2.37v7.316h-8.71c-.554 0-1.004-.467-1.004-1.043V1.043C.602.467 1.052 0 1.606 0h16.179c.554 0 1.003.467 1.003 1.043V17.85"/>\n' +
      '                            </svg>\n' +
      '                        </a>\n' +
      '                    </li>\n' +
      '                    <li>\n' +
      '                        <a href="#">\n' +
      '                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16">\n' +
      '                                <path fill="#FFF" fill-rule="evenodd" d="M18.287.28a7.347 7.347 0 0 1-2.371.924A3.685 3.685 0 0 0 13.193 0c-2.06 0-3.73 1.708-3.73 3.815 0 .3.032.59.096.87-3.1-.16-5.85-1.677-7.69-3.989a3.876 3.876 0 0 0-.506 1.92c0 1.324.659 2.492 1.66 3.176a3.67 3.67 0 0 1-1.69-.476v.047c0 1.85 1.285 3.392 2.994 3.741a3.645 3.645 0 0 1-1.685.067c.474 1.515 1.851 2.619 3.484 2.648a7.38 7.38 0 0 1-5.524 1.582 10.406 10.406 0 0 0 5.72 1.713c6.863 0 10.615-5.813 10.615-10.856 0-.166-.003-.331-.009-.494a7.642 7.642 0 0 0 1.86-1.975 7.323 7.323 0 0 1-2.142.6 3.81 3.81 0 0 0 1.64-2.11"/>\n' +
      '                            </svg>\n' +
      '                        </a>\n' +
      '                    </li>\n' +
      '                    <li>\n' +
      '                        <a href="#">\n' +
      '                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">\n' +
      '                                <path fill="#FFF" fill-rule="evenodd" d="M16.627 0H2.764C1.57 0 .602 1.003.602 2.24v14.412c0 1.237.968 2.24 2.162 2.24h13.863c1.194 0 2.161-1.003 2.161-2.24V2.24c0-1.237-.967-2.24-2.161-2.24zm-2.953 2.952a.58.58 0 0 1 .568-.59h1.705a.58.58 0 0 1 .568.59v1.771a.58.58 0 0 1-.568.59h-1.705a.58.58 0 0 1-.568-.59V2.952zM9.716 5.843c1.932 0 3.498 1.624 3.498 3.625 0 2.002-1.566 3.624-3.498 3.624-1.93 0-3.497-1.622-3.497-3.624 0-2.001 1.566-3.625 3.497-3.625zm7.367 10.687a.58.58 0 0 1-.568.591H2.875a.58.58 0 0 1-.568-.59V7.674h2.274c-.297.442-.397 1.268-.397 1.793 0 3.161 2.482 5.734 5.532 5.734 3.051 0 5.533-2.573 5.533-5.734 0-.525-.072-1.338-.439-1.793h2.273v8.855z"/>\n' +
      '                            </svg>\n' +
      '                        </a>\n' +
      '                    </li>\n' +
      '                    <li>\n' +
      '                        <a href="#">\n' +
      '                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18">\n' +
      '                                <path fill="#FFF" fill-rule="evenodd" d="M1.06 5.755h3.545v12.192H1.061V5.755zm13.23-.117c2.519 0 4.498 1.754 4.498 5.53v6.78H14.77v-6.31c0-1.651-.628-2.778-2.011-2.778-1.058 0-1.646.76-1.92 1.493-.102.264-.086.63-.086.997v6.597H6.77s.051-11.176 0-12.192h3.982V7.67c.235-.837 1.507-2.031 3.538-2.031zM2.768 0c1.307 0 2.111.91 2.137 2.113 0 1.182-.83 2.118-2.162 2.118h-.026C1.435 4.23.602 3.298.602 2.117.602.912 1.46 0 2.768 0z"/>\n' +
      '                            </svg>\n' +
      '                        </a>\n' +
      '                    </li>\n' +
      '                </ul>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '    </div>';

    footerBlock.innerHTML += innerSection;
  }

  initiateFooter();
});