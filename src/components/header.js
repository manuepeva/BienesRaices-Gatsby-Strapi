import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navegacion from './navegacion'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const ImgLogo = styled.img`
    height: 5rem;
    margin-left: 5rem;
`;

const Header = () => {

    // Hacer la consulta con Graphql
    const { logo } = useStaticQuery(graphql`
    query {
        logo: file(relativePath: {eq: "logo.png"}){
            publicURL
            id
        }
      }    
    `);


    return (
        <header
            css={css`
            background-color: #0d283b;
            padding: 1rem;
            `}
        >
            <div
                css={css`
                max-width: 120rem;
                margin: 0 auto;
                text-align: center;

                @media (min-width: 768px){
                    display: flex;
                    align-items: center;
                    justify-content:space-between;
                }
            `}
            >
                <Link to="/">
                    <ImgLogo src={logo.publicURL} alt="Logo de Bienes y Raices" />
                </Link>
                <Navegacion />
            </div>
        </header>
    )
}

export default Header
