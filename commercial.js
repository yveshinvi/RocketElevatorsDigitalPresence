


function formCommercial() {




    var numberelevator = parseInt( document.forms["commercialForm"]["number-of-elevators"].value);

// Selection de l'une des chockbox

    var checkbouton = document.forms["ckeckForm"]["option1"].value;
    var checkbouton2 = document.forms["ckeckForm"]["option2"].value;
    var checkbouton3 = document.forms["ckeckForm"]["option3"].value;


        if (checkbouton == 1) then

                     {

                var  prixservice= numberelevator x 7565;
                var installation = prixservicex10;
                var frais = installation/100;
                var couttotal = fraisinstallation + frais ;

                document.forms["formCommercial"]["reponse11"].value = numberelevator;
                document.forms["formCommercial"]["reponse12"].value = prixservice;
                document.forms["formCommercial"]["reponse13"].value = frais;
                document.forms["formCommercial"]["reponse14"].value = coutotal;


                }



            if (checkbouton2 == 1) then

                {

                var  prixservice= numberelevator x 12345;
                var installation = prixservice x 13;
                var frais = installation/100;
                var couttotal = fraisinstallation + frais ;

                document.forms["formCommercial"]["reponse11"].value = numberelevator;
                document.forms["formCommercial"]["reponse12"].value = prixservice;
                document.forms["formCommercial"]["reponse13"].value = frais;
                document.forms["formCommercial"]["reponse14"].value = coutotal;


            }
            if (checkbouton3 == 1) then

            {
                    var  prixservice= numberelevator x 15400;
                    var installation = prixservice x 16;
                    var frais = installation/100;
                    var couttotal = fraisinstallation + frais ;

                    document.forms["formResidential"]["reponse11"].value = numberelevator;
                    document.forms["formResidetial"]["reponse12"].value = prixservice;
                    document.forms["formResidential"]["reponse13"].value = frais;
                    document.forms["formResidential"]["reponse14"].value = coutotal;


            }
            }