import styles from "./Transaction.module.css"

function TransactionHistory({ items }) {
    return <table className={styles.table}>
            <thead className={styles.head}>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>

            <tbody>
              {items.map(({ id, type, amount, currency }) => {
                  return <tr className={styles.item} key = {id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                  </tr>
                    })}
            </tbody>
          </table>
}

export default TransactionHistory