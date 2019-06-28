import React from 'react';
import md5 from 'md5';

function Gravatar (properties){
const email = properties.email;
const hash = md5(email);
return (
    <img
    className={properties.className}
    src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
    alt="Avatar"
  />
);
}
export default Gravatar;