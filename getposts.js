function upStatus()
{
  this.id = "";
}

function post(path, params, method) 
{
   $.ajax({
         crossDomain: true,
         url: path,
         type: "POST",
         data: params,
         dataType: "json",
         success: function(result)
          {
           // console.log("Response " + JSON.stringify(result) );
            var data = JSON.parse(JSON.stringify(result));
            console.log(data[0].username);
            var z = document.getElementById("zone");
            for (var i = 0; i < data.length; i++)
              {
               z.innerHTML = z.innerHTML + "<div id=\"whos\">" + data[i].username + " said the : " + data[i].date + "</div>";
               z.innerHTML = z.innerHTML + "<div id=\"what\">" + data[i].content + "</div></br>";
              }
          },
         error : function(request, textStatus, errorThrown)
          {
            alert('textStatus ' + request);
            alert('textStatus ' + textStatus);
            alert('errorThrown ' + errorThrown);
          }
          });
}

function getposts(f)
{
  if (sessionStorage.getItem("id") == null  || sessionStorage.getItem("id") == (-1))
  {
    window.location.href = "./connection.html";
      return;
  }

  var obj=new upStatus();
  obj["id"]='3';
  var jsondata = JSON.stringify(obj);
  post("http://snenv-epitech-t3xdqsth8a.elasticbeanstalk.com/get_post", jsondata, "POST"); 
  return true;
}