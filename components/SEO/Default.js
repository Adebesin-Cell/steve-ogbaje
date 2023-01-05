import React from 'react';
import { DefaultSeo } from 'next-seo';

const SEOHeader = ({ router }) => {
  return (
    <DefaultSeo
      title='Steve - Steve Ogbaje'
      description='Steve is a Technical Product Manager,I am passionate about solving real-life problems, through working with across the entire agile team to provide those solution.'
      canonical={`https://steve-ogbaje.vercel.app/${router.asPath || ''}`}
      openGraph={{
        title: 'Steve - Steve Ogbaje',
        description:
          'Steve is a Technical Product Manager,I am passionate about solving real-life problems, through working with across the entire agile team to provide those solution.',
        type: 'website',
        site_name: 'Steve - Steve Ogbaje',
        images: [
          {
            url: 'https://steve-ogbaje.vercel.app/images/og-image.png',
            width: 1200,
            height: 630,
            alt: 'Steve - Steve Ogbaje'
          }
        ]
      }}
    />
  );
};

export default SEOHeader;
