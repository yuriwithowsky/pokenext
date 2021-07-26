import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/templates/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Teste">
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
