import React, { Component } from "react";
import styled from "styled-components"; // or import styled from '@emotion/styled'
import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter } from "@mui-treasury/layout";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from '@material-ui/core/AppBar';

import Appbar from '../Appbar/Appbar';

const Header = getHeader(styled)
const DrawerSidebar = getDrawerSidebar(styled)
const SidebarTrigger = getSidebarTrigger(styled)
const SidebarContent = getSidebarContent(styled)
const CollapseBtn = getCollapseBtn(styled)
const Content = getContent(styled)
const Footer = getFooter(styled)

const scheme = Layout();

scheme.configureHeader((builder) => {
  builder
    .create("whatever_id")
    .registerConfig("xs", {
      position: "sticky",
    })
    .registerConfig("md", {
      position: "relative", // won't stick to top when scroll down
    });
});

scheme.configureEdgeSidebar((builder) => {
  builder
    .create("unique_id", { anchor: "left" })
    .registerTemporaryConfig("xs", {
      anchor: "left",
      width: "auto", // 'auto' is only valid for temporary variant
    })
    .registerPermanentConfig("md", {
      width: 256, // px, (%, rem, em is compatible)
      collapsible: true,
      collapsedWidth: 64,
    });
});

class App extends Component {
  render() {
    return (
    <Root scheme={scheme}>
      <CssBaseline />
      <AppBar position="static">
          <Appbar/>
      </AppBar>
      <DrawerSidebar sidebarId="unique_id">
        <CollapseBtn />
        <SidebarContent>
         
        </SidebarContent>
      </DrawerSidebar>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Root>
  );
};
};
export default App;