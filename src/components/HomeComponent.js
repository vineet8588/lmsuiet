import React from 'react';
import {CATEGORIES} from '../shared/categories';
import {CardDeck,Card,CardBody,CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderCards({categs}){
    return(
        categs.map((categ)=>         
            <Card className='m-4' key={categ.id}>
                <Link to={`/home/${categ.id}`} style={{color:'black'}}>
                    <CardBody>
                        <CardTitle> <span className="fa fa-graduation-cap"></span><h4>{categ.name}</h4></CardTitle>
                    </CardBody>
                </Link>
            </Card>
            )
    )
}

function Home(props){
    return (
        <div className="container">
        
            <div className="row">
                <div className="col-12">
                    <CardDeck className=''>
                        <RenderCards categs={CATEGORIES.slice(0,3)}/>
                    </CardDeck>
                
                    <CardDeck className=''>
                        <RenderCards categs={CATEGORIES.slice(3)}/>
                    </CardDeck>
                </div>
            </div>
        
        </div>
      );
}

export default Home;