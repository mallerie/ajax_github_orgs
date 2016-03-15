// Javascript Entry Point

import $ from 'jquery';


var request = $.ajax({
  url: 'https://api.github.com/users/wycats/orgs',
  dataType: 'json',
  method: 'get'
});

request.then(objects.forEach({login, avatar_url}) {
  console.log(data);
  `<div><img src="${data.avatar_url}"><p>${data.login}</p></div>`
});

