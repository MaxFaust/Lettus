import React, { Component } from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";
import { getSidebarTrigger } from "@material-ui/treasury";

const SidebarTrigger = getSidebarTrigger(styled)

class About extends Component {
    render() {
        return (
            <div>
                <Toolbar>
                <SidebarTrigger sidebarId="unique_id" />
                Header
                </Toolbar>
            </div>
        )
    }
}

export default About;