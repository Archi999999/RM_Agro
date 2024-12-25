import styles from './Button.module.css'

export const Button = (
  { onClick, className, children, fullWidth, ...props}) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${fullWidth ? styles.full_width: ''} ${className}`} {...props}>{children}</button>
  )
}