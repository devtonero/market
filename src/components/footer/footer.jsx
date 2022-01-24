import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { Button } from "../../globalstyles";
import {
  Fcontainer,
  Fsub,
  Fheading,
  Fstext,
  Form,
  Forminput,
  Flcontainer,
  Flwrap,
  Flitems,
  Fltitle,
  Flink,
  Slogo,
  Smedia,
  Swrap,
  Sicon,
  Srit,
  Sicons,
  Silink,
} from "./footer.styles";

const Footer = () => {
  return (
    <Fcontainer>
      <Fsub>
        <Fheading>
          Join Our Exclusive Membership to Receive the Latest News and Trends
        </Fheading>
        <Fstext>You Can Unsubscribe at any time.</Fstext>
        <Form>
          <Forminput name="email" type="email" placeholder="Your Email" />
          <Button fontbig>Subscribe</Button>
        </Form>
      </Fsub>
      <Flcontainer>
        <Flwrap>
          <Flitems>
            <Fltitle>About Us</Fltitle>
            <Flink to="/signup">How it works</Flink>
            <Flink to="/">Testimonials</Flink>
            <Flink to="/">Careers</Flink>

            <Flink to="/">Terms of Service</Flink>
          </Flitems>

          <Flitems>
            <Fltitle>Contact Us</Fltitle>
            <Flink to="/">Contact</Flink>
            <Flink to="/">Support</Flink>
            <Flink to="/">Destinations</Flink>
            <Flink to="/">Sponsorships</Flink>
          </Flitems>
        </Flwrap>

        <Flwrap>
          <Flitems>
            <Fltitle>Videos</Fltitle>
            <Flink to="/">Submit Video</Flink>
            <Flink to="/">Ambassadors</Flink>
            <Flink to="/">Agency</Flink>
            <Flink to="/">Influencer</Flink>
          </Flitems>

          <Flitems>
            <Fltitle>Social Media</Fltitle>
            <Flink to="/">Instagram</Flink>
            <Flink to="/">Facebook</Flink>
            <Flink to="/">Youtube</Flink>
            <Flink to="/">Twitter</Flink>
          </Flitems>
        </Flwrap>
      </Flcontainer>

      <Smedia>
        <Swrap>
          <Slogo to="/">
            <Sicon />
            Ultra
          </Slogo>
          <Srit>Ultra © 2022</Srit>

          <Sicons>
            <Silink href="/" target="_blank" aria-label="facebook">
              <FaFacebook />
            </Silink>

            <Silink href="/" target="_blank" aria-label="twitter">
              <FaTwitter />
            </Silink>
            <Silink href="/" target="_blank" aria-label="instagram">
              <FaInstagram />
            </Silink>

            <Silink href="/" target="_blank" aria-label="linkedin">
              <FaLinkedin />
            </Silink>

            <Silink
              href={
                "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
              }
              rel="noopener noreferrer"
              target="_blank"
              aria-label="youtube"
            >
              <FaYoutube />
            </Silink>
          </Sicons>
        </Swrap>
      </Smedia>
    </Fcontainer>
  );
};

export default Footer;
