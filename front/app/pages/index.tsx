import React, { FC } from "react";
import { GetStaticProps } from "next";
import { Button, ButtonGroup } from "@material-ui/core";

type Post = {
  id: number;
  title: string;
};

type Props = {
  posts: Post[];
};

const Home: FC<Props> = (props) => {
  return (
    <div>
      <h2>POSTの一覧</h2>
      <table>
        {props.posts.map((post) => (
          <tr>
            <td>{post.id}.</td>
            <td>{post.title}</td>
          </tr>
        ))}
      </table>
      <div style={{ margin: "0.5em" }}>
        <Button variant="contained">Default</Button>{" "}
        <Button variant="contained" color="primary">
          Primary
        </Button>{" "}
        <Button variant="contained" color="secondary">
          Secondary
        </Button>{" "}
        <Button variant="contained" disabled>
          Disabled
        </Button>{" "}
        <Button variant="contained" color="primary" href="https://google.com/">
          LINK
        </Button>
      </div>
      <div style={{ margin: "0.5em" }}>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("http://api:3000/posts", { method: "GET" });
  const json = await response.json();

  return {
    props: {
      posts: json,
    },
  };
};

export default Home;
