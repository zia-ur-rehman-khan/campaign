import { Checkbox } from "antd";

const CommonCheckBox = ({ onChange, checked, label }) => {
  return (
    <div>
      <Checkbox checked={checked} onChange={onChange}>
        {label}
      </Checkbox>
    </div>
  );
};

export default CommonCheckBox;
