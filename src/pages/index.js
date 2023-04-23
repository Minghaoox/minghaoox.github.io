import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useMediaQuery } from 'react-responsive';
import styles from '../css/homepage.module.css';
import button_style from '../css/buttons.module.css';

function HomePage() {
  const { siteConfig } = useDocusaurusContext();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  return (
      <Layout title={siteConfig.title} description={siteConfig.description}>
        <main className={styles.body}>
          {isDesktopOrLaptop ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '92vh', width: '100%'}}>
              <a href={siteConfig.customFields.docs}>
                <button className={`${button_style['button']}`}>Get Started</button>
              </a>
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '92vh', width: '100%'}}>
              <a href={siteConfig.customFields.docs}>
                <button className={`${button_style['button']}`}>Get Started</button>
              </a>
            </div>
          )}
        </main>
      </Layout>
  );
}

export default HomePage;
