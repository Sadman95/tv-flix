import React, { useEffect, useState} from 'react';
import Cards from './Cards/Cards';
import Info from './Info/Info';
import './Main.css';

const Main = () => {
          // fetch from json:
          const [series, setSeries] = useState([]);

          useEffect( () => {
              fetch('https://sadman95.github.io/popular-tv/data/series.JSON')
              .then(res => res.json())
              .then(data => setSeries(data))
          }, [])


        // new add to info section:
        const [selected, setSelected] = useState([]);
        //   onclick handler:
        
        const showInfo = (serial) =>{
            const newAdded = [...selected, serial];
            setSelected(newAdded)
        }

        // total update:
        let total = 0;
        for(const item of selected){
            total = total + item.price;
        }




    return (
        <div className="row my-4">
            <h2 style={{fontStyle: "italic"}}>Total found: {series.length}</h2>
            <div className="series-display col-md-10">
                {
                    series.map(serial => <Cards showInfo={showInfo} key={serial.id} serial={serial}></Cards>)
                }
            </div>
            <div className="col-md-2 bg-dark text-light p-2 h-50 rounded">
                <h3 className="text-warning mb-5">Details</h3>
                <div className="d-flex">
                    <h6>Wtchlisted:</h6>
                    <div>
                        {  
                        selected.map((selection, i) => <Info key={i} selected={selection}></Info>)
                        }
                    </div>
                </div>
                <h6 className="text-start">Added: {selected.length}</h6>
                <h5>Total: ${total}</h5>
            </div>
        </div>
    );
};

export default Main;