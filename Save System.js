function addtoarray(...args) {
    let arr = []
    for (let i = 0; i < args.length; i++) {
      arr.push(args[i])
    }
    return arr
}

function cleardata() {
    localStorage.clear()
    notification("localStorage data has been wiped.")
}

  

function loadall() {

    console.log('loadall')

    if (localStorage.length === 0) {
      notification("localStorage is empty")
    } else {

      array1 = loadarray()
      array2 = loadexpantanumarray()

      setvar(array1)
      setexptananumvar(array2)

      console.log(array1)
      console.log(array2)

      notification("localStorage data has been loaded.")

    }
}

function savearray(key, array) {
    let arraystring = JSON.stringify(array)
    localStorage.setItem(key, arraystring)
}

function saveexpantanumarray(key, arr) {
    let arrString = JSON.stringify(arr.map(x => x.toString()));
    localStorage.setItem(key, arrString);
}

function loadarray() {
    let arrString = localStorage.getItem('array1')
    let arr = arrString ? JSON.parse(arrString) : []
    return arr
}

function loadexpantanumarray() {
    let result = [];
    let array2String = localStorage.getItem('array2');
    if (array2String !== null) {
      let array2 = JSON.parse(array2String);
      for (let i = 0; i < array2.length; i++) {
        let value = ExpantaNum.fromString(array2[i]);
        result.push(value);
      }
    }
    return result;
}

function setvar(arr) {

    if(arr[0] !== undefined){ window.phase = arr[0] }
    if(arr[1] !== undefined){ window.p1botnum = arr[1]; p1botprice = p1botnum * 10 + 10; setdisplay("p1botnum", p1botnum); setdisplay("p1botprice", p1botprice) }
    if(arr[2] !== undefined){ window.p1seedbot = arr[2]; if(p1seedbot == 1){; document.getElementById("p1autoseedbot").style="display: none"; document.getElementById("p1autoseed").style="display: block"} }
                


}

function setexptananumvar(arr) {

    if(arr[0] !== undefined){ window.watermelon = arr[0]; setdisplay('watermelon', watermelon) }
    if(arr[1] !== undefined){ window.seed = arr[1].add(1); setdisplay('seed', seed) }
    if(arr[2] !== undefined){ window.p1mbt = arr[2]; setdisplay('p1mbt', p1mbt) }
    if(arr[3] !== undefined){ window.p1botupgradenum = arr[3]; p1botupgradeprice = p1botupgradenum.mul(50).add(50); setdisplay('p1botupgradeprice', p1botupgradeprice) }
    if(arr[4] !== undefined){ window.p1soilupgradenum = arr[4]; p1soilprice = p1soilupgradenum.mul(25).add(25); setdisplay('p1soilprice', p1soilprice) }
    if(arr[5] !== undefined){ window.p1gt = arr[5]; p1gtcheck() }

}

function saveall() {

    notification('The game has been saved.')
    console.log('saveall')

    var array1 = addtoarray(
      phase,
      p1botnum,
      p1seedbot,
    )

    var array2 = addtoarray(
      watermelon.toString(), 
      seed.toString(),
      p1mbt.toString(),
      p1botupgradenum.toString(),
      p1soilupgradenum.toString(),
      p1gt.toString(),
    )

    savearray('array1', array1)
    saveexpantanumarray('array2', array2)

}