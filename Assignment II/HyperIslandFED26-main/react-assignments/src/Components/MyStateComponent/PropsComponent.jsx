import React from "react";

function PropsComponent({ person }) {
  const { name, info } = person;

  return (
    <>
      <h2>Welcome {name}!</h2>
      <p>{info.age}</p>
      {Object.entries(info).map(([key, value]) => (
        <InfoSection key={key} title={key} data={value} />
      ))}
    </>
  );
}

function InfoSection({ title, data }) {
  return (
    <div>
      <h3>{title}</h3>
      {Array.isArray(data) ? (
        <ul>
          {data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
}

export default PropsComponent;