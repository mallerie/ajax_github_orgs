// Javascript Entry Point

import $ from 'jquery';

var request = $.ajax({
  url: 'https://api.github.com/users/wycats/orgs',
  dataType: 'json',
  method: 'get'

});


request.then(function(response) {

  response.forEach(function(data) {

    var html = `<div><img src="${data.avatar_url}"><p>${data.login}</p></div>`

    $('.app').append( html );

  })

});

//This is how to put both functions on one line.
// request.then(response => response.forEach(data => {
//    var html = `<div><img src="${data.avatar_url}"><p>${data.login}</p></div>`

//     $('.app').append( html );
// }))

