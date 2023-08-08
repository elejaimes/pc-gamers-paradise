import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const products = [
    {
      id: 1,
      name: "All-in-One SuperSpeed",
      type: "Computadoras",
      category: "All-in-One",
      stock: 10,
      price: 999.99,
    },
    {
      id: 2,
      name: "Desktop HyperCore X",
      type: "Computadoras",
      category: "Escritorio",
      stock: 5,
      price: 1499.99,
    },
    {
      id: 3,
      name: "AMD Ryzen 9 5950X Processor",
      type: "Componentes",
      category: "Procesadores",
      stock: 15,
      price: 699.99,
    },
    {
      id: 4,
      name: "Intel Core i7-12700K Processor",
      type: "Componentes",
      category: "Procesadores",
      stock: 10,
      price: 549.99,
    },
    {
      id: 5,
      name: "ASUS ROG Strix B560-F Gaming Motherboard",
      type: "Componentes",
      category: "Placas Base",
      stock: 10,
      price: 199.99,
    },
    {
      id: 6,
      name: "MSI MAG B550 Tomahawk Motherboard",
      type: "Componentes",
      category: "Placas Base",
      stock: 4,
      price: 179.99,
    },
    {
      id: 7,
      name: "Corsair Vengeance RGB Pro 32GB DDR4 Memory",
      type: "Componentes",
      category: "Memorias",
      stock: 20,
      price: 199.99,
    },
    {
      id: 8,
      name: "G.Skill Ripjaws V 16GB DDR4 Memory",
      type: "Componentes",
      category: "Memorias",
      stock: 25,
      price: 129.99,
    },
    {
      id: 9,
      name: "NVIDIA GeForce RTX 3080 Ti Graphics Card",
      type: "Componentes",
      category: "Tarjetas Gráficas",
      stock: 12,
      price: 1199.99,
    },
    {
      id: 10,
      name: "AMD Radeon RX 6900 XT Graphics Card",
      type: "Componentes",
      category: "Tarjetas Gráficas",
      stock: 9,
      price: 999.99,
    },
    {
      id: 11,
      name: "Samsung 980 PRO 1TB NVMe SSD",
      type: "Componentes",
      category: "Almacenamiento",
      stock: 20,
      price: 199.99,
    },
    {
      id: 12,
      name: "Western Digital WD Black 4TB HDD",
      type: "Componentes",
      category: "Almacenamiento",
      stock: 8,
      price: 249.99,
    },
    {
      id: 13,
      name: "NZXT H510i Compact ATX Mid-Tower Case",
      type: "Componentes",
      category: "Gabinetes",
      stock: 14,
      price: 99.99,
    },
    {
      id: 14,
      name: "Cooler Master MasterBox TD500 Mesh Case",
      type: "Componentes",
      category: "Gabinetes",
      stock: 6,
      price: 119.99,
    },
    {
      id: 15,
      name: "Corsair RM850x 850W 80+ Gold Power Supply",
      type: "Componentes",
      category: "Fuentes de Poder",
      stock: 11,
      price: 139.99,
    },
    {
      id: 16,
      name: "EVGA Supernova 750W 80+ Platinum Power Supply",
      type: "Componentes",
      category: "Fuentes de Poder",
      stock: 9,
      price: 159.99,
    },
    {
      id: 17,
      name: "NZXT Kraken X73 360mm AIO Cooler",
      type: "Componentes",
      category: "Refrigeración",
      stock: 8,
      price: 169.99,
    },
    {
      id: 18,
      name: "Noctua NH-D15 Chromax Black Cooler",
      type: "Componentes",
      category: "Refrigeración",
      stock: 5,
      price: 89.99,
    },
    {
      id: 19,
      name: "ASUS ROG Swift PG279Q 27-inch Gaming Monitor",
      type: "Monitores",
      category: "Monitores",
      stock: 6,
      price: 599.99,
    },
    {
      id: 20,
      name: "Samsung Odyssey G7 32-inch Curved Gaming Monitor",
      type: "Monitores",
      category: "Monitores",
      stock: 4,
      price: 699.99,
    },
    {
      id: 21,
      name: "Logitech G Pro X Mechanical Keyboard",
      type: "Periféricos",
      category: "Teclados",
      stock: 20,
      price: 129.99,
    },
    {
      id: 22,
      name: "Razer DeathAdder V2 Gaming Mouse",
      type: "Periféricos",
      category: "Mouse",
      stock: 25,
      price: 69.99,
    },
    {
      id: 23,
      name: "Gamer BeastMaster Desktop",
      type: "Computadoras",
      category: "Computadoras Gamer",
      stock: 12,
      price: 1799.99,
    },
    {
      id: 24,
      name: "Gamer TitanX Desktop",
      type: "Computadoras",
      category: "Computadoras Gamer",
      stock: 12,
      price: 1999.99,
    },
  ];
  const getProducts = new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject(new Error("No hay datos"));
    }
  });

  getProducts
    .then((res) => {})
    .catch((error) => {
      console.log(error);
    });
  const filteredProducts = products.filter((p) => p.category === category);

  return (
    <div>
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;
