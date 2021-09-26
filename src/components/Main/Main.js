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

    return (
        <div className="row my-4">
            <h2>Total found: {series.length}</h2>
            <div className="series-display col-md-10">
                {
                    series.map(serial => <Cards showInfo={showInfo} key={serial.id} serial={serial}></Cards>)
                }
            </div>
            <div className="col-md-2">
                <h3>Details</h3>
                <div className="d-flex">
                    <h6>Wtchlisted:</h6>
                    <div>
                        {
                        selected.map(selection => <Info selected={selection}></Info>)
                        }
                    </div>
                </div>
                <h6 className="text-start">Added: {selected.length}</h6>
            </div>
        </div>
    );
};

export default Main;