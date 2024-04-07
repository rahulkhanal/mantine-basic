import { AppShell, Burger, Button, NavLink, Space, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconGauge, IconFingerprint } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function APPSHELL() {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavLink
          href=""
          label="First parent link"
          leftSection={<IconGauge size="1rem" stroke={1.5} />}
          childrenOffset={28}
        >
          <NavLink href="#required-for-focus" label="First child link" />
          <NavLink
            label="Second child link"
            onClick={() => navigate("dashboard")}
          />
          <NavLink
            label="Nested parent link"
            childrenOffset={28}
            href="#required-for-focus"
          >
            <NavLink label="First child link" href="#required-for-focus" />
            <NavLink label="Second child link" href="#required-for-focus" />
            <NavLink label="Third child link" href="#required-for-focus" />
          </NavLink>
        </NavLink>

        <NavLink
          href="#required-for-focus"
          label="Second parent link"
          leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
          childrenOffset={28}
          defaultOpened
        >
          <NavLink label="First child link" href="#required-for-focus" />
          <NavLink label="Second child link" href="#required-for-focus" />
          <NavLink label="Third child link" href="#required-for-focus" />
        </NavLink>
      </AppShell.Navbar>

      <AppShell.Main>
        <Title size="h1">Hello World</Title>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum
        nobis architecto quidem. Reiciendis, illum maxime sed eveniet magnam ea
        error odio in, dolore autem veritatis, possimus perferendis? Dicta,
        voluptatibus.
        <Space h="xl" />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
        minima sunt natus dolores pariatur quibusdam consequatur fugiat alias,
        rem eum at, facilis non? Quos a commodi dolorem minus, quibusdam ut.
        <Space h="xl" />
        <Button variant="filled">Button</Button>
      </AppShell.Main>
    </AppShell>
  );
}

export default APPSHELL;
