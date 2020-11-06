import Layout from './layout'
import React from 'react'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import ListadoPropiedades from '../components/listadoPropiedades'


const ContenidoPagina = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px){
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

export const query = graphql`
    query($id: String!){
            allStrapiPaginas(filter: {id: {eq: $id}}){
            nodes{
                Nombre
                Contenido
                imagen{
                    sharp: childImageSharp{
                        fluid(maxWidth: 1200){
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`;

const Propiedades = ({ data: { allStrapiPaginas: { nodes } } }) => {

    const { Nombre, Contenido, imagen } = nodes[0];

    return (
        <Layout>
            <main className="contendor">
                <h1>{Nombre}</h1>
                <ContenidoPagina>
                    <Image
                        fluid={imagen.sharp.fluid}
                    />
                    <p>{Contenido}</p>
                </ContenidoPagina>
            </main>
            {Nombre === "Propiedades" && (
                <ListadoPropiedades />
            )}
        </Layout>
    )
}

export default Propiedades
