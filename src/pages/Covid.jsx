import { PageHead, Sec, Ul, Nums, Cards, Cta } from '@/components/common/Shared';

export default function Covid() {
  return (
    <>
      <PageHead
        eyebrow="LEGACY CAMPAIGN"
        title="COVID-19 Tribal Area Initiative"
        img={4}
        intro="Providing emergency relief and preventive care to 100+ villages; 60,000+ villagers."
      />
      <Sec title="Villages at Risk">
        <p>
          In the wake of pandemic COVID-19, thousands of under-privileged families in tribal villages in India are at risk due to severe lack of:
        </p>
        <Ul
          items={[
            'Awareness & education',
            'Access to basic food',
            'Preventive healthcare measures'
          ]}
        />
        <p>
          Moreover, the lockdown has now been extended and the impact on these communities will last well beyond that. Which is why it is important we extend them this support so that they can get through this not only during this but also the period following that.
        </p>
      </Sec>
      <Sec
        alt
        title="Fighting COVID-19"
        sub="In association with the local Govt. authorities & Govt. Healthcare Officials and our partners in India Shrimad Rajchandra Aatma Tatva Research Center, we are supporting the following activities to defeat COVID-19."
      >
        <Ul
          items={[
            'Visits by healthcare workers and volunteers to over 100 villages to spread awareness of social distancing, correct methods to cough/sneeze, wash hands and recognizing early signs/symptoms.',
            'Distribution of essential hygiene kits including items like liquid hand soaps, essential medicines and masks (FDA approved).',
            'Providing support to the Government medical centers with medical infrastructure and equipment.',
            'Distributing grocery kits (FSSAI approved) to families that can last for one month.'
          ]}
        />
      </Sec>
      <Sec title="Kit Beneficiaries">
        <Nums
          items={[
            ['12,312', 'Health Kits Distributed'],
            ['5,533', 'Grocery Kits Distributed'],
            ['39,83,760', 'Meals'],
            ['100+', 'Villages'],
            ['98,496', 'Villagers'],
            ['∞', 'Countless Smiles Generated']
          ]}
        />
      </Sec>
      <Sec
        alt
        title="How You Can Help"
        sub="Your contribution of $2/day can make a difference."
      >
        <Cards
          items={[
            ['1 Family', 'Sponsor a Grocery Kit: $60'],
            ['5 Families', 'Sponsor a Grocery Kit: $300'],
            ['10 Families', 'Sponsor a Grocery Kit: $600']
          ]}
        />
        <Cta>Donate for COVID-19 Relief</Cta>
      </Sec>
      <Sec title="Big Thank You to You and Media">
        <p>
          We have now been able to reach out to over 82,000+ people. We would like to thank each and everyone of you who has been sending us messages, spreading the word and donating to help us in the COVID-19 initiative. We would also like to thank the media, radio and news outlets who have seen this work done by our partner Shrimad Raj Chandra Aatma Tatva Research Center at ground level back in India and help spread this further. There is still a long way to go, but with your support we will make it!!!
        </p>
      </Sec>
    </>
  );
}

