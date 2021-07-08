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
      let $symbol = incomingData.symbol;
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
        $div1.html(`Symbol: ${incomingData.symbol} <br/>`);

      } else if ($buttonValue == '4') {
        $div1.html(`OwnerNames: ${ownerNames} <br/>`);

      }

      $container.append($div1);
    },
    () => {
        console.log('bad request')
    })

  })
})
//

$(function() {
  setInterval(function() {
    $('#carouseler .carousels').animate({'margin-left': '-=720px'}, 1000)
  }, 3000)
  //setInterval
    //animate margin-left
    //if it's last slide, go to position 1 (0px);

    //listen for mouseenter and pause
    //resume on mouseLeave


});
