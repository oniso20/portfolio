import React from "react";
import { marked } from "marked";

const Readme = () => {
  const [readme, setReadme] = React.useState(null);

  const repoName = "taste-it";

  React.useEffect(() => {
    fetch(`https://api.github.com/repos/oniso20/${repoName}/readme`)
      .then((response) => response.json())
      .then((data) => {
        const content = atob(data.content);
        setReadme(marked(content));
      });
  }, [repoName]);

  if (!readme) {
    return <div>Loading readme...</div>;
  }

  return (
    <div>
      <h1>{repoName}</h1>
      <div dangerouslySetInnerHTML={{ __html: readme }} />
    </div>
  );
};

export default Readme;
