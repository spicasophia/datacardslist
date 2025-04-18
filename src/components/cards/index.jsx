import React from "react";
import styles from "./cards.module.css";

const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
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
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        fetchData()
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className={styles.loader}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.error}>Error: {error}</div>;
    }

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