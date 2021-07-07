$(()=> {


  $('button').on("click", (event)=>{
    event.preventDefault();
    const $symbol = $('#symbol');
    const $buttonValue = $(event.currentTarget).val(); // User clicks a button, then button.value is in the $(event.currentTarget).val();

    $.ajax({
      url: 'https://api.fintel.io/web/v/0.0/so/us/' + $symbol.val(),
      type: "GET",
      headers: { 'X-API-KEY': 'sk_dcf0afeef2e74f3ba163933283d88fbf'}
    }).then ((incomingData) => {
// -- Step 1: Collect data to render to html
      const $container = $('.container');
      let $country = incomingData.country;
      let $exchange = incomingData.exchange;
      let $name = incomingData.name;
      let $owners = incomingData.owners;
      let ownerNames= '';

      for(let i = 0; i < $owners.length; i++){
        ownerNames += $owners[i].name + '<br/>';
      }

// -- Step 2: WRITE TO HTML
      const $div1 = $('<div>');
      if ($buttonValue === '0') {
        $div1.html(`Country: ${incomingData.country} <br`);
      } else if ($buttonValue == '1') {
        $div1.html(`Exchange: ${incomingData.exchange} <br/>`);
      } else if ($buttonValue == '2') {
        $div1.html(`Name: ${incomingData.name} <br/>`);
      } else if ($buttonValue == '3') {

      } else if ($buttonValue == '4') {

      }

      $container.append($div1);
    },
    () => {
        console.log('bad request')
    })

  })
})
