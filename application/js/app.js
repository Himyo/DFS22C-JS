fetch('localhost:3004/server/mock.php')
  .then(response => response)
  .then(json => console.log(json))
  .catch(e => console.error(e))
