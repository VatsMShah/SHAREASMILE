import { PageHead, Sec, Nums, Cards, Cta } from '@/components/common/Shared';
import { MEALS_DATA } from '../data';

export default function Poverty() {
  return (
    <>
      <PageHead
        eyebrow="INITIATIVES"
        title="Poverty Enrichment"
        img={2}
        intro="Our supported Poverty Enrichment Centers across India are trying to break the cycle of poverty by providing individuals with the tools, resources, and support needed to improve their lives and achieve economic and social stability."
      />
      <Sec title="COVID Relief Impact" sub="Activities During Covid">
        <Nums
          items={[
            ['6,726', 'Families given monthly Grocery kits'],
            ['48,50,000+', 'Meals served'],
            ['12,300+', 'Preventive care kits distributed'],
            ['1,00,000+', 'Villagers educated about COVID-19 precautions'],
            ['255', 'Villages touched']
          ]}
        />
      </Sec>
      <Sec alt title="Supporting Family in Financial Hardship">
        <p className="sub">
          We stand beside families facing financial hardship with food, essentials and care.
        </p>
      </Sec>
      <Sec title="Nourishing Body & Minds" sub="One Balanced Meal at a Time">
        <div className="grid3">
          <div className="card pad">
            <h3>Containers</h3>
            <p>Steel tiffins.</p>
          </div>
          <div className="card pad">
            <h3>Meal Timings</h3>
            <p>11 AM – 12:30 PM.</p>
          </div>
          <div className="card pad">
            <h3>Quality</h3>
            <p>Healthy &amp; Hygienic.</p>
          </div>
        </div>
        <p>
          <b>Add-ons:</b> Daily: Banana. Weekly: Chaakri Khakhras.
        </p>
      </Sec>
      <Sec alt title="Impact – Count of Meals, Measure of Care">
        <div className="tbl-w">
          <table>
            <thead>
              <tr>
                <th>Centre</th>
                <th>Beneficiaries served</th>
                <th>Meals served</th>
              </tr>
            </thead>
            <tbody>
              {MEALS_DATA.map(([c, b, m]) => (
                <tr key={c}>
                  <td>{c}</td>
                  <td>{b}</td>
                  <td>{m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Sec>
      <Sec title="Sponsor a Meal">
        <Cta>One meal at a time, you can change a life.</Cta>
      </Sec>
    </>
  );
}

