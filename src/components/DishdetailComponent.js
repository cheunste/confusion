import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardImgOverlay,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <Card>
        <CardImg width="100%" top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardImgOverlay>{dish.name}</CardImgOverlay>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  else return <div></div>;
}

function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div>
        <Card>
          <CardBody>
            <h4>Comments</h4>
            {comments.map((comment) => {
              return (
                <div>
                  <div>{comment.comment}</div>
                  <br />
                  <div>
                    -- {comment.author},
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}
                  </div>
                  <br />
                </div>
              );
            })}
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  if (props.dish != null)
    return (
      <div class="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name} </BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>

        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
};

export default DishDetail;
