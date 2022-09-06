import * as uuid from "uuid";
import handler from "../util/handler";
import dynamodb from "../util/dynamodb";

// https://sst.dev/chapters/add-an-api-to-get-a-note.html
export const main = handler(async (event) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      userId: "123",
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now(),
    },
  };

  await dynamodb.put(params);

  return params.Item;
});
