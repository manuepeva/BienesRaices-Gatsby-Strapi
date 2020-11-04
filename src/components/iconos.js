import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from '@emotion/styled'

const ListadoIconos = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width:500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;
        img{
            margin-right: 1rem;
        }
    }
`;

const Iconos = ({ wc, estacionamiento, habitaciones }) => {
    const { iconos } = useStaticQuery(graphql`
    query {
            iconos: allFile(filter: {relativeDirectory: {eq: "iconos"}}){
            edges{
                node{
                id
                publicURL
                }
            }
        }
      }
    `);
    const imagenesIconos = iconos.edges;

    return (
        <>
            <ListadoIconos>
                <li>
                    <img src={imagenesIconos[5].node.publicURL} alt="Icono WC" />
                    <p>{wc}</p>
                </li>
                <li>
                    <img src={imagenesIconos[3].node.publicURL} alt="Icono estacionamiento" />
                    <p>{estacionamiento}</p>
                </li>
                <li>
                    <img src={imagenesIconos[4].node.publicURL} alt="Icono habitaciones" />
                    <p>{habitaciones}</p>
                </li>
            </ListadoIconos>
        </>
    )
}

export default Iconos
