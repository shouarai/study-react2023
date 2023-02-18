import styles from "../page.module.css";
import { Footer } from "../components/Footer";
import { Center } from "../components/center";
import { Description } from "../components/description";

export default function Home() {
	return (
		<main className={styles.main}>
			<Description title='about.js' />

			<Center />
			<Footer />
		</main>
	);
}
