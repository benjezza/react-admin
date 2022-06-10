import * as React from "react";
import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const MyUrlField = ({ source }) => {
  const record = useRecordContext();
  return record ? (
  <Link href={record[source]}>
    {record[source]}
    <LaunchIcon sx={{
      width: "0.5em",
      height: "0.5em",
      paddingLeft: 2,
      display: { xs: 'none', md: 'block' }
    }} />
    </Link> ) : null;
};

export default MyUrlField;
