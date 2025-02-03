import React from "react";

function PropsComponent({ person }) {
  const { name, info } = person;

  const renderInfo = (info) => {
    return Object.keys(info).map((key) => (
      <div key={key}>
        <h3>{key}</h3>
        {Array.isArray(info[key]) ? (
          <ul>
            {info[key].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{info[key]}</p>
        )}
      </div>
    ));
  };

  return (
    <>
      <h2>Welcome {name}!</h2>
      <p>{info.age}</p>
      {renderInfo(info)}
    </>
  );
}

export default PropsComponent;