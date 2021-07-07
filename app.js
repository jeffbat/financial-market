$(()=> {


    $('button').on("click", (event)=>{
    event.preventDefault();


    $.ajax({
      url: 'https://api.fintel.io/web/v/0.0/so/us/tsla',
      type: "GET",
      headers: { 'X-API-KEY': 'sk_dcf0afeef2e74f3ba163933283d88fbf',
      }
    })

    .then (
      (incomingData) => {
      // console.log(incomingData.country)
      const $container = $('.container');
      let $country = incomingData.country;
      let $exchange = incomingData.exchange;
      let $name = incomingData.name;
      let $owners = incomingData.owners;
          for(let i = 0; i < $owners.length; i++){
            $owners[i].name
          }
      const $div1 = $('<div>');
      $div1.html(`Country: ${incomingData.country} <br/>
                  Exchange: ${incomingData.exchange} <br/>
                  Name: ${incomingData.name} <br/>
                  owners: ${incomingData.owners} <br/> `)

      $container.append($div1);


    },


    () => {
        console.log('bad request')
    })







































































    //
    //
    //     $.ajax({
    //       url: 'https://api.fintel.io/web/v/0.0/n/us/tsla',
    //       type: "GET",
    //       headers: { 'X-API-KEY': 'sk_dcf0afeef2e74f3ba163933283d88fbf',
    //     }
    //     })
    //
    //     .then (
    //       (owners) => {
    //         console.log(owners)
    //         const $container = $('.container');
    //         for (let i = 0; i < owners.length; i++) {
    //         let object = owners[i];
    //         const $div1 = $('<div>');
    //         $div1.html(`Symbol: ${object.symbol} <br/>
    //           Country: ${object.country} <br/>
    //           Security Short Volume: ${object.securityShortVolume} <br/>
    //           Stock Regulatory Filings: ${object.stockRegulatoryFillings} <br/><br/>`);
    //           $container.append($div1);
    //
    //         }
    //       },
    //       () => {
    //         //failure
    //         console.log('bad request')
    //       }
    //     )
    //
    //
    //
    //     $.ajax({
    //       url: 'https://api.fintel.io/web/v/0.0/ss/us/tsla',
    //       type: "GET",
    //       headers: { 'X-API-KEY': 'sk_dcf0afeef2e74f3ba163933283d88fbf',
    //       }
    //     })
    //
    //     .then (
    //       (owners) => {
    //       console.log(owners)
    //       const $container = $('.container');
    //       for (let i = 0; i < owners.length; i++) {
    //       let object = owners[i];
    //       const $div1 = $('<div>');
    //       $div1.html(`Owners: ${object.owners} <br/>
    //         // Country: ${object.country} <br/>
    //         // Security Short Volume: ${object.securityShortVolume} <br/>
    //         // Stock Regulatory Filings: ${object.stockRegulatoryFillings} <br/><br/>`);
    //       $container.append($div1);
    //
    //       }
    //     },
    //     () => {
    //     //failure
    //     console.log('bad request')
    //     }
    //   )
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // $.ajax({
    //   url: 'https://api.fintel.io/web/v/0.0/sf/us/tsla',
    //   type: "GET",
    //   headers: { 'X-API-KEY': 'sk_dcf0afeef2e74f3ba163933283d88fbf',
    // }
    // })
    //
    // .then (
    //   (secFillings) => {
    //     console.log(secFillings)
    //     const $container = $('.container');
    //     for (let i = 0; i < secFillings.length; i++) {
    //     let object = secFillings[i];
    //     const $div1 = $('<div>');
    //       $div1.html(`Symbol: ${object.symbol} <br/>
    //         Country: ${object.country} <br/>
    //         Security Short Volume: ${object.securityShortVolume} <br/>
    //         Stock Regulatory Filings: ${object.stockRegulatoryFillings} <br/><br/>`);
    //         $container.append($div1);
    //
    //     }
    //   },
    //   () => {
    //     //failure
    //     console.log('bad request')
    //   }
    // )
    //
    //
    // $.ajax({
    //   url: 'https://api.fintel.io/web/v/0.0/i/scion-asset-management-llc',
    //   type: "GET",
    //   headers: { 'X-API-KEY': 'sk_dcf0afeef2e74f3ba163933283d88fbf',
    // }
    // })
    //
    // .then (
    //   (secFillings) => {
    //       console.log(secFillings)
    //       const $container = $('.container');
    //       for (let i = 0; i < secFillings.length; i++) {
    //       let object = secFillings[i];
    //       const $div1 = $('<div>');
    //       $div1.html(`Symbol: ${object.symbol} <br/>
    //         Country: ${object.country} <br/>
    //         Security Short Volume: ${object.securityShortVolume} <br/>
    //         Stock Regulatory Filings: ${object.stockRegulatoryFillings} <br/><br/>`);
    //       $container.append($div1);
    //
    //     }
    //   },
    //   () => {
    //     //failure
    //     console.log('bad request')
    //   }
    // )










  })
})
