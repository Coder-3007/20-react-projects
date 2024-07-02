import Tabs from "./Tabs";

function RandomComponent() {
  return <h1>Some random Component</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content fot Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content fot Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    confirm.log(currentTabIndex);
  }
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
