        /*const ordenar = document.getElementById('ordenar');
        ordenar.addEventListener('click', ordenaArray);

        const mediana = document.getElementById('median');
        mediana.addEventListener('click', centralElement);*/

        let exampleOne = [4, 3, 5, 2, 1];
        let exampleTwo = [7, 4, 3, 5, 2, 1, 6];
        let exampleThree = [7, 4, 9, 3, 8, 5, 2, 1, 6];
        let arr = [9, 2, 1, 4, 6]
        let evenArray = [9, 2, 7, 1, 4, 6];
        
        var array = [];

        function adicionar(valor){
            array.push(valor);
            console.log(valor);
            console.log(array);
        }

        function ordenaArray(arr) {
            function is_array_sorted(arr) {
                let ordenado = true;
                for (var i = 0; i < arr.length - 1; i++) {
                    if (arr[i] > arr[i + 1]) {
                        ordenado = false;
                        break;
                    }
                }
                return ordenado;
            }

            var iteration_count = 0;
            var gap = arr.length - 2;
            var decrease_factor = 1.25;

            // Repita as iterações até que o array não seja ordenado

            while (!is_array_sorted(arr)) {
                // Se não for o primeiro intervalo Calcular o intervalo
                if (iteration_count > 0)
                    gap = (gap == 1) ? gap : Math.floor(gap / decrease_factor);

                // Defina os elementos frontais e traseiros e incremente para um intervalo
                var front = 0;
                var back = gap;
                while (back <= arr.length - 1) {
                    // Troque os elementos se não estiverem ordenados

                    if (arr[front] > arr[back]) {
                        var temp = arr[front];
                        arr[front] = arr[back];
                        arr[back] = temp;
                    }

                    // Incrementar e executar novamente a troca

                    front += 1;
                    back += 1;
                }
                iteration_count += 1;
            }          
            return arr;
        }

        //ordenaArray("testanto: " + exampleThree);

        function centralElement (arr){

            if(arr.length%2 !== 0){
                //console.log("Original Array");
                //console.log(arr);
                console.log("Sorted Array");
                console.log(ordenaArray(arr));
                console.log("Median: " + ordenaArray(arr)[(arr.length/2)-((arr.length%2)/2)]);
            } else {
                console.log(`Você deve utilizar um vetor com numero IMPAR de elementos!`);
            }
        }
        
        
        /*console.log("ExampleTwo");
        centralElement(exampleTwo);

        console.log("arr");
        centralElement(arr);

        console.log("ExampleOne");
        centralElement(exampleOne);*/
        
        console.log("To -> ExampleThree");
        centralElement(exampleThree);

        console.log("To -> Even Array");
        centralElement(evenArray);