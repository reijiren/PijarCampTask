function diskon(jum, harga){
    const total = harga * jum;
    let potongan = 0;

    if(total >= 60000){
        potongan = total * 35/100;
        
        if(potongan >= 50000){
            potongan = 50000;
        }
    }
    const subtotal = total - potongan;

    console.log("Total Harga : " + total)
    console.log("Potongan    : " + potongan);
    console.log("Subtotal    : " + subtotal)

    return subtotal;
}

diskon(30, 1500);
diskon(3, 25000);
diskon(4, 60000);
