import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import {Link} from 'react-router-dom';

export default function Panel1() {
  return (
    <div className='panel1'>
  <Menu vertical>
    <Menu.Item header>Menu</Menu.Item>
    <Menu.Item as={Link} to='/'>My Class</Menu.Item>
    <Menu.Item as={Link} to='/student'>Message</Menu.Item>
    <Menu.Item as='a'>Add Assignment</Menu.Item>
    <Menu.Item as='a'>Add Quiz</Menu.Item>
    <Menu.Item as='a'>Join Live Class</Menu.Item>
  </Menu>
    </div>
  );
}