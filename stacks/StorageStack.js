import { Table, Bucket } from "@serverless-stack/resources";

export function StorageStack({ stack, app }) {
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: {
      partitionKey: "userId",
      sortKey: "noteId",
    },
  });

  // Create an S3 Bucket
  const bucket = new Bucket(stack, "Uploads");

  return {
    table,
    bucket,
  };
}
