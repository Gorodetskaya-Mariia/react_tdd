import React, { Component } from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Form, Button } from "react-bootstrap";

configure({ adapter: new Adapter() });

class Gift extends Component {
  constructor() {
    super();

    this.state = { person: "", present: "" };
  }

  render() {
    return (
      <div class="gift">
        <Form>
          <Form.Group>
            <Form.Label>Person</Form.Label>
            <Form.Control
              className="input-person"
              onChange={event => this.setState({ person: event.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Present</Form.Label>
            <Form.Control
              className="input-present"
              onChange={event => this.setState({ present: event.target.value })}
            />
          </Form.Group>
        </Form>
        <Button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove gift
        </Button>
      </div>
    );
  }
}

export default Gift;
