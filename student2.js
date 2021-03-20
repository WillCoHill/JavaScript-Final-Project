const companyName = "Bear Manga";
const storeAddress = "123 Yamamoto St. 55-055 Shinjuku Ni-chome";
const phoneNumber = "+81 12-345-6789";
let cardnum = 0;
let score = 0;
let deckNumbers = Array.from(Array(52).keys());
let cardsInPlay = [];
let adnum = 1;

var product1 = { name:"Polar Bear Cafe", id:"44562", desc:"Panda decides to get a part-time job at the local zoo.", img: "product_image1.jpg"};
var product2 = { name:"Rebord as a Polar Bear: The Legend of How I Became a Forest Guardian", id:"8699", desc:"After a climber falls off a mountain, he wakes up as a polar bear! Now, he has to protect two werewolf sisters and use his wits to navigate the dangers of the forest.", img: "product_image2.jpg"};
var product3 = { name:"Kuma Miko Volume 7", id:"3", desc:"Machi starts a new life in a town by the sea. But what happened to her dreams of moving to the big city? She hasn't made it through those big city trials yet and the first semester of school is already over. Now summer break is already here! Summer is the most important time for a student to prepare for entrance exams, but how will Machi spend her time?", img: "product_image3.jpg"};
var product4 = null;
var product5 = null;
var imgurl = 'http://website2.codyhillsart.x10host.com/images/product_image';
var produrl = imgurl + product1.id + '.gif';

var jsonobj = { "type": "books", "number": "1" };
var jsonobj1 = { "type": "books", "number": "2" };
getProduct(jsonobj);
getProduct(jsonobj1);
var replystr;

const getHeader = () => {
   let headerText = "<h1 ";
   headerText += 'style="width: 100%; background-color: lightblue; font-family: helvetica-standard; text-shadow: 4px 2px #FFF;">';
   headerText += companyName;
   headerText += "</h1>";
   return headerText;
}

const getFooter = (company, address, phone) => {
    let info = "<ul ";
    info += "style='display: inline-block; width: 100%; background-color: gray; margin: 25px; padding: 20px 10px; left: 0; bottom: 0; text-align: left; overflow: hidden;'>";
    info += ("<li>" + company + "</li>");
    info += ("<li>" + address + "</li>");
    info += ("<li>" + phone + "</li>");
    info += ("<li>" + navigator.appName + "</li>");
    info += ("<li>" + navigator.appVersion + "</li>");
    info += ("<li>" + navigator.platform + "</li>");
    info += "</ul>"
    return info;
}

const makeMenu = size => {
    let myString = '';
    for(let i = 0; i < size; i++) {
      myString += '<button type="button" onclick="document.getElementById(\'my_main\').innerHTML = makeMain(product' + (i + 1) + ')">Product #' + (i + 1) + '</button><br>';
    }
    myString += '<button type="button" onclick="document.getElementById(\'my_main\').innerHTML = makeMain(product4)">Product #4</button><br>';
    myString += '<button type="button" onclick="document.getElementById(\'my_main\').innerHTML = makeMain(product5)">Product #5</button><br>';
    myString += '<button type=\"button\" onClick=\"Javascript:dealCards()\">Deal Cards</button><br /><button type=\"button\" onClick=\"Javascript:hitCard()\">Hit Card</button><h2 id=\"score\"></h2><br />';
    myString += '<button type=\"button\" onClick=\"Javascript:popupAd()\">PopUp Ad</button>';
    myString += '<button type=\"button\" onClick=\"Javascript:closeAd()\">Close Ad</button>';
    myString += '<button type=\"button\" onClick=\"Javascript:makeForm()\">Enter Data</button>';
    return myString;
}

const makeMain = (product) => {
  document.getElementById('score').innerHTML = "";
    return ("<table style='width:100%' border=1 cellpadding=10><tr><td rowspan=3 style='width:30%;text-align:center;vertical-align:middle'><span id='prod_img'><img src='" + product.img +"' /></span></td><td id='prod_name'>" + product.name + "</td><td style='text-align:right' id='prod_id'>" + product.id + "</td></tr><tr><td style='text-align:center' colspan=2><span id='prod_bar'>" + makeLinkBar() + "</span> </td></tr><tr><td colspan=2 id='prod_desc'>" + product.desc + "</td></tr></table><table border=0 ><tr><td>");
}

const makeLinkBar = () => {
    return("<form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'><input type='hidden' name='business' value=''><input type='hidden' name='cmd' value='_cart'><input type='hidden' name='add' value='1'> <input type='hidden' name='item_name' value='Test Product For Cart'><input type='hidden' name='amount' value='3.95'><input type='hidden' name='currency_code' value='USD'><input type='image' name='submit' src='https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif' alt='Add to Cart'> <img alt='' width='1' height='1' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'> </form>");
}

const dealCards = () => {
    cardnum = 0;
    cardsInPlay = [];
    document.getElementById('score').innerHTML = 0;
    document.getElementById('my_main').innerHTML = ("<table border=0 ><tr><td><img id=\"card0\" src=\"https://college1.com/classes/cs190/lecture/images/cards/gbCard52.gif\"></td><td><img id=\"card1\" src=\"https://college1.com/classes/cs190/lecture/images/cards/gbCard52.gif\"></td><td><img id=\"card2\" src=\"https://college1.com/classes/cs190/lecture/images/cards/gbCard52.gif\"></td><td><img id=\"card3\" src=\"https://college1.com/classes/cs190/lecture/images/cards/gbCard52.gif\"></td><td><img id=\"card4\" src=\"https://college1.com/classes/cs190/lecture/images/cards/gbCard52.gif\"></td></tr></table>");
    imgURL = 'https://college1.com/classes/cs190/lecture/images';
    while(cardnum < 2) {
    hitCard();
    }
}

const hitCard = () => {
    if(cardnum < 5) {
  imgURL = 'https://college1.com/classes/cs190/lecture/images';
  let whichcard = Math.floor(Math.random() * 1000) % 52;
  imagesrc = imgURL + "/cards/gbCard" + whichcard + ".gif";
  if (cardsInPlay.indexOf(imagesrc) == -1){
    document.getElementById("card" + cardnum).src=imagesrc;
    cardsInPlay.push(imagesrc);
    cardnum++;
  }
} else {
    alert("The maximum amount of cards has already been dealt. \r\n Click \"Deal Cards\" to play again!");
  }    
}

const popupAd = () => {
  ad_window = open("","AdWindow","width=400,height=200");
  ad_window.document.writeln("<div id='my_div'></div>");
  if(adnum == 1) {
    ad_window.document.getElementById("my_div").innerHTML =("<TABLE WIDTH=500 HEIGHT=80 BGCOLOR=lightgreen><TR><TD><A HREF='http://www.college1.com'><h1 ALIGN=CENTER>College1.com</H1></A></TD></TR></TABLE>");
    adnum++;
    } else if(adnum == 2) {
    ad_window.document.getElementById("my_div").innerHTML = ("<TABLE WIDTH=500 HEIGHT=80 BGCOLOR=red><TR><TD><A HREF='http://www.google.com'><h1 ALIGN=LEFT>TRY GOOGLE SEARCH TODAY!</H1></A></TD></TR></TABLE>");
    adnum++;
    } else if(adnum == 3) {
    ad_window.document.getElementById("my_div").innerHTML =("<TABLE WIDTH=500 HEIGHT=80 style=\"background-image:url(ad_image.jpeg)\"><TR><TD><A HREF='http://www.brillopads.com' background=\"ad_image.jpeg\"><h1 ALIGN=CENTER>Brillo Pads! Get them while they\'re scrubby</H1></A></TD></TR></TABLE>");
    adnum = 1;
    }
    ad_window.document.close();
    ad_window.focus();
  }

  const closeAd = () => {
    ad_window.document.close();
  }

  const makeForm = () => {
    document.getElementById('my_main').innerHTML = ("<form onSubmit='return checkForm()' name='customerform' action='https://college1.com/classes/javascript/survey.php'><table width=100% border=1><tr><td>First Name: <input type='text' name='firstname'></td><td align=right> Last Name: <input type='text' name='lastname'></td></tr><tr><td colspan=2>Address: <input type='text' name='address' size =50></td></tr><tr><td>City: <input type='text' name='city'></td><td align=right>State: <input type='text' name='state' size=3> Zip: <input type='text' name='zip' size=6></td><tr><td colspan=2>Email Address: <input type='text' name='emailaddr' size=50></td></tr><tr><td><input type='submit' value='Submit'></td><td align=right><input type='reset'></td></tr></table></form> ");
  }

  const checkForm = () => {
    let data = document.customerform;
    if (data.firstname.value.length <= 0) {
      alert("Please enter a first name.");
      return false;
    }
    if (data.lastname.value.length <= 0) {
      alert("Please enter a last name.");
      return false;
    }
    if (data.address.value.length <= 0) {
      alert("Please enter an address.");
      return false;
    }
    if (data.city.value.length <= 0) {
      alert("Please enter a city.");
      return false;
    }
    if (data.state.value.length <= 0) {
      alert("Please enter a city.");
      return false;
    }
    if (data.zip.value.length <= 0) {
      alert("Please enter a city.");
      return false;
    }
    if (data.emailaddr.value.length <= 0) {
      alert("Please enter a city.");
      return false;
    }
    else {
      alert("Form submitted!")
      return true;
    }
  }

  function getProduct(jsonobj) {
    var server = 'https://college1.com/getproduct.php';
    var jsonstr = JSON.stringify(jsonobj);           // This is a string in JSON format
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", server+"?jsonstr=" + jsonstr, true); // open connection to server
    xmlhttp.send();  // send request, causes onreadystatechange to run when reply is ready 
  
    xmlhttp.onreadystatechange = function () {  
    //console.log('hello ' + this.readyState + ' ' + this.status);
    if (this.readyState == 4 && this.status == 200) {
      replystr =  this.responseText;           // replystr MUST BE GLOBAL
      console.log(replystr);
      if (product4 == null)
          product4 = JSON.parse(replystr);
      else if (product5 == null)
          product5 = JSON.parse(replystr);
      else
          console.log('Error, no object variable available');
    }
   };
  }
  

document.getElementById("header").innerHTML = getHeader();
document.getElementById("footer").innerHTML = getFooter(companyName, storeAddress, phoneNumber);
document.getElementById("my_menu").innerHTML = makeMenu(3);
document.getElementById("my_main").innerHTML = makeMain(product1);