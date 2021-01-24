function formResidential() {

    // The variable n1 is the number apartments
    var n1 = parseInt(document.forms["formResidential"]["number-of-apartments"].value);

    // The variable n2 is the number of floors

    var n2= = parseInt(document.forms["formResidential"]["number-of-floors"].value) ;

    // Mp is average of floors

            MP=n1/n2;
      // resultat avec modulo

// soit numberelevator le nombre d'elevators


      result = MP/6 % 6 ;

       if(result == 0)  {
                var numberelevator = result;
                } else

                 {
                    numberelevator = result + 1;
                 }


// selection des chexbos

    var checkbouton = document.forms["ckeckForm"]["option1"].value;
    var checkbouton2 = document.forms["ckeckForm"]["option2"].value;
    var checkbouton3 = document.forms["ckeckForm"]["option3"].value;

        if (checkbouton == 1) then

                     {

                var  prixservice= numberelevator x 7565;
                var installation = prixservice x 10;
                var frais = installation/100;
                var couttotal = prixservice + frais ;

                 document.forms["myForm1"]["reponse11"].value = numberelevator;
                 document.forms["myForm1"]["reponse12"].value = prixservice;
                 document.forms["myForm1"]["reponse13"].value = frais;
                 document.forms["myForm1"]["reponse14"].value = coutotal;

                }



            if (checkbouton2 == 1) then

                {

                   var  prixservice= numberelevator x 12345;
                   var installation = prixservice x 13;
                   var frais = installation/100;
                   var couttotal = prixservice + frais ;

                document.forms["formResidential"]["reponse11"].value = numberelevator;
                document.forms["formResidetial"]["reponse12"].value = prixservice;
                document.forms["formResidential"]["reponse13"].value = frais;
                document.forms["formResidential"]["reponse14"].value = coutotal;

            }

            if (checkbouton3 == 1) then

                {
                    var  prixservice= numberelevator x 15400;
                    var installation = prixservice x 16;
                    var frais = installation/100;
                    var couttotal = prixservice + frais ;

                document.forms["formResidential"]["reponse11"].value = numberelevator;
                document.forms["formResidential"]["reponse12"].value = prixservice;
                document.forms["formResidentiial"]["reponse13"].value = frais;
                document.forms["formResidential"]["reponse14"].value = coutotal;

                }
            }