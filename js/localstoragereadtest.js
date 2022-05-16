window.addEventListener('load', () => {
    let address = localStorage.getItem("address")

    if(address == null) {
        $("#walletAddress").html("Connect Wallet")
    } else {
        let truncAddress = address.substring(0,5) + "..." + address.substring(address.length - 4)
        $("#walletAddress").html(truncAddress)
    }

    console.log(address)
});