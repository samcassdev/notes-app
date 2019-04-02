 // var update = document.getElementById("update")
 //    update.addEventListener("click", function (){
 //      fetch('quotes', {
 //        method: 'put',
 //        headers: {'Content-Type': 'application/json'},
 //        body: JSON.stringify({
 //          'name': 'Darth Vader',
 //          'quote': 'I find your lack of faith disturbing.'
 //        })
 //      })
 //      .then(response => {
 //        if (response.ok) return response.json()
 //      })
 //      .then(data => {
 //        console.log(data)
 //        window.location.reload(true)
 //      })
 //    });

    // var del = document.getElementById('delete')
    // del.addEventListener('click', function () {
    //   this.parentNode.parentNode.childNodes[1].innerText
    //   const msg = this.parentNode.parentNode.childNodes[3].innerText
    //   fetch('messages', {
    //     method: 'delete',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       'name': name,
    //       'quote': quote
    //     })
    //   }).then(function (response) {
    //     window.location.reload()
    // const msg = this.parentNode.parentNode.childNodes[3].innerText

const buttons = document.getElementsByClassName('delete')
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove)
}
  //   const msg = this.parentNode.parentNode.childNodes[3].innerText

  function remove(){
    let name = this.parentNode.childNodes[1].innerText
    let quote = this.parentNode.childNodes[3].innerText

      fetch('quotes', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': name,
          'quote': quote
        })
      })
      .then(res => {
        if (res.ok) return res.json()
      }).
      then(data => {
        console.log(data)
        window.location.reload()
      })
}
