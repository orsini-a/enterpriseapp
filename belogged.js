function sendlogin()
{
this.mail = "";
this.password = "";
}

function postlog(path, params, method) 
{
    $.ajax({
         crossDomain: true,   
         url: path,
         type: "POST",
         data: params,
         cache: false,
        dataType: "json",
         success: function(result) {
             console.log("Response " + JSON.stringify(result) );  
            
             var mdata = JSON.parse(JSON.stringify(result));
             sessionStorage.id = mdata.id;
             window.location.href = "./updateStatu.html"
          },
      error : function(request, textStatus, errorThrown) {
        alert('textStatus ' + request);
        alert('textStatus ' + textStatus);
        alert('errorThrown ' + errorThrown);
       }
          });
}

function loged(f)
{
  var obj=new sendlogin();
  obj["mail"]=f.email.value;
  obj["password"]=f.pass.value;
  jsondata = JSON.stringify(obj);
  postlog("http://snenv-epitech-t3xdqsth8a.elasticbeanstalk.com/login", jsondata, "POST");
  alert("ok"); 
  return true;
}