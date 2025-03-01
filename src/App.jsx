import React, { useState } from "react";
import html2canvas from "html2canvas";
import "./App.css";

// Lista de productos
const productos = [
  {
    nombre: 'Chocolate',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AL01', Limay: 'LL01' },
    precio: { Achuapa: 18, Limay: 18 },
  },
  {
    nombre: 'Cono',
    unidad: 'Unidad',
    codigos: { Achuapa: 'A02', Limay: 'LL02' },
    precio: { Achuapa: 22, Limay: 23 },
  },
  {
    nombre: 'Fruta Rell',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AP01', Limay: 'LP01' },
    precio: { Achuapa: 17, Limay: 17 },
  },
  {
    nombre: '2XL.',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AP02', Limay: 'LP02' },
    precio: { Achuapa: 15, Limay: 15 },
  },
  {
    nombre: 'Cocoa',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AP03', Limay: 'LP03' },
    precio: { Achuapa: 17, Limay: 17 },
  },
  {
    nombre: 'Sandwich',
    unidad: 'Unidad',
    codigos: { Achuapa: 'AL04', Limay: 'LL04' },
    precio: { Achuapa: 22, Limay: 23 },
  },
  {
    nombre: 'Conobola',
    unidad: 'Unidad',
    codigos: { Achuapa: 'AP04', Limay: 'LP04' },
    precio: { Achuapa: 15, Limay: 15 },
  },
  {
    nombre: 'Tazas 3oz',
    unidad: 'Envase',
    codigos: { Achuapa: 'AE01', Limay: 'LE01' },
    precio: { Achuapa: 17, Limay: 17 },
  },
  {
    nombre: 'Napolitana',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AL05', Limay: 'LL05' },
    precio: { Achuapa: 17, Limay: 17 },
  },
  {
    nombre: 'Dulce de leche',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AL06', Limay: 'LL06' },
    precio: { Achuapa: 15, Limay: 15 },
  },
  {
    nombre: 'Crema con galleta',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AL07', Limay: 'LL07' },
    precio: { Achuapa: 17, Limay: 17 },
  },
  {
    nombre: 'Taticas 8 Oz',
    unidad: 'Envase',
    codigos: { Achuapa: 'AE02', Limay: 'LE02' },
    precio: { Achuapa: 40, Limay: 40 },
  },
  {
    nombre: '1/2 litro',
    unidad: 'Envase',
    codigos: { Achuapa: 'AE03', Limay: 'LE03' },
    precio: { Achuapa: 85, Limay: 85 },
  },
  {
    nombre: 'Envase IL',
    unidad: 'Envase',
    codigos: { Achuapa: 'AE04', Limay: 'LE04' },
    precio: { Achuapa: 140, Limay: 140 },
  },
  {
    nombre: 'Fresa',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AP05', Limay: 'LP05' },
    precio: { Achuapa: 15, Limay: 15 },
  },
  {
    nombre: 'Yogurt',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AL08', Limay: 'LL08' },
    precio: { Achuapa: 22, Limay: 23 },
  },
  {
    nombre: 'Galon',
    unidad: 'Envase',
    codigos: { Achuapa: 'AE06', Limay: 'LE06' },
    precio: { Achuapa: 360, Limay: 360 },
  },
  {
    nombre: 'Oh Lala.',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AP06', Limay: 'LP06' },
    precio: { Achuapa: 17, Limay: 17 },
  },
  {
    nombre: 'Super Eskimo',
    unidad: 'Unidad',
    codigos: { Achuapa: 'AL09', Limay: 'LL09' },
    precio: { Achuapa: 22, Limay: 23 },
  },
  {
    nombre: 'Pichinga 1/2 gal',
    unidad: 'Envase',
    codigos: { Achuapa: 'AE05', Limay: 'LE05' },
    precio: { Achuapa: 270, Limay: 280 },
  },
  {
    nombre: 'Rocket',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AP07', Limay: 'LP07' },
    precio: { Achuapa: 15, Limay: 15 },
  },
  {
    nombre: 'Mango',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AP08', Limay: 'LP08' },
    precio: { Achuapa: 15, Limay: 14 },
  },
  {
    nombre: 'Avena',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AP09', Limay: 'LP09' },
    precio: { Achuapa: 15, Limay: 17 },
  },
  {
    nombre: 'Sandia',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AP10', Limay: 'LP10' },
    precio: { Achuapa: 17, Limay: 17 },
  },
  {
    nombre: 'Bandeja',
    unidad: 'Envase',
    codigos: { Achuapa: 'AE08', Limay: 'LE08' },
    precio: { Achuapa: 400, Limay: 400 },
  },
  {
    nombre: 'Tropical',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AP11', Limay: 'LP11' },
    precio: { Achuapa: 17, Limay: 17 },
  },
  {
    nombre: 'Navideña',
    unidad: 'Paleta',
    codigos: { Achuapa: 'AP12', Limay: 'LP12' },
    precio: { Achuapa: 17, Limay: 17 },
  },
];

export default function App() {
  const [cliente, setCliente] = useState({ nombre: "", telefono: "", municipio: "Limay" });
  const [campos, setCampos] = useState([{ producto: null, cantidad: 0 }]);

  const agregarProducto = () => setCampos([...campos, { producto: null, cantidad: 0 }]);

  const generarProforma = async () => {
    const element = document.getElementById("proforma");
    if (!element) return;
    
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = "proforma.png";
    link.click();
  };

  return (
    <div className="container">
      <h1>Generar Proforma</h1>
      <input type="text" placeholder="Nombre del cliente" onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })} />
      <input type="text" placeholder="Teléfono" onChange={(e) => setCliente({ ...cliente, telefono: e.target.value })} />

      <select onChange={(e) => setCliente({ ...cliente, municipio: e.target.value })}>
        <option value="Limay">Limay</option>
      </select>

      {campos.map((campo, index) => (
        <div key={index}>
          <select onChange={(e) => {
            const producto = productos.find(p => p.nombre === e.target.value);
            const nuevosCampos = [...campos];
            nuevosCampos[index].producto = producto;
            setCampos(nuevosCampos);
          }}>
            <option value="">Seleccionar producto</option>
            {productos.map(p => <option key={p.codigos.Limay} value={p.nombre}>{p.nombre}</option>)}
          </select>
          <input type="number" placeholder="Cantidad" onChange={(e) => {
            const nuevosCampos = [...campos];
            nuevosCampos[index].cantidad = Number(e.target.value);
            setCampos(nuevosCampos);
          }} />
        </div>
      ))}

      <button onClick={agregarProducto}>Agregar Producto</button>
      <button onClick={generarProforma}>Generar Proforma</button>

      <div id="proforma" className="proforma">
        <h2>Proforma</h2>
        <p>Cliente: {cliente.nombre}</p>
        <p>Teléfono: {cliente.telefono}</p>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {campos.map((campo, index) =>
              campo.producto ? (
                <tr key={index}>
                  <td>{campo.producto.codigos.Limay}</td>
                  <td>{campo.producto.nombre}</td>
                  <td>{campo.cantidad}</td>
                  <td>C$ {campo.producto.precio.Limay}</td>
                  <td>C$ {campo.cantidad * campo.producto.precio.Limay}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}