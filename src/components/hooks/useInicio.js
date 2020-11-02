import { graphql, useStaticQuery } from 'gatsby'

const useInicio = () => {
  const resultado = useStaticQuery(graphql`
    query {
        allStrapiPaginas(filter: { Nombre:{eq: "Inicio"} }){
          nodes{
            id
            Nombre
            Contenido
            imagen {
              sharp: childImageSharp{
                fluid( maxWidth: 1500 duotone: {
                  highlight: "#222222", shadow: "#192550", opacity: 30
                }){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      
    `);
  return resultado.allStrapiPaginas.nodes.map(inicio => ({
    Nombre: inicio.Nombre,
    Contenido: inicio.Contenido,
    imagen: inicio.imagen
  }))
}

export default useInicio
