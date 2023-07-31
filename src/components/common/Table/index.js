import { Table } from "antd";
import React from "react";

const CommomTable = ({ dataSource, columns, onRow, pagination }) => {
  return (
    <div className="common-table-main">
      <Table
        dataSource={dataSource}
        columns={columns}
        onRow={onRow}
        pagination={pagination}
      />
    </div>
  );
};

export default CommomTable;
