import React, { useEffect, useState} from 'react';
import './Main.css';

const Main = () => {
          // fetch from json:
          const [series, setSeries] = useState([]);

          useEffect( () => {
              fetch('/public/series.JSON')
              .then(res => res.json())
              .then(data => console.log(data))
          }, [])

    return (
        <div>
            <h2>Main Section</h2>
            
        </div>
    );
};

export default Main;