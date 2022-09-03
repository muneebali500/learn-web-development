import Link from "next/link";

import { Menu } from "semantic-ui-react";

export default function Header() {
  return (
    <Menu style={{ marginTop: `10px` }}>
      <Link href="/" passHref>
        <Menu.Item name="crowdcoin">CrowdCoin</Menu.Item>
      </Link>

      <Menu.Menu position="right">
        <Link href="/" passHref>
          <Menu.Item name="campaigns">Campaings</Menu.Item>
        </Link>

        <Link href="/campaigns/new" passHref>
          <Menu.Item name="add">+</Menu.Item>
        </Link>
      </Menu.Menu>
    </Menu>
  );
}
