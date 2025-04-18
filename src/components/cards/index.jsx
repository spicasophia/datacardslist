import React from "react";
import styles from "./cards.module.css";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data.slice(0, 20); 
};

const Card = ({ title, description }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardDescription}>{description}</p>
        </div>
    );
};

const CardList = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetchData().then((data) => setData(data));
    }, []);

    return (
        <div>
            <div className={styles.header}>This is our Card List</div>
            <div className={styles.gridContainer}>
                {data.map((item) => (
                    <Card key={item.id} title={item.title} description={item.body} />
                ))}
            </div>
        </div>
    );
};

export default CardList;