const express = require('express');
const app = express();
const bodyParser=require('body-parser');
var dic={};
var price={'item1':500,'item2':700,'item3':300,'item4':400,'item5':500,'item6':600,'item7':800,'item8':1500,'item9':3000,'item10':1050,'item11':900,'item12':999,'item13':450,'item14':650};
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/my_cart";
var User='xxx';
var TotalAmt=0;
var tamt=0;
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

function myFunction(item,quantity) {
var table = document.getElementById("myTable");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
cell1.innerHTML = item;
cell2.innerHTML = quantity;
}

app.get('/',function(req,res){
    console.log('req from '+req.url);
    res.sendFile(__dirname+'/public/signin.html');

});


app.get('/register',function(req,res){
    console.log('req from'+req.url);
    res.sendFile(__dirname+'/public/register.html');
});


app.get('/login',function(req,res){
  console.log('req from'+req.url);

  res.sendFile(__dirname+'/public/signin.html');
});


app.post('/registered',function(req,res){

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("my_cart");
    var name=req.body.name;
    var email=req.body.email;
    var psw=req.body.psw;
    User=email;
    var myobj = { name: name, email: email,password: psw };
    dbo.collection("customers_info").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log('Successfully registerd');
      db.close();
  });
});
    res.sendFile(__dirname+'/public/ecomarce.html');
});
app.post('/Logins',function(req,res){
    console.log('req from'+req.url);
    const flag=0;
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("my_cart");
    var uname=req.body.username;
    var psw=req.body.password;
    User=uname;
    var query = {email: uname,password: psw };
    dbo.collection("customers_info").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result.length);
      if(result.length>=1)
      {
          res.sendFile(__dirname+'/public/ecomarce.html');
      }
      else {
          res.sendFile(__dirname+'/public/error.html');
      }
      db.close();
  });

});
});

app.get('/add_cart1',function(req,res){
    if('item1' in dic==false)
    {
      dic.item1=1;
    }
    else {
      var temp=dic['item1'];
      temp=temp+1;
      dic.item1=temp;
    }
    console.log(dic);
    res.sendFile(__dirname+'/public/ecomarce.html');
});
app.get('/add_cart2',function(req,res){
  if('item2' in dic==false)
  {
    dic.item2=1;
  }
  else {
    var temp=dic['item2'];
    temp=temp+1;
    dic.item2=temp;
  }
    console.log(dic);
    res.sendFile(__dirname+'/public/ecomarce.html');
});
app.get('/add_cart3',function(req,res){
  if('item3' in dic==false)
  {
    dic.item3=1;
  }
  else {
    var temp=dic['item3'];
    temp=temp+1;
    dic.item3=temp;
  }
  console.log(dic);
    res.sendFile(__dirname+'/public/ecomarce.html');
});
app.get('/add_cart4',function(req,res){
  if('item4' in dic==false)
  {
    dic.item4=1;
  }
  else {
    var temp=dic['item4'];
    temp=temp+1;
    dic.item4=temp;
  }
    console.log(dic);
    res.sendFile(__dirname+'/public/ecomarce.html');
});
app.get('/add_cart5',function(req,res){
  if('item5' in dic==false)
  {
    dic.item5=1;
  }
  else {
    var temp=dic['item5'];
    temp=temp+1;
    dic.item5=temp;
  }
  console.log(dic);
    res.sendFile(__dirname+'/public/ecomarce.html');
});
app.get('/add_cart6',function(req,res){
  if('item6' in dic==false)
  {
    dic.item6=1;
  }
  else {
    var temp=dic['item6'];
    temp=temp+1;
    dic.item6=temp;
  }
  console.log(dic);
    res.sendFile(__dirname+'/public/ecomarce.html');
});
app.get('/add_cart7',function(req,res){
  if('item7' in dic==false)
  {
    dic.item7=1;
  }
  else {
    var temp=dic['item7'];
    temp=temp+1;
    dic.item7=temp;
  }
  console.log(dic);
    res.sendFile(__dirname+'/public/ecomarce.html');
});
app.get('/add_cart8',function(req,res){
  if('item8' in dic==false)
  {
    dic.item8=1;
  }
  else {
    var temp=dic['item8'];
    temp=temp+1;
    dic.item8=temp;
  }
  console.log(dic);
    res.sendFile(__dirname+'/public/ecomarce.html');
});
app.get('/add_cart9',function(req,res){
  if('item9' in dic==false)
  {
    dic.item9=1;
  }
  else {
    var temp=dic['item9'];
    temp=temp+1;
    dic.item9=temp;
  }
  console.log(dic);
    res.sendFile(__dirname+'/public/ecomarce.html');
});
app.get('/add_cart10',function(req,res){
  if('item10' in dic==false)
  {
    dic.item10=1;
  }
  else {
    var temp=dic['item10'];
    temp=temp+1;
    dic.item10=temp;
  }
  console.log(dic);
    res.sendFile(__dirname+'/public/ecomarce.html');
});
app.get('/add_cart11',function(req,res){
  if('item11' in dic==false)
  {
    dic.item11=1;
  }
  else {
    var temp=dic['item11'];
    temp=temp+1;
    dic.item11=temp;
  }
  console.log(dic);
    res.sendFile(__dirname+'/public/ecomarce.html');
});
app.get('/add_cart12',function(req,res){
  if('item12' in dic==false)
  {
    dic.item12=1;
  }
  else {
    var temp=dic['item12'];
    temp=temp+1;
    dic.item12=temp;
  }
  console.log(dic);
    res.sendFile(__dirname+'/public/ecomarce.html');
});
app.get('/add_cart13',function(req,res){
  if('item13' in dic==false)
  {
    dic.item13=1;
  }
  else {
    var temp=dic['item13'];
    temp=temp+1;
    dic.item13=temp;
  }
  console.log(dic);
    res.sendFile(__dirname+'/public/ecomarce.html');
});
app.get('/add_cart14',function(req,res){
  if('item14' in dic==false)
  {
    dic.item14=1;
  }
  else {
    var temp=dic['item14'];
    temp=temp+1;
    dic.item14=temp;
  }
  console.log(dic);
    res.sendFile(__dirname+'/public/ecomarce.html');
});

/*app.get('/cart',function(req,res){
  console.log(req.method);
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("my_cart");
  var myCart = { uname:User,ShoppingList:dic};
  dbo.collection("customer_cart").insertOne(myCart, function(err, res) {
    if (err) throw err;
    console.log('Welcome to cart');
    db.close();
});
});
{
  var value=dic[item];
  myFunction(item,value);
}
res.sendFile(__dirname+'/public/cart.html');

});*/

app.get('/cart', (req, res) => {

  //let obj = { 1: 'one', 2: 'two', 3: 'three' }
console.log('cart req');

  let result='<!DOCTYPE html>';
result+='<html>'+
'<head>'
+'<style>'
+'table {font-family: arial, sans-serif;border-collapse: collapse;width: 100%;} ';
result+='td, th {border: 1px solid #dddddd;text-align: left;padding: 8px;}'+'tr:nth-child(even) {background-color: #dddddd;}'+
'<title>E-Commerce website</title>';
result+='</style>'+
'</head>';
result+='<body>';

result+='<table>';
result+='<tr>'+
   '<th>ITEMS</th>'+
   '<th>QUANTITY</th>'+
   '<th>PRICE</th>'+
   '<th>TOTAL</th>'+
 '</tr>';
  for (let item in dic) {
    result += "<tr><td>" + item + "</td><td>" + dic[item] + "</td> <td>" + price[item] + "</td> <td>" +'Rs'+ price[item]*dic[item] + "</td></tr>";
    TotalAmt=TotalAmt+price[item]*dic[item];
  }
  result += '</table>';
  result+='<p>'
  +'<h1>'+'TOTAL AMOUNT : '+'Rs '+TotalAmt+'</h1>'
  +'</p>'
  +'<br>';
  result+='<form action="/check_out" method="get">';
  result+='<button type="submit" >'+'Check Out'+'</button>';
  result+='</form>';
  result+='</body>';
  result+='</html>';
  res.send(result);

});

app.get('/check_out',function(req,res){

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("my_cart");
    for(let itm in dic)
    {
      tamt=tamt+price[itm]*dic[itm];
    }
    var myCart = { uname:User,ShoppingList:dic,TotalAmount:tamt};
    dbo.collection("customer_cart").insertOne(myCart, function(err, res) {
      if (err) throw err;
      console.log('Welcome to cart');
      db.close();
    });
    });

    res.sendFile(__dirname+'/public/thanks.html');
});

app.get('/logout',function(req,res){
  TotalAmt=0;
  dic={};
  res.sendFile(__dirname+'/public/signin.html');
});

console.log("Server started at port 5000");
app.listen(5000,'127.0.0.1')
