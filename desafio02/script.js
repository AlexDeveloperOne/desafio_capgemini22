        let exampleOne = [4, 3, 5, 2, 1];
        let exampleTwo = [7, 4, 3, 5, 2, 1, 6];
        let exampleThree = [7, 4, 9, 3, 8, 5, 2, 1, 6];
        let arr = [9, 2, 1, 4, 6]
        let evenArray = [9, 2, 7, 1, 4, 6];

        function pairDifference (vector, factor){
            let contDifference = 0;
            let tam = vector.length;
            for (let i=0 ; i < tam ; i++){
                for (let j=0 ; j < tam ; j++){
                    if (i != j){
                        if (vector[i]-vector[j] == factor){
                            contDifference += 1;
                        }
                    }
                }
            }
            return contDifference;
        }
        let n = [1, 5, 3, 4, 2];

        console.log("Diferença com 2: " + pairDifference(exampleOne, 2));

        console.log(pairDifference(exampleOne, 1));

        console.log("Exemplo Original: " + pairDifference(n, 2) + " pares com diferença " + 2);

        console.log("fim da diferença!!");
        