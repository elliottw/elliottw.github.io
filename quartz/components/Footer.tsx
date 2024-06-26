import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://www.gnu.org/software/emacs/">GNU Emacs, </a> 
          <a href="https://protesilaos.com/emacs/denote">Denote, </a>
          <a href="https://quartz.jzhao.xyz/">and Quartz v{version}</a> © {year}
        </p>
<script data-goatcounter="https://elliottio.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
