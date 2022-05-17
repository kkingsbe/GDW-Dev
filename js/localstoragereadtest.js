window.addEventListener('load', async () => {
    let address = localStorage.getItem("address")

    if(address == null) {
        $("#walletAddress").html("Connect Wallet")
    } else {
        let truncAddress = address.substring(0,5) + "..." + address.substring(address.length - 4)
        $("#walletAddress").html(truncAddress)

        //Only show edit button if the user is the owner of the given nft
        if(await isOwner({address, id: "22397481368411838953467959367242755130058808779998063417175655766280300920833"})) {
            $("#editBtn").css("display", "block")
            console.log("You're the owner!")
        } else {
            console.log("You're not the owner!")
        }
    }

    console.log(address)
});