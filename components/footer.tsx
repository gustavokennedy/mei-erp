import Link from "next/link"
import styles from "./footer.module.css"
import packageJSON from "../package.json"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <center>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="https://github.com/gustavokennedy/mei-erp">Documentação</a>
        </li>
        <li className={styles.navItem}>
          <Link href="/politica-de-privacidade">
            <a>Política de Privacidade</a>
          </Link>
        </li>
      </ul>
          <em>next-auth@{packageJSON.dependencies["next-auth"]}</em><br />
          Powered by <a href="https://www.overall.cloud">Overall.Cloud</a></center>
    </footer>
  )
}
