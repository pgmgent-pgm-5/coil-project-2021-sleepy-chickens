import { BaseLayout } from '../layouts'

import Hero from '../components/hero/Hero';

interface Props {
  
}

const HomePage = (props: Props) => {
  return (
    <BaseLayout>
      <Hero />
      <h1>Home</h1>
      <p>Coming soon</p>
    </BaseLayout>
  )
}

export default HomePage
