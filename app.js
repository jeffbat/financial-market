$(()=> {

  // // get every <button>
  // /// attach click listener to every button
  // $('button').on("click", (event)=>{
  //   event.preventDefault();
  //   // complaints is user input number
  //   let $complaints = $('#limit').val();
  //   // if user did not enter compliants
  //   if (!$complaints) {
  //     $complaints = '10';
  //   }
  //   const $borough = $(event.currentTarget).val();

    $.ajax({
      url: 'https://api.fintel.io/web/v/0.0/so/us/tsla',
      type: "GET",
      headers: { 'X-API-KEY': 'sk_dcf0afeef2e74f3ba163933283d88fbf',

      }
    }).then (
      (data) => {
          console.log(data)
        const $container = $('.container');
        for (let i = 0; i < data.length; i++) {
          let object = data[i];
          const $div1 = $('<div>');
          $div1.html(`Symbol: ${object.symbol} <br/> Country: ${object.country} <br/> Security Short Volume: ${object.securityShortVolume} <br/> Stock Regulatory Filings: ${object.stockRegulatoryFillings} <br/><br/>`);
          $container.append($div1);

        }
      },
      () => {
        //failure
        console.log('bad request')
      }
    )
  })
