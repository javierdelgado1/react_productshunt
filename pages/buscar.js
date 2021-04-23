import React, {useEffect, useState} from 'react';
import Layout from '../components/layout/Layout'
import {useRouter} from 'next/router'
import DetallesProducto from "../components/layout/DetallesProducto";
import useProductos from "../hooks/useProductos";


const buscar = () => {
    const router = useRouter();
    const {query : {q}} = router;

    //Todos los productos
    const { productos } = useProductos("votos");
    const [resultado, guardarResultado] = useState([]);

    useEffect(() => {
        if(q){

            const busqueda = q.toLowerCase();
            
            const filtro = productos.filter((producto) =>{
                return (producto.nombre.toLowerCase().includes(busqueda || producto.description.toLowerCase.includes(busqueda)))
            })
            guardarResultado(filtro)
        }
    }, [q, productos])
    return (
        <Layout>
          <div className="listado-productos">
            <div className="contenedor">
              <ul className="bg-white">
                {resultado.map((producto) => (
                  <DetallesProducto key={producto.id} producto={producto} />
                ))}
              </ul>
            </div>
          </div>
        </Layout>
    );
}

export default buscar;
