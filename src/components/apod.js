import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
// import Display from "./Display";

export default function PhotoData() {
  const [photo, setPhoto] = useState([]);

  const getPics = () => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=OcoUNHshHyitkZ2BrinXPHcmRFiegvCr6l0DWEfp`
      )
      .then(response => {
        console.log(response);
        setPhoto(response.url);
      })
      .catch(error => {
        console.log("The data was not returned");
      });
  };
}
