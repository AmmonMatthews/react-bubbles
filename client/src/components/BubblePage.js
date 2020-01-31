import React, { useState, useEffect } from "react";
// import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth"

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = props => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  console.log(props)

  useEffect(() => {
    axiosWithAuth()
      .get("/api/colors")
      .then(res => {
        setColorList(res.data)
      })
      .catch( err => {
        console.log("Colors not available", err)
      })
    }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} history={props.history} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
