import { Container } from "../../globalstyles";
import { Hcontainer, Hrow, Hcolumn, Twrap } from "./homeone.styles";

const Homeone = ({ lightbg, imgStart }) => {
  return (
    <Hcontainer lightbg={lightbg}>
      <Container>
        <Hrow imgStart={imgStart}>
          <Hcolumn>
            <Twrap>
              <Tline lighttopline={lighttopline}>{topline}</Tline>
              <Heading lighttext={lighttext}>{heading}</Heading>
              <Subtitle lighttextdesc={lighttextdesc}>{description}</Subtitle>
              <Link to="signup">
                <Button big fontbig primary={primary}>
                  {buttonlabel}
                </Button>
              </Link>
            </Twrap>
          </Hcolumn>
        </Hrow>
      </Container>
    </Hcontainer>
  );
};

export default Homeone;
