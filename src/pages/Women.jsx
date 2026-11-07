import { PageHead, Sec, Cards, Ul } from '@/components/common/Shared';

export default function Women() {
  return (
    <>
      <PageHead
        eyebrow="INITIATIVES"
        title="Women Empowerment"
        img={3}
        intro="Our mission is to transform social and economic relationship for the underprivileged by empowering women of rural communities. Undoubtedly, women form the foundation for growth in our society. Our aim is to harmoniously bring balance in their household needs via education, employment and financial literacy. We pledge to give grants annually to the organizations who align with our cause."
      />
      <Sec title="A Factory – Powered by Women">
        <div className="grid3">
          <div className="card pad">
            <h3>Past Situation</h3>
            <Ul
              items={[
                'Household burden fully on women due to drunken, ill husbands or being widowed.',
                'Women working in illegal breweries, unsafe road construction projects or low wage temp jobs.'
              ]}
            />
          </div>
          <div className="card pad">
            <h3>Current Achievements</h3>
            <Ul
              items={[
                'Thriving khakra (roasted crispies) factory employing 100+ women from surrounding villages.',
                'FSSAI and FDA approved facility.',
                'Manufactures and ships 5,000 kg of khakra/month all over the world.',
                'Employees are provided bus transport to/from home, meals at the factory and field trips.'
              ]}
            />
          </div>
          <div className="card pad">
            <h3>Mission 2020 Goals</h3>
            <Ul
              items={[
                'Empower 500+ women with training and employment.',
                'Facilitate sales of 147 vegan and cruelty free products manufactured by underprivileged women.'
              ]}
            />
          </div>
        </div>
      </Sec>
      <Sec alt title="Devi's Story">
        <blockquote>
          “My husband passed away and left me with two kids - I didn't know what to do. At Chaakri, I feel safe and am able to raise my family with dignity...”
          <cite>— Devi Gupta</cite>
        </blockquote>
      </Sec>
    </>
  );
}

