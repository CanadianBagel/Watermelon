

var watermelon = ExpantaNum("0");
var seed = ExpantaNum("1");
var phase = 1 
var test = 1
var var1, var2, var3, var4, var5, var6
    
var p1mbt = ExpantaNum(10000)
var p1botnum = 0
var p1botprice = 10
var p1botupgradeprice = ExpantaNum(50)
var p1botupgradenum = ExpantaNum(0)
var p1seedbot = 0

var p1soilupgradenum = ExpantaNum(0)
var p1soilprice = ExpantaNum(25)
var p1gt = ExpantaNum(4000)

    
document.addEventListener('DOMContentLoaded', function() {
      
    loadall()

    autosave = setInterval(() => {
        saveall()
    }, 60000);
      
})


setInterval(() => {
    let watermelonplural = watermelon == "1" ? "Watermelon" : "Watermelons"
    document.getElementById("watermelonplural").innerHTML = watermelonplural
}, 100)

setInterval(() => {
    let seedplural = seed == "1" ? "Watermelon Seed" : "Watermelon Seeds"
    document.getElementById("seedplural").innerHTML = seedplural
}, 100)



function p1checkwatermelonmilestone0() {
    if (watermelon.gte(10)) {
        var div = document.getElementById("p1melonharvestbotdiv")
        div.style.display = "block"

        if(p1botnum == 9){
            document.getElementById("p1botpurchasediv").style.display = "none"
        }
        if(p1mbt == 250){
            document.getElementById("p1botupgradediv").style.display = "none"
        }

        clearInterval(p1milestonecheck0intervalId)
    }
}
  
const p1milestonecheck0intervalId = setInterval(p1checkwatermelonmilestone0, 1000)

function p1checkwatermelonmilestone1() {
    if (watermelon.gte(25)) {
      if(p1seedbot == 0){
        var div2 = document.getElementById("p1autoseedbot")
        div2.style.display = "block"
      } else if(p1seedbot == 1){
        document.getElementById('p1autoseedbot').style.display = "none"
        document.getElementById('p1autoseed').style.display = "block"
      }
      var div3 = document.getElementById("p1variedupgrades")
      div3.style.display = "block"
      clearInterval(p1milestonecheck1intervalId)
    }
}
  
const p1milestonecheck1intervalId = setInterval(p1checkwatermelonmilestone1, 1000)

function p1checkcompletion() {
    if(watermelon!== undefined && watermelon!== null && watermelon.gte(1000) && p1botnum == 9 && p1mbt.eq(250) && p1gt.eq(1000)) {
      document.getElementById("p1completediv").style.display = "block"
      clearInterval(p1checkcompletionintervalId)
    }
}

const p1checkcompletionintervalId = setInterval(p1checkcompletion, 1000)

p1botprice = p1botnum * 10 + 10
            
function p1botpurchase(){
    if(watermelon.gte(p1botprice) && ExpantaNum.lt(p1botnum,9)){
        watermelon = watermelon.sub(p1botprice)
        p1botnum += 1
        p1botprice = p1botnum * 10 + 10
        document.getElementById("watermelon").innerHTML = watermelon.toString()
        document.getElementById("p1botnum").innerHTML = p1botnum.toString()
        document.getElementById("p1botprice").innerHTML = p1botprice.toString()
        document.getElementById("p1botplural").innerHTML = p1botnum === 1 ? "Watermelon Harvest Bot" : "Watermelon Harvest Bots"
        p1stopbotharvest()
        p1startbotharvest()
        if(p1botnum === 9){
            var p1botpurchasediv = document.getElementById("p1botpurchasediv")
            p1botpurchasediv.style.display = "none"
        }
    } 
}

let botharvestintervalid;

function p1startbotharvest() {
  botharvestintervalid = setInterval(() => {
    if(p1botnum == 9) {
      p1plant1(); p1plant2(); p1plant3(); p1plant4(); p1plant5(); p1plant6(); p1plant7(); p1plant8(); p1plant9()
    } else if(p1botnum == 8)  {
      p1plant1(); p1plant2(); p1plant3(); p1plant4(); p1plant5(); p1plant6(); p1plant7(); p1plant8()
    } else if(p1botnum == 7) {
      p1plant1(); p1plant2(); p1plant3(); p1plant4(); p1plant5(); p1plant6(); p1plant7()
    } else if(p1botnum == 6) {
      p1plant1(); p1plant2(); p1plant3(); p1plant4(); p1plant5(); p1plant6()
    } else if(p1botnum == 5) {
      p1plant1(); p1plant2(); p1plant3(); p1plant4(); p1plant5()
    } else if(p1botnum == 4) {
      p1plant1(); p1plant2(); p1plant3(); p1plant4()
    } else if(p1botnum == 3) {
      p1plant1(); p1plant2(); p1plant3()
    } else if(p1botnum == 2) {
      p1plant1(); p1plant2()
    } else if(p1botnum == 1) {
      p1plant1()
    }

  }, p1mbt);
}

function p1stopbotharvest() {
  clearInterval(botharvestintervalid);
}
  
function p1botupgradepurchase(){
  if(watermelon.gte(p1botupgradeprice)){
    p1botupgradenum = p1botupgradenum.add(1)
    watermelon = watermelon.sub(p1botupgradeprice)
    document.getElementById("watermelon").innerHTML = watermelon.toString()
    p1botupgradeprice = p1botupgradenum.mul(50).add(50)
    document.getElementById("p1botupgradeprice").innerHTML = p1botupgradeprice
    p1mbt = p1mbt.sub(ExpantaNum(1500))
    document.getElementById("p1mbt").innerHTML = p1mbt.toString()
    p1stopbotharvest()
    p1startbotharvest()
    if(p1mbt.lte(ExpantaNum(250))){
      p1mbt = ExpantaNum(250)
      document.getElementById("p1mbt").innerHTML = p1mbt.toString()
      document.getElementById('p1botupgradediv').style.display = 'none'
      p1stopbotharvest()
      p1startbotharvest()
    }
  }
}

function p1seedbotpurchased(){
    if(watermelon.gte(50) && p1seedbot == 0){
      watermelon = watermelon.sub(50) ; document.getElementById('watermelon').innerHTML = watermelon.toString()
      p1seedbot = 1
      document.getElementById("p1autoseedbot").style="display: none"
      document.getElementById("p1autoseed").style="display: block"
    } else if(p1seedbot == 1){
      document.getElementById("p1autoseedbot").style="display: none"
      document.getElementById("p1autoseed").style="display: block"
    }
}

function p1seedconvert() {
    const inputValue = document.getElementById("p1seedconvertrate").value;
    const parsedValue = parseInt(inputValue);

    if (isNaN(parsedValue) || parsedValue <= 0 || parsedValue % 1 !== 0) {
        alert("Please enter a positive whole number.");
        return;
    }

    const p1seedconvertrate = ExpantaNum(inputValue);

    if (watermelon.gte(p1seedconvertrate)) {
        seed = seed.add(p1seedconvertrate.mul(5)); 
        document.getElementById("seed").innerHTML = seed.toString();
        watermelon = watermelon.sub(p1seedconvertrate); 
        document.getElementById("watermelon").innerHTML = watermelon.toString();
    } else {
        const seedsToAdd = watermelon.mul(5);
        seed = seed.add(seedsToAdd); 
        document.getElementById("seed").innerHTML = seed.toString();
        alert(`You converted ${seedsToAdd.toString()} Seeds because you only had ${watermelon.toString()} Watermelons.`);
        watermelon = ExpantaNum(0); 
        document.getElementById("watermelon").innerHTML = watermelon.toString();
    }
}

function p1seedautoconvert() {

    var p1seedautoconvertrate0 = ExpantaNum(document.getElementById("p1seedautoconvertrate").value)
    if(p1seedautoconvertrate0 > 0 && p1seedautoconvertrate0 % 1 === 0){
      if(ExpantaNum.gte(watermelon,p1seedautoconvertrate0)){
        watermelon = watermelon.sub(p1seedautoconvertrate0) ; document.getElementById('watermelon').innerHTML = watermelon.toString()
        seed = seed.add(ExpantaNum.mul(p1seedautoconvertrate0, 5)) ; document.getElementById('seed').innerHTML = seed
      }
    }
}
    
function p1seedautoinitiate(){
    let p1seedautointervalid= setInterval(p1seedautoconvert, 10000)
    document.getElementById("p1seedinitiatebutton").style="display: none"
}

function p1soilpurchase() {
    if(watermelon.gte(p1soilprice)){
      p1soilupgradenum = p1soilupgradenum.add(1)
      watermelon = watermelon.sub(p1soilprice); document.getElementById('watermelon').innerHTML = watermelon.toNumber()
      p1soilprice = p1soilupgradenum.mul(25).add(25); document.getElementById('p1soilprice').innerHTML = p1soilprice.toNumber()
      p1gt = p1gt.sub(500)
      p1gtcheck()
    }
}

function p1gtcheck(){
    document.getElementById('p1gt').innerHTML = p1gt.toNumber()
    if(p1gt.lte(1000)){
      document.getElementById('p1soilupgradediv').style.display = 'none'
      p1gt = ExpantaNum(1000)
    }
}

const p1plant1 = p1plant("p1watermelonplant1")
const p1plant2 = p1plant("p1watermelonplant2")
const p1plant3 = p1plant("p1watermelonplant3")
const p1plant4 = p1plant("p1watermelonplant4")
const p1plant5 = p1plant("p1watermelonplant5")
const p1plant6 = p1plant("p1watermelonplant6")
const p1plant7 = p1plant("p1watermelonplant7")
const p1plant8 = p1plant("p1watermelonplant8")
const p1plant9 = p1plant("p1watermelonplant9")


const p1URL0 = "url('artwork/p1watermelonplant0.png')";
const p1URL1 = "url('artwork/p1watermelonplant1.png')";
const p1URL2 = "url('artwork/p1watermelonplant2.png')";
const p1URL3 = "url('artwork/p1watermelonplant3.png')";


function p1plant(plantId) {
    let plantPhase = ExpantaNum("1")

    return function() {
        if (plantPhase.eq(1) && seed.gt(0)) {
            seed = seed.sub(1)
            plantPhase = plantPhase.add(1)
            document.getElementById("seed").innerHTML = seed
            document.getElementById(plantId).style.backgroundImage = p1URL1
            setTimeout(() => {
                document.getElementById(plantId).style.backgroundImage = p1URL2
                plantPhase = plantPhase.add(1)
                setTimeout(() => {
                document.getElementById(plantId).style.backgroundImage = p1URL3
                plantPhase = plantPhase.add(1)
                }, p1gt)
            }, p1gt)
        }
        if (plantPhase.eq(4)) {
            document.getElementById(plantId).style.backgroundImage = p1URL0
            watermelon = watermelon.add(1)
            plantPhase = ExpantaNum("1")
            document.getElementById("watermelon").innerHTML = watermelon
            document.getElementById("watermelonplural").innerHTML = watermelon.eq(1) ? "Watermelon" : "Watermelons"
        }
    }
}