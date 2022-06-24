import React from 'react'
import { Link } from 'react-router-dom'
import { Card, List, ListItem, ListItemText } from "@material-ui/core";

import './Usuario.css'

function Usuario(props) {
  return (
    <Card className="Usuario">
      <List>
        <ListItemText><Link to={`/postagens/${props.post.id}`}>{props.post.title}</Link></ListItemText>
      </List>
    </Card>
  )
}

export default Usuario