import handler from "../util/handler";
import dynamodb from "../util/dynamodb";

export const main = handler(async () => {
  const params = {
    TableName: process.env.TABLE_NAME,
    // 'KeyConditionExpression' defines the condition for the query
    // - 'userId = :userId' only return items with matching 'userId'
    // partition key
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": "123",
    },
  };

  const result = await dynamodb.query(params);

  return result.Items;
});
