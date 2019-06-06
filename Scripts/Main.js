document.write('<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js""><\/script>');
function defer() {
    if (window.$) {
      
        console.log($('#header'));
    } else {
      console.log('hey');
        setTimeout(defer(), 50);
    }
}
defer();
