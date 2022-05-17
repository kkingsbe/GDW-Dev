async function isOwner({address, id}) {
 return new Promise((resolve, reject) => {
    const options = {method: 'GET', headers: {'X-API-KEY': '0f3b81c5d2dd4d10889c8eded4820380'}};

    fetch(`https://api.opensea.io/api/v1/asset/0x495f947276749ce646f68ac8c248420045cb7b5e/${id}/?include_orders=false`, options)
      .then(response => response.json())
      .then(response => {
          let owner = response.top_ownerships[0].owner.address
          if(owner == address) resolve(true)
          else resolve(false)
      })
      .catch(err => reject(err));
 })
}