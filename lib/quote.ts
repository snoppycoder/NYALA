export type CoverId = "comprehensive" | "tpft" | "ctpl";

export const COVERS: {
  id: CoverId;
  name: string;
  summary: string;
  /** PLACEHOLDER rates – replace with Nyala's real rating engine / API. */
  rate: number;
  min: number;
}[] = [
  {
    id: "comprehensive",
    name: "Comprehensive cover",
    summary: "Accidental damage, fire, theft and third party liability",
    rate: 0.04,
    min: 3000,
  },
  {
    id: "tpft",
    name: "Third party, fire and theft cover",
    summary: "Third party liability, fire and theft only",
    rate: 0.025,
    min: 2000,
  },
  {
    id: "ctpl",
    name: "Compulsory third party liability cover",
    summary: "Legal minimum cover for injury or damage to others",
    rate: 0,
    min: 1500,
  },
];

export const getCover = (id?: string) =>
  COVERS.find((c) => c.id === id) ?? COVERS[0];

export function calcPremium(value: number, id: CoverId) {
  const c = getCover(id);
  if (!value || value <= 0) return 0;
  return Math.max(c.min, Math.round(value * c.rate));
}

export const formatETB = (n: number) =>
  `ETB ${n.toLocaleString("en-US")}`;

export function policyPeriod(from = new Date()) {
  const end = new Date(from);
  end.setFullYear(end.getFullYear() + 1);
  end.setDate(end.getDate() - 1);
  const f = (d: Date) =>
    d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  return `${f(from)} – ${f(end)}`;
}
