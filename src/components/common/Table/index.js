import { Table } from "antd";
import React from "react";

const CommomTable = ({
  dataSource,
  columns,
  onRow,
  pagination,
  loading,
  onChange,
}) => {
  return (
    <div className="common-table-main">
      <Table
        dataSource={dataSource}
        columns={columns}
        onRow={onRow}
        pagination={pagination}
        loading={loading}
        onChange={onChange}
      />
    </div>
  );
};

export default CommomTable;
