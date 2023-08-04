import { Dropdown } from "antd";

const CommonDropdown = ({
  children,
  items,
  trigger = ["click"],
  open,
  onOpenChange,
  overlayClassName,
}) => {
  return (
    <div>
      <Dropdown
        open={open}
        onOpenChange={onOpenChange}
        menu={{
          items,
        }}
        trigger={trigger}
        overlayClassName={overlayClassName ?? ""}
      >
        {children}
      </Dropdown>
    </div>
  );
};

export default CommonDropdown;
