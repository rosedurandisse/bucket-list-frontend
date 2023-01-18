import React, { useState } from "react";

const AdventureCard = ({ adventures }) => {
  const { title, description } = adventures;

  return (
    <div>
      <div>Explore the Different Options Available</div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default AdventureCard;
