        
        const stringName = "Esse e um teste";
        const newString = stringName.replace(/,/g, "").replace(/[\.\s\t]/g, "");
        var numIndice = 0;
        console.log(numIndice);

        for(let i=0 ; i < newString.length ; i++)
        {
            varBoolean = (i * i) > newString.length;

            if(varBoolean){
                numIndice = i;
                break;
            }
        }

        console.log("numIndice = " + numIndice);

        console.log(newString);
        
        console.log("tamanho " + newString.length);