 var update = document.getElementById("update")
    update.addEventListener("click", function (){
      fetch('quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          'name': 'Darth Vader',
          'quote': 'I find your lack of faith disturbing.'
        })
      })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
    });

    // Array.from(trash).forEach(function(element) {
    //       element.addEventListener('click', function(){
    //         const name = this.parentNode.parentNode.childNodes[1].innerText
    //         const msg = this.parentNode.parentNode.childNodes[3].innerText

    var del = document.getElementById('delete')
    del.addEventListener('click', function () {
      fetch('quotes', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': 'name',
          'quote': 'quote'
        })
      })
      .then(res => {
        if (res.ok) return res.json()
      }).
      then(data => {
        console.log(data)
        window.location.reload()
      })
    })
