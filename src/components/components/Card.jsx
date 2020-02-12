import React, {Fragment} from 'react';

class Card extends React.Component {
    state = {
        list: [1,2,3,4,5]
    }
    render(){
        return(
            <Fragment>
            {this.state.list.map((_, index) => (
                <div key={index} className="card">
                    <img src="https://www.bni.co.id/Portals/1/bni-logo-id.svg?ver=2017-04-27-170938-000" />

                    <h3 className="nameUser">PT.Bank Negara Indonesia (Pesero) Tbk.<span className="span"> @BNI.Jul 4, 2019 </span> </h3>

                    <p> Tujuan hidup setiap orang berbeda, lakukan yang terbaik bagimu dan <br />orang lain.<span className="spanp">#BNIQuotes #BersamaJadiLuarBiasa</span></p>

                    <div className="image">
                        <img src="https://pbs.twimg.com/media/D-dyqwkVAAAzoAV?format=jpg&name=medium" alt="image tweet" width = "960" height = "640" />
                    </div>
                </div>
            ))}
            </Fragment>
        );  
    }
}

export default Card;