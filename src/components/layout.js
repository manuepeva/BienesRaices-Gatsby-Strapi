import React from 'react'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'
import Header from './header'


const Layout = ({ children }) => {
    return (
        <>
            <Global
                styles={css`
                html{
                    font-size: 62.5%;
                }
                html, body{
                    margin:0;
                    padding:0;
                    box-sizing: border-box;
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                }
                *, *:before, *:after{
                    box-sizing: border-box;
                }
                body{
                    font-size: 1.6rem;
                    line-height: 2;
                }
                h1, h2, h3{
                    margin: 0;
                    line-height: 1.5;
                    font-family: 'Lato', sans-serif;
                }
                h1,h2{
                    text-align: center;
                    font-weight: 300;
                }
                h3{
                    font-family: 'Roboto', sans-serif; 
                }
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                .contenedor{
                    max-width: 120rem;
                    margin: 0 auto;
                    width: 95%;
                }
                img{
                    max-width: 100%;
                }
            `}
            />
            <Helmet>
                <title>Bienes Raices Gatsby</title>
                <meta name="description" content="Sitio web de Bienes Raices con GatsbyJS" />
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto:wght@300&display=swap');
                </style>
            </Helmet>
            <Header />
            {children}
        </>
    )
}

export default Layout
