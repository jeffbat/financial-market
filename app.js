let companyOwners = {};

$(() => {
  $('button').on ("click", (event)=>{
    event.preventDefault();
    const $symbol = $('#symbol');

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
      companyOwners[$symbol] = $owners;


// -- Step 2: WRITE TO HTML
      const $div1 = $('<div>')
        .addClass('company_info');
      $div1.html (`
        <div>Country: <div class="company_info_value">${incomingData.country}</div></div>
        <div>Exchange: <div class="company_info_value">${incomingData.exchange}</div></div>
        <div>Name: <div class="company_info_value">${incomingData.name}</div></div>
        <div>Symbol: <div class="company_info_value">${incomingData.symbol}</div></div>`
      );
      const viewMore = $('<button>');
      viewMore.text ('View More');
      viewMore.attr ('value', $symbol);
      viewMore.on ('click', (event) => {
        event.preventDefault ();
        let symbol = $(event.currentTarget).val();
        let ownerNames= '';
        for(let i = 0; i < companyOwners[symbol].length; i++) {
          ownerNames += companyOwners[symbol][i].name + '<br/>';
        }
        $('.owner_container').html (`<div>OwnerNames: ${ownerNames} </div>`);
        
      });
      $div1.append (viewMore);
      $container.append($div1);
    },
    () => {
        console.log('bad request');
    })
  });
});
