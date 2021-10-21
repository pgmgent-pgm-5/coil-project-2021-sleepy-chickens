import { BaseLayout } from '../layouts'

import Hero from '../components/hero/Hero';
import Process from '../components/home/Process';
interface Props {
  
}

const HomePage = (props: Props) => {
  return (
    <BaseLayout>
      <Hero />
      <Process />
      <h1>Home</h1>
      <p>Coming soon</p>
    </BaseLayout>
  )
}

export default HomePage
