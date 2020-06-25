import React from 'react';
import {CardDeck,Card,CardBody,CardTitle,Jumbotron} from 'reactstrap';
import {Link} from 'react-router-dom';
import undraw_professor from '../shared/undraw_professor.svg';
import Footer from './FooterComponent';

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
        <React.Fragment>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>LMSUIET</h1>
                            <p>A platform to manage lectures.</p>
                            <ul>
                                <li>Join Courses </li>
                                <li>Create Courses</li>
                                <li>Free for all</li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6">
                        <img src={undraw_professor} className="img-fluid" alt="some"/>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <div className="container pt-3">
                <div className="row ml-3"><h1>Categories</h1></div>
                <div className="row">
                    <div className="col-12">
                        <CardDeck className=''>
                            <RenderCards categs={props.categories.slice(0,3)}/>
                        </CardDeck>
                    
                        <CardDeck className=''>
                            <RenderCards categs={props.categories.slice(3)}/>
                        </CardDeck>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
      );
}

export default Home;