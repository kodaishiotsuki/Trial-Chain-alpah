import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Header, Image } from "semantic-ui-react";

export default function UserListItem({ user }) {
  return (
    <Card>
      <Card.Content>
        <Image
          size='large'
          src={user.photoURL || "/assets/user.png"}
          // style={{ maxHeight: 300, width: 300 }}
        />
        <Header size='huge'>{user.displayName}</Header>
        <Button
          floated='right'
          color='teal'
          content='プロフィール'
          as={Link}
          to={`/userProfile/${user.userUid}`}
        />
      </Card.Content>
    </Card>
  );
}
