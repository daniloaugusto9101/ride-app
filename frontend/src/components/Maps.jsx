import { APIProvider, Map } from "@vis.gl/react-google-maps";
const Maps = () => {
  return (
    <APIProvider apiKey={"AIzaSyC4cYuZ4ACSgOR271JbUnH7uZ4PZezyyN4"}>
      <Map
        style={{}}
        defaultCenter={{
          lat: -23.180706670183632,
          lng: -45.869060730219715,
        }}
        defaultZoom={10}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
};

export default Maps;
