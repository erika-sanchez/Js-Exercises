//Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la propiedades nombre, alcohol (abv) y "amargor" (ibu)

let filtrarCervezasPorAlcohol = (cervezas, nivelAlcohol) => {
    return cervezas.filter(cerveza => cerveza.alcohol <= nivelAlcohol)
        .map(cerveza => ({
            nombre: cerveza.nombre,
            alcohol: cerveza.alcohol,
            amargor: cerveza.amargor
        }));
    };

  //2-  Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas más alcohólicas
    let obtenerCervezasMasAlcoholicas = cervezas => {
        let cervezasMasAlcoholicas = [];
        
        for (let i = 0; i < cervezas.length; i++) {
        let cerveza = cervezas[i];
        
        if (cervezasMasAlcoholicas.length < 10) {
            cervezasMasAlcoholicas.push(cerveza);
        } else {
            let cervezaMenosAlcoholica = cervezasMasAlcoholicas[0];
            
            for (let j = 1; j < cervezasMasAlcoholicas.length; j++) {
            if (cervezasMasAlcoholicas[j].alcohol < cervezaMenosAlcoholica.alcohol) {
                cervezaMenosAlcoholica = cervezasMasAlcoholicas[j];
            }
            }
            
            if (cerveza.alcohol > cervezaMenosAlcoholica.alcohol) {
            const index = cervezasMasAlcoholicas.indexOf(cervezaMenosAlcoholica);
            cervezasMasAlcoholicas[index] = cerveza;
            }
        }
        }
        
        return cervezasMasAlcoholicas;
    };



  //3-  Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas menos amargas

    let obtenerCervezasMenosAmargas = cervezas => {
        let cervezasMenosAmargas = [];
        
        for (let i = 0; i < cervezas.length; i++) {
        let cerveza = cervezas[i];
        
        if (cervezasMenosAmargas.length < 10) {
            cervezasMenosAmargas.push(cerveza);
        } else {
            let cervezaMasAmarga = cervezasMenosAmargas[0];
            
            for (let j = 1; j < cervezasMenosAmargas.length; j++) {
            if (cervezasMenosAmargas[j].amargor > cervezaMasAmarga.amargor) {
                cervezaMasAmarga = cervezasMenosAmargas[j];
            }
            }
            
            if (cerveza.amargor < cervezaMasAmarga.amargor) {
            let index = cervezasMenosAmargas.indexOf(cervezaMasAmarga);
            cervezasMenosAmargas[index] = cerveza;
            }
        }
        }
        
        return cervezasMenosAmargas;
    };


// 4-  Generar una función que reciba como parámetro un array de cervezas, un nombre de propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento, de manera ascendente si el tercero es true o descendente si es false

let ordenarCervezasPorPropiedad = (cervezas, propiedad, ascendente = true) => {
    let cervezasOrdenadas = [...cervezas];
    
        for (let A = 0; A < cervezasOrdenadas.length - 1; A++) {
        for (let B = A + 1; B < cervezasOrdenadas.length; B++) {
            let valorA = cervezasOrdenadas[B][propiedad];
            let valorB = cervezasOrdenadas[A][propiedad];
    
            if (ascendente ? valorA < valorB : valorA > valorB) {
            [cervezasOrdenadas[A], cervezasOrdenadas[B]] = [cervezasOrdenadas[B], cervezasOrdenadas[A]];
            }
        }
        }
    
        return cervezasOrdenadas.slice(0, 10);
    };

// 5-  Generar una función que reciba como parámetro un array de cervezas y un id. La función debe renderizar (renderear, dibujar, pintar, llenar, etc) en un  archivo html una tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del array. Cada fila debe tener los datos que se piden  de cada una de las cervezas.


const crearMaqueta = (cerveza) => {
    return `
        <ul>
            <li>Name: ${cerveza.name}</li>
            <li>ABV: ${cerveza.abv}</li>
            <li>IBU: ${cerveza.ibu}</li>
        </ul>
        `;
    };
    
    const filtrarMaqueta = (arrayCervezas) => {
        const arrayFiltrado = [];
        arrayCervezas.forEach((cerveza) => {
        const maqueta = crearMaqueta(cerveza);
        arrayFiltrado.push(maqueta);
        });
        return arrayFiltrado;
    };
    
    const imprimirMaqueta = (arrayCervezas) => {
        const cajaCervezas = document.getElementById("caja-cervezas");
        arrayCervezas.forEach((cerveza) => {
        const maqueta = crearMaqueta(cerveza);
        cajaCervezas.innerHTML += maqueta;
        });
    };
    
//   // Ejemplo de datos de cervezas
//   const cervezas = [
//     { name: "Cerveza 1", abv: 5.0, ibu: 20 },
//     { name: "Cerveza 2", abv: 6.5, ibu: 30 },
//     { name: "Cerveza 3", abv: 4.8, ibu: 15 },
//     { name: "Cerveza 4", abv: 7.2, ibu: 40 }
//   ];
  
//   // Llamar a la función para filtrar y imprimir la maqueta
//   const maquetasFiltradas = filtrarMaqueta(cervezas);
//   imprimirMaqueta(maquetasFiltradas);