import "../styles/components/repositoriesgit.sass";
import Repository from "./Repository";

import repositoriesApi from "../services/repositoriesApi";
import axios from "axios";
import React, { useState, useEffect } from 'react';


  const Repositoriesgit = () => {
    return (
      <section id="Repositories-Container">
        <h2>Repositórios</h2>
        <div className="repositories-grid">
          <Repository/>
        </div>
      </section>
    );
  };



export default Repositoriesgit;
