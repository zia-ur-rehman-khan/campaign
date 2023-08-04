import { Table } from "antd";
import React from "react";

const CommomTable = ({ dataSource, columns, onRow, pagination, loading }) => {
  return (
    <div className="common-table-main">
      <Table
        dataSource={dataSource}
        columns={columns}
        onRow={onRow}
        pagination={pagination}
        loading={loading}
      />
    </div>
  );
};

export default CommomTable;
