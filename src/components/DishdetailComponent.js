import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardImgOverlay,
} from "reactstrap";

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
  return (
    <div className="row">
      <div className="col-12 col-md5 m-1">
        <RenderDish dish={props.dish} />
      </div>
      <div className="col-12 col-md-5 m-1">
        <RenderComments comments={props.dish.comments} />
      </div>
    </div>
  );
};

export default DishDetail;
