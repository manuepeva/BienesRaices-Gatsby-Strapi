import { graphql, useStaticQuery } from 'gatsby'


const usePropiedades = () => {
  const datos = useStaticQuery(graphql`
    query {
        allStrapiPropiedades{
          nodes{
            nombre
            descripcion
            id
            wc
            precio
            estacionamiento
            habitaciones
            categorias{
              nombre
            }
            agentes{
              Nombre
              Telefono
              Email
            }
            imagen {
                sharp: childImageSharp{
                    fluid(maxWidth: 200, maxHeight: 200){
                      ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
          }
        }
      }
    `);
  // console.log(datos, 'datos component')
  return datos.allStrapiPropiedades.nodes.map(propiedad => ({
    nombre: propiedad.nombre,
    descripcion: propiedad.descripcion,
    imagen: propiedad.imagen,
    id: propiedad.id,
    wc: propiedad.wc,
    estacionamiento: propiedad.estacionamiento,
    habitaciones: propiedad.habitaciones,
    agentes: propiedad.agentes,
    precio: propiedad.precio,
    categorias: propiedad.categorias

  }))
}

export default usePropiedades;