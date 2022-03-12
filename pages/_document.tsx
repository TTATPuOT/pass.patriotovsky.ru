import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';

function Document() {
    return <Html lang="en">
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap" rel="stylesheet" />
            <title>pass.patriotovsky.ru</title>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
}

export default Document;
