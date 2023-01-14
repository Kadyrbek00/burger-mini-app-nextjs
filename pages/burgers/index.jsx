import Link from "next/link"
import styles from "../../styles/Burgers.module.css"
import Image from "next/image"
import Head from "next/head"

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/items")
    const data = await res.json()

    return {
        props: { burgers: data }
    }
}


const Burgers = ({ burgers }) => {

    return (
        <div>

            <Head>
                <title>Our Burgers</title>
            </Head>
            <h1>Our Burgers</h1>

            {burgers.map(burger => {
                return (
                    <Link href={`/burgers/${burger.id}`} key={burger.id} className={styles.burgerCard}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={burger.image}
                                alt={burger.name}
                                width='100'
                                height='100'
                                style={{ objectFit: "cover" }}
                                layout='responsive'
                            />
                        </div>
                        <div>
                            <h3>{burger.name}</h3>
                            <p>{burger.desc}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Burgers