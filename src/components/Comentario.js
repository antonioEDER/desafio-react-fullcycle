import React from "react";
import { Card, List } from "@material-ui/core";

const Comentario = props => {
    return (
        <List className="Comentario">
            <Card><b>userId:</b> { props.userId }</Card>
            <Card><b>id:</b> { props.id }</Card>
            <Card><b>title:</b> { props.title }</Card>
            <Card><b>body:</b> { props.body }</Card>
            <Card><b>key:</b> { props.key }</Card>
        </List>
     )
};

export default Comentario;