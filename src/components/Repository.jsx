import repositoriesApi from "../services/repositoriesApi";
import "../styles/components/repository.sass";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Repository = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const result = await axios(
        "https://api.github.com/users/RodrigoCSoares-fs/repos"
      );

      setRepos(result.data);
    };

    fetchRepos();
  }, []);

  return (
    <div id="list-repository">
      {repos.map((repo) => (
        <div key={repo.id} id="items-repository">
          <div className="item">
            <a className="link" href={repo.html_url}>
              {repo.name}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Repository;
