import React from 'react'
import { useQuery, gql } from "@apollo/client";

export default function StageDetails({stageId}) {

    const GET_STAGE_DETAILS = gql`
     query getStage($stageId: ID!) {
      stage(id: $stageId) {
        id
        name
      }
    }
    
  `

  const { data, loading, error } = useQuery(GET_STAGE_DETAILS, {
      variables: {stageId}
  });

  console.log(stageId)

  if (loading) return <h1>Loading...</h1>;
  

  if (error) return <h1>Error: {error}</h1>;



    return (
        <div>
            <h3>Stage Name: {data.stage.name}</h3>
        </div>
    )
}