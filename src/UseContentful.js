import React from 'react';
import { createClient } from 'contentful';

const UseContentful = () => {
   const client= createClient({
        space:'w97jnjeam0zr',
        accessToken:'LiHVbZFXyHQC2rmXgCNKL8Yks6vD9OGJigzb6d2DRs0',
        host:"cdn.contentful.com"
    });

  const jsobject= async()=>{
    try{
        const entries= await client.getEntries({
            content_type:"cms",
            select:"fields"
        });
        return entries;
    }catch(error){
        console.log(`Error fetching cms: ${error}`);
    }
  };

  return {jsobject};
}

export default UseContentful