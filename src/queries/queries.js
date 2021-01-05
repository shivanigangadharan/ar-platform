import React from 'react';
import { gql } from 'apollo-boost';

const addFormData = gql`
mutation(
    $Animtion: String,
    $Code: bigint,
    $Description: String,
    $Email: String, 
    $Label: Bool,
    $Marker: String, 
     $ModelName: String, 
      $Name: String,
       $Organization: String, 
       $PhoneNumber: bigint, 
       $Price: String, 
       $Tutorial: String
) {
    insert_RequestModel(objects: {
     Animation: $Animation,
     Code: $Code, 
     Description: $Description,
     Email: $Email, 
     Label: $Label,
      Marker: $Marker, 
      ModelName: $ModelName, 
      Name: $Name,
       Organization: $Organization, 
       PhoneNumber: $PhoneNumber, 
       Price: $Price, 
       Tutorial: $Tutorial })
       {affected_rows
    returning {
      Tutorial
      Price
      PhoneNumber
      Organization
      Name
      ModelName
      Marker
      Label
      Email
      Description
      Code
      Animation
    }
}
  }
`
export { addFormData };