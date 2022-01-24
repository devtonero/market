import { Link } from "react-router-dom";

import { Container, Button } from "../../globalstyles";
import {
  Hcontainer,
  Hrow,
  Hcolumn,
  Twrap,
  Tline,
  Heading,
  Substitle,
  Img,
  Imgwrap,
} from "./homeone.styles";

const Homeone = ({
  lightbg,
  imgStart,
  lighttopline,
  lighttext,
  lighttextdesc,
  description,
  heading,
  topline,
  buttonlabel,
  primary,
  img,
  alt,
  start,
}) => {
  return (
    <Hcontainer lightbg={lightbg}>
      <Container>
        <Hrow imgStart={imgStart}>
          <Hcolumn>
            <Twrap>
              <Tline lighttopline={lighttopline}>{topline}</Tline>
              <Heading lighttext={lighttext}>{heading}</Heading>
              <Substitle lighttextdesc={lighttextdesc}>{description}</Substitle>
              <Link to="signup">
                <Button big fontbig primary={primary}>
                  {buttonlabel}
                </Button>
              </Link>
            </Twrap>
          </Hcolumn>
          <Hcolumn>
            <Imgwrap start={start}>
              <Img src={img} alt={alt} />
            </Imgwrap>
          </Hcolumn>
        </Hrow>
      </Container>
    </Hcontainer>
  );
};

export default Homeone;
