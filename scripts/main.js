(function(){
  'use strict';

  $(document).ready(function(){

  $.ajax({
    url: "https://api.github.com/users/schnetthappens",
    }).then(function(data){
    console.log(data);
  });

  $.ajax({
    url: "https://api.github.com/users/schnetthappens/repos",
    }).then(function(data){
    console.log(data);
  });
});

})();
