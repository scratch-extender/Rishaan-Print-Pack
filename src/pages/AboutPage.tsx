import { Phone, Cog, FlaskConical, MapPin, Users, Factory, TrendingUp, Heart, CheckCircle2 } from 'lucide-react';

const MACHINERY = [
  'Automatic Corrugation Machine (Broad/Narrow Flute)',
  'Manual Corrugation Machine (Narrow Flute)',
  'RS 4 Printer Machine',
  '4 Pasting Machines',
  '4 Rotary Machines',
  '3 Slotting Machines',
  '4 Stitching Machines',
  'Stereo Printing',
  '3 Platten Punching Machines',
  'Flat Belt Punching Machine',
];

const LAB_EQUIPMENT = [
  'GSM Tester',
  'BF Machine',
  'Cob Value Machine',
  'Vernier Caliper',
  'Gum Tester',
  'RCTC',
  'Weighing Scale',
  'Compression Tester',
];

const VALUES = [
  {
    icon: TrendingUp,
    title: 'Competitive Pricing',
    desc: 'Raw materials purchased on cash basis — cost benefits passed directly to customers.',
  },
  {
    icon: CheckCircle2,
    title: 'Consistent Quality',
    desc: 'In-house lab testing ensures every batch meets our strict quality standards.',
  },
  {
    icon: Factory,
    title: 'Timely Supply',
    desc: 'Three strategically located plants ensure on-time delivery to your doorstep.',
  },
  {
    icon: Heart,
    title: 'Socially Dedicated',
    desc: 'Committed to staff welfare, workers\' families, and children\'s education.',
  },
];

const LOCATIONS = [
  { place: 'Nashik (Satpur MIDC)', detail: 'Main plant — shop floor + office + lab' },
  { place: 'Vapi', detail: 'Factory & office building — 11,000 sq. ft.' },
  { place: 'Chakan', detail: '2 godowns + new auto plant coming (18,000 sq. ft.)' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#0a1a2f] to-[#1a2f4f] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Crect%20width%3D%2260%22%20height%3D%2260%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
          <span className="text-[#e8842e] font-semibold text-sm uppercase tracking-[0.2em]">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4">
            About Our Company
          </h1>
          <div className="w-20 h-1 bg-[#e8842e] mx-auto rounded-full mb-4" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Leading the way in innovative packaging solutions for over 20 years.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1a2f] mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-[#e8842e] rounded-full" />
              Who We Are
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-[1.05rem]">
              <p>
                <strong className="text-[#0a1a2f]">Mahavir Packaging and Rishaan Print Pack</strong> is engaged
                in the manufacturing of outer and inner cartons (duplex and corrugated boxes) for the past 20 years.
                We are centrally located in Nashik at Satpur MIDC.
              </p>
              <p>
                We have another plant in a prime location at Vapi, with a factory and office building area of
                11,000 sq. ft. Besides that, we have 2 godowns in Chakan, where we stock the boxes manufactured
                in Nashik. We have skilled staff to operate our godowns there. In the next 2 months, we will be
                starting an auto plant at Chakan with 18,000 sq. ft. area.
              </p>
              <p>
                At Nashik, we have a big shop floor and an equally big office area, wherein we have well-trained
                staff and 30 people working on the shop floor, including our supervisors, skilled operators, and
                helpers. We also have a laboratory with good testing equipment for our quality control.
              </p>
              <p>
                Besides Nashik being an agro-based center, big Heidelberg printing machines are available with a
                few printers who also provide 8-color printing jobs. We are associated with all such printers here.
              </p>
              <p>
                We have a sister concern firm where we have a Paper Trading business in Nashik, which helps us
                procure paper at a lower rate, and hence we offer competitive rates. We are the leaders in box
                manufacturing.
              </p>
              <p>
                We purchase all our raw materials on a cash basis, hence we control our cost and the same low-cost
                benefit is passed to the customer. Thus we provide reasonable cost, good quality, consistency in
                quality, timely supply, and we also try for innovative ideas.
              </p>
              <p>
                We are socially dedicated to our staff, workers, and their families for their welfare and
                children's education facilities. We have harmonious relations with all our staff and workers,
                which makes Mahavir Packaging a very well-bonded family in itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0f1d33] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, value: '30+', label: 'Shop Floor Workers' },
            { icon: Factory, value: '3', label: 'Manufacturing Plants' },
            { icon: MapPin, value: '11,000', label: 'Sq. Ft. at Vapi' },
            { icon: Cog, value: '20+', label: 'Years of Experience' },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#e8842e]/15 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-[#e8842e]" />
                </div>
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-white/50 text-xs uppercase tracking-wide">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0a1a2f] flex items-center justify-center">
                <Cog className="w-6 h-6 text-[#e8842e]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0a1a2f]">Machinery Setup</h2>
            </div>
            <ol className="space-y-3">
              {MACHINERY.map((item, i) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#e8842e]/10 text-[#e8842e] font-bold text-xs flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0a1a2f] flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-[#e8842e]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0a1a2f]">Laboratory Equipment</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {LAB_EQUIPMENT.map((item) => (
                <div key={item} className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#e8842e] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e8842e] font-semibold text-sm uppercase tracking-[0.2em]">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a2f] mt-3 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-[#e8842e] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="group bg-gradient-to-b from-gray-50 to-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:border-[#e8842e]/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-[#0a1a2f] flex items-center justify-center mb-5 group-hover:bg-[#e8842e] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1a2f] mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1a2f] mb-3">Our Locations</h2>
            <div className="w-16 h-1 bg-[#e8842e] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <div key={loc.place} className="bg-white rounded-2xl p-7 border border-gray-100 text-center hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#e8842e]/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-[#e8842e]" />
                </div>
                <h3 className="font-bold text-[#0a1a2f] mb-2">{loc.place}</h3>
                <p className="text-sm text-gray-500">{loc.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
