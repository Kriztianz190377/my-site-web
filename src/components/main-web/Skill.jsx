import React from 'react'

const Skill = ({ src, name, alt }) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-300 ">
      
            <img className="w-20 mx-auto py-2" src={src} alt= {alt} />
      
      <p className="py-4">{name}</p>
      
    </div>
  );
};

export default Skill