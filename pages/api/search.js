import client from "client";
import { gql } from "@apollo/client";

const handler = async (req, res) => {
  try {
    const { data } = await client.query({
      query: gql`
        query AllPropertiesQuery {
          properties {
            nodes {
              databaseId
              uri
              title
              featuredImage {
                node {
                  sourceUrl
                  uri
                }
              }
              propertyFeatures {
                bathrooms
                bedrooms
                hasParking
                petFriendly
                price
              }
            }
          }
        }
      `,
    });
    return res.status(200).json({
      properties: data.properties.nodes,
      
    });
  } catch (err) {
    console.log("ERROR:", err);
  }
};
export default handler;
