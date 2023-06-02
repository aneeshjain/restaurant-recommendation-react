const apiKey = "";
const url = "https://api.yelp.com/v3/businesses/search?";
const proxy = "https://cors-anywhere.herokuapp.com/";



export const fetchData = async (searchTerm, searchLocation, searchSort) => {

    const term = searchTerm.split(" ").join("%20");
    const location = searchLocation.split(" ").join("%20");
    const sort_by = searchSort;
    const endpoint = `${url}location=${location}&term=${term}&sort_by=${sort_by}&limit=15`;
    console.log(endpoint);

    try {
      const response = await fetch(`${proxy}${endpoint}`, {
        method: "GET",
        headers: {Authorization: `Bearer ${apiKey}`},
        // Additional properties can be set here, like body, mode, cache, etc.
      });
  
      // Process the response
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        console.error("Request failed:", response.status);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };
  