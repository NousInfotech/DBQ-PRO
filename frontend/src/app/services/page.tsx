import React from 'react'
import SoundSystemHero from '@/components/ServicesPage/SoundSystemHero'
import SoundSolutions from '@/components/ServicesPage/SoundSolutions'
import StackedHighlights from '@/components/ServicesPage/StackedHighlights'
import ServicesGrid from '@/components/homepage/ServicesGrid'
import FAQSection from '@/components/homepage/FAQSection'
import { faqData } from '@/data/faq'
import ContactUs from '@/components/common/ContactUs'

export default function services() {
  return (

    <div>
      <SoundSystemHero />
      <SoundSolutions />
      <StackedHighlights />
      <ServicesGrid
        heading="A Lot More to Explore"
        headingSize="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        titleSize="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
      />
      <FAQSection
        title="Frequently Asked Questions"
        faqs={faqData}
      />
      <ContactUs />
    </div>
  )
}
