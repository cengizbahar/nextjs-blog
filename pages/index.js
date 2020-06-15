import Head from 'next/head'
import Layout, { siteTitle } from './components/layout'
import utilStyles from './styles/utils.module.css'

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Tasarımları güzel olan işleri kodlamayı seviyorum. Ekip olarak eğlenebileceğim insanlarla çalışmaktan keyif alıyorum. Bu iş ekip işidir.</p>
          <p>
            (Front End Developer - cengizbahar.com.tr{' '}
            <a href="https://cengizbahar.com.tr">Ziyaret edebilirsiniz.</a>.)
          </p>
        </section>
      </Layout>
  )
}