import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SubscriptionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Subscriptions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="creator" source="creator" />
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="startDate" source="startDate" />
        <TextField label="status" source="status" />
        <TextField label="subscriber" source="subscriber" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
