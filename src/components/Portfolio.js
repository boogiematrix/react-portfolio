import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AboutMe } from './AboutMe';


export function Portfolio() {

    const [page, setPage] = useState(<AboutMe />)


    return (
        <div>
            <Header setPage={setPage}/>
            {page} 
            <Footer />
        </div>
    )
}