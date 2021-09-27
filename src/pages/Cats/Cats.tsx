import React, { useState, useEffect } from "react";
import { getCarsData } from "../../services/cat.service";


interface Props { }


const Cats = (props: Props) => {

  const [catData, setCatData] = useState<Object[]>([]);

  useEffect(() => {
    getCarsData()
      .then((res) => {
        const { message } = res.data;
        setCatData(Object(message));

        console.log("go " + catData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  let st: string = "";

  const loading = false;
  return (
    <React.Fragment>
      <h4>Render8</h4>

      {loading ? (
        <h2>f</h2>
      ) : (
          catData.map((picture) => (


            < img src={picture} alt="lorem" />



          ))
        )}








    </React.Fragment >
  );
  // return <div>Cats page</div>;

}

export default Cats;
