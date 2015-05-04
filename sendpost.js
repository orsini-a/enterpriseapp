function upSta()
{
this.id_user = "";
this.content = "";

}

function spost(path, params, method) 
{
	console.log(JSON.stringify(params));
    $.ajax({
         crossDomain: true,     
         url: path,
         type: "POST",
         data: params,
                  dataType: "json",
         success: function(result) {
             console.log("Response " + JSON.stringify(result) );//JSON.stringify(result));          
          },
      error : function(request, textStatus, errorThrown) {
        alert('textStatus ' + request);
        alert('textStatus ' + textStatus);
        alert('errorThrown ' + errorThrown);
       }
          });
}


function tat(f)
{

var obj=new upSta();
obj["id_user"]='86';//f.uid.value;//f.pseudo.value; // document.getElementById('nom').value
obj["content"]='test';//f.uid.value;//f.pseudo.value; // document.getElementById('nom').value
var jsondata = JSON.stringify(obj); //convertir l'objet au format json
spost("http://snenv-epitech-t3xdqsth8a.elasticbeanstalk.com/add_post", jsondata, "POST");

alert("ok"); 
      return true;
   }
