import styles from '../NeonErrorButton/styles.module.css'

const NeonErrorButton = ({ btnText }) => {
  return (
    <button
      className={styles.button}
      href='https://themeselection.com/item/materio-mui-nextjs-admin-template'
      target='_blank'
    >
      {btnText}
      <span className={styles.buttonInner} />
    </button>
  )
}

export default NeonErrorButton;
