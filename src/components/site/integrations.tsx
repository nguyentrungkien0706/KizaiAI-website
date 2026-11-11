import { Container, Section, SectionHeading } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";

export function Integrations({ t }: { t: Dictionary }) {
  const it = t.integrations;
  return (
    <Section id="integrations" aria-labelledby="integrations-title" className="border-t border-rule">
      <Container>
        <SectionHeading id="integrations-title" title={it.title} sub={it.sub} />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          {/* Bảng kê như BOM: nhóm hệ thống, danh sách */}
          <table className="w-full border-collapse text-left">
            <tbody>
              {it.groups.map((g) => (
                <tr key={g.group} className="border-t border-ink last:border-b">
                  <th scope="row" className="w-32 py-5 pr-4 align-top text-base font-semibold md:w-40">
                    {g.group}
                  </th>
                  <td className="py-5">
                    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-ink-2">
                      {g.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <h3 className="text-xl font-semibold">{it.securityTitle}</h3>
            <ul className="mt-4">
              {it.security.map((s) => (
                <li key={s.title} className="border-t border-rule py-5 last:border-b">
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="mt-1 text-ink-2">{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
