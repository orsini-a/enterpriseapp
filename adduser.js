function User()
{
this.username = "";
this.password = "";
this.mail = "";
}

function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifPseudo(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function checkPass(mdp1, mdp2)
{
if(mdp1.value === mdp2.value)
   return true;
else
   return false;
}

function verifPass(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function newUserToJSon(pseudo, pass, mail, follow)
{
   consol.log("ok");
   var _user = new User(pseudo, pass, mail, follow);
   return JSON.stringify(_user);
}

function post(path, params, method) 
{
    $.ajax({
         crossDomain: true,
         url: path,
         type: "POST",
         data: params,
                  dataType: "json",
         success: function(result) {
             console.log("Response " + params);
          },
      error : function(request, textStatus, errorThrown) {
        alert('textStatus ' + request);

        alert('textStatus ' + textStatus);
        alert('errorThrown ' + errorThrown);
       }
          });
}

function getCreateResponse(f)
{
   var pseudoOk = verifPseudo(f.pseudo);
   var mailOk = verifMail(f.email);
   var mdp1 = verifPass(f.mdp1);
   var mdp2 = verifPass(f.mdp2);
   
   if(mdp1 && mdp2)
      var mdpOk = checkPass(f.mdp1, f.mdp2);
   else
   var mdpOk = false;

   if(pseudoOk && mailOk && mdpOk)
   {
      var obj=new User();
      obj["username"]=f.pseudo.value;
      obj["password"]=f.mdp1.value;
      obj["mail"]=f.email.value;
      var jsondata = JSON.stringify(obj);
      post("http://snenv-epitech-t3xdqsth8a.elasticbeanstalk.com/add_user", jsondata, "POST");
      alert("ok"); 
      return true;
   }
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}