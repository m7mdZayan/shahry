import { Rate } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

const Rating = ({ value }) => {
  return (
    <div className="rate">
      {value > 3 ? (
        <div className="rate__icon rate__icon--success">
          <LikeOutlined style={{ fontSize: "30px", color: "white" }} />
        </div>
      ) : (
        <div className="rate__icon rate__icon--fail">
          <DislikeOutlined style={{ fontSize: "30px", color: "white" }} />
        </div>
      )}

      <Rate disabled value={value} />
      <span className="rate__value">{value} / 5</span>
    </div>
  );
};

export default Rating;
