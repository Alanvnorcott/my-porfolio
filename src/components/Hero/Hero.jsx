import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Alan</h1>
                <p className={styles.description}>
                    I'm a full-stack developer with a passion for technology. 
                    Reach out if you'd like to learn more!
                </p>
                <a href="mailto:Alanvnorcott@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/mypic2.png")} alt="Hero" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
