import ShoppingItem from "../components/ShoppingItem/ShoppingItem";
// import { useState, useRef, useEffect } from "react";

function App() {
  const fruits = [
    {
      id: 1,
      nombre: "Manzana",
      tipo: "Fruta",
      image:
        "https://www.recetasnestlecam.com/sites/default/files/2022-04/tipos-de-manzana-royal-gala.jpg",
    },
    {
      id: 2,
      nombre: "Pera",
      tipo: "Fruta",
      image:
        "https://lavaquita.co/cdn/shop/products/4862b309-63db-4a89-9c91-96ff13354098_700x700.png?v=1622197530",
    },
    {
      id: 3,
      nombre: "Zanahora",
      tipo: "Verdura",
      image:
        "https://mercaldas.vtexassets.com/arquivos/ids/230361/zanahoria_1-und_122644.jpg?v=637840679751170000",
    },
    {
      id: 4,
      nombre: "Papa",
      tipo: "Tuberculo",
      image: "https://goldenfruit.com.co/wp-content/uploads/2020/05/papa.jpg",
    },
  ];

  // console.log(fruits)

  //   const [name, setName] = useState("");
  //   const inputRef = useRef(null)
  //   // console.log(inputRef)

  //   const handleName = (e) => {
  //     setName(e.target.value);
  //       localStorage.setItem('nombre',name)
  //   };

  //   useEffect(()=> {
  //     console.log("Hola soy un componente que se acaba de crear")
  //     localStorage.removeItem("nombre")
  //   },[])

  return (
    <>
      <div className="presentation">
        <div className="Shopping-container">
          {fruits.map((fruit) => (
            <ShoppingItem
              key={fruit.id}
              nombre={fruit.nombre}
              tipo={fruit.tipo}
              image={fruit.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
