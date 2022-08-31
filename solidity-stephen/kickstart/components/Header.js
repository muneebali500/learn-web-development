import { Menu } from "semantic-ui-react";

export default function Header() {
  return (
    <Menu style={{ marginTop: `10px` }}>
      <Menu.Item name="crowdcoin">CrowdCoin</Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item name="campaigns">Campaings</Menu.Item>

        <Menu.Item name="add">+</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
