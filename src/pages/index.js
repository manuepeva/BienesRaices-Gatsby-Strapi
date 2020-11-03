import React from 'react'
import Layout from '../components/layout'
import useInicio from '../components/hooks/useInicio'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import BackgroundImage from 'gatsby-background-image'
import heroCSS from '../css/hero.module.css'
import Encuentra from '../components/encuentra'
import ListadoPropiedades from '../components/listadoPropiedades'

const ImageBackground = styled(BackgroundImage)`
    height: 600px;
`;

const Index = () => {
    const inicio = useInicio();

    const { Nombre, Contenido, imagen } = inicio[0];

    return (
        <Layout>
            <ImageBackground
                tag="section"
                fluid={imagen.sharp.fluid}
                fadeIn="soft"
            >
                <div className={heroCSS.imagenbg}>
                    <h1 className={heroCSS.titulo}>Venta de Casas y Departamentos Exclusivos</h1>
                </div>
            </ImageBackground>
            <div>
                <main>
                    <div css={css`
                        max-width: 800px;
                        margin: 0 auto;
                        `}>

                        <h1>{Nombre}</h1>
                        <p css={css`
                        text-align: center;
                        `}>{Contenido}</p>
                    </div>
                </main>
                <Encuentra />
                <ListadoPropiedades />
            </div>
        </Layout>
    )
}

export default Index
