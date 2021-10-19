import React, {useState} from 'react'
import { useQuery, gql } from "@apollo/client";
import StageDetails from './StageDetails';

export default function EventDetails({eventId}) {

  const [stageId, setStageId] = useState("");

    const GET_EVENT_DETAILS = gql`
     query getEvent($eventId: ID!) {
      event(id: $eventId) {
        id
        name
        description
        image
        appId
        stageId
        startsAt
        endsAt
      }
    }
    
  `

  const { data, loading, error } = useQuery(GET_EVENT_DETAILS, {
      variables: {eventId}
  });

  

  if (loading) return <h1>Loading...</h1>;
  

  if (error) return <h1>Error: {error}</h1>;


  const handleDeselectStage = () => {
    setStageId("");
  }

    return (
        <div>
            <h3>Stage Id: {data.event.stageId}</h3>
            

            {stageId === data.event.stageId ? 
              <div>
              <button onClick={handleDeselectStage}>Hide Stage Name</button>
              <StageDetails stageId={stageId} />  
              
              </div>
              
              
              : 
                <button onClick={() => setStageId(data.event.stageId)}>Get Stage Name</button>
            }
            
            <h3>App Id: {data.event.appId}</h3>
            <h3>Start Time: {data.event.startsAt}</h3>
            <h3>End Time: {data.event.endsAt}</h3>
        </div>
    )
}
