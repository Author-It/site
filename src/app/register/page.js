
import styles from "@component/styles/Register.module.css"
import Image from 'next/image'

export default function Register() {
  return (
    <>
      <div className={styles.main_box}>
        <div className={styles.register_container}>
          <div className={styles.register_box}>
            <form className={styles.form}>
              <label htmlFor="email">Email</label><br />
              <input type="email" id="email" name="email" required/><br />

              <label htmlFor="user">Username</label><br />
              <input type="text" id="user" name="user" /><br />

              <label htmlFor="pass">Password</label><br />
              <input type="password" id="pass" name="pass" required /><br />

              <label htmlFor="repass">Confirm Password</label><br />
              <input type="password" id="repass" name="repass" /><br />
            </form>
            <button type="submit" className={styles.button}><b>REGISTER</b></button>
          </div>
        </div>
        <Image src={"/register_img.svg"} alt="image ni ai" width={500} height={341} priority={true} className={styles.register_image} />
      </div>
    </>
  )
}
