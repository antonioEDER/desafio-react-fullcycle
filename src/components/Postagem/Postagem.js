import React from 'react'
import { Link } from 'react-router-dom'
import { Card, List, ListItem } from "@material-ui/core";

import './Usuario.css'

function Usuario(props) {
  return (
    <Card className="Usuario">
      <List>
        <ListItem><Link to={`/postagens/${props.post.id}`}>{props.post.title}</Link></ListItem>
      </List>
    </Card>
  )
}

export default Usuario