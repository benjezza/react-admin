import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, Create, SimpleForm, ReferenceInput, SelectInput, TextInput, useRecordContext } from "react-admin";

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post Name: {record ? `"${record.title}"` : ''}</span>;
}
const postFilters = [
  <TextInput label="Search" source="q" alwaysOn />,
  <ReferenceInput label="User" source="user_id" reference="users" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>
];

export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = (props) => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" sx={{ width: '100%', }} />
      </ReferenceInput>
      <TextInput source="title" sx={{ width: '100%', }} />
      <TextInput multiline source="body" sx={{ width: '100%', }} />
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" sx={{ width: '100%', }} />
      </ReferenceInput>
      <TextInput source="title" sx={{ width: '100%', }} />
      <TextInput multiline source="body" sx={{ width: '100%', }} />
    </SimpleForm>
  </Create>
);
