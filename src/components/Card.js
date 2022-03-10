import React from "react";

const Card = ({ name, id, email }) => {
  return (
    <div className="hover:opacity-50 gotham rounded-lg  p-3 m-3   grow myShadow">
      <div className="pb-3">
        <div className="flex align-center justify-center">
          <img
            className="p-3"
            src={`https://robohash.org/${id}?size=200x200`}
            alt="photo"
          />
        </div>
        <div className="text-center text-slate-800 myFontOrbitron truncate">
          <h2 className="font-bold text-xs">{name}</h2>
          <p className="underline text-xs">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
