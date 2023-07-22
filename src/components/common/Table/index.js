import { Table } from "antd";
import React from "react";

const CommomTable = ({ dataSource, columns, onRow }) => {
  return (
    <div className="common-table-main">
      <Table dataSource={dataSource} columns={columns} onRow={onRow} />
    </div>
  );
};

export default CommomTable;
