import { Bandcamp } from "../icons/socials/Bandcamp";
import { LinkedIn } from "../icons/socials/LinkedIn";
import { FooterInner, FooterShell, FooterText, SocialIconList } from "./Footer.styles";

export default function Footer() {
  return (
    <FooterShell>
      <FooterInner>
        <SocialIconList>
          <li>
            <a
              href="https://www.linkedin.com/in/ryne-estwing-65a35793/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </a>
          </li>
          <li>
            <a
              href="https://louisandthehunt.bandcamp.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bandcamp"
            >
              <Bandcamp />
            </a>
          </li>
        </SocialIconList>
        <FooterText>Made with ❤️ in Chicago (and with Figma, VSCode, and Next.js) </FooterText>
        <FooterText>© {new Date().getFullYear()} Ryne Estwing</FooterText>
      </FooterInner>
    </FooterShell>
  );
}
