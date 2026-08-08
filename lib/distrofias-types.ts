// lib/distrofias-types.ts

export type MedicalGroup =
  | 'Distrofinopatias'
  | 'Distrofias Musculares das Cinturas (LGMD)'
  | 'Distrofias Musculares Congênitas (CMD)'
  | 'Facioscapuloumeral (FSHD)'
  | 'Miotônica (DM)'
  | 'Emery-Dreifuss (EDMD)'
  | 'Oculofaríngea (OPMD)';

export type InheritancePattern =
  | 'Autossômica Recessiva'
  | 'Autossômica Dominante'
  | 'Autossômica Dominante ou Recessiva'
  | 'Autossômica Dominante (mais comum) ou Recessiva'
  | 'Ligada ao X Recessiva'
  | 'Ligada ao X Dominante';

export interface DiseaseFAQ {
  question: string;
  answer: string;
}

export interface ScientificReference {
  title: string;
  source: string;
  url: string;
}

export interface DiseaseDetail {
  slug: string;
  name: string;
  shortName: string;
  synonyms: string[];
  group: MedicalGroup;
  subType?: string;
  gene: string;
  protein: string;
  inheritance: InheritancePattern;
  onsetAge: string;
  affectedSystems: string[];
  summary: string;
  overview: string;
  classification: string;
  pathophysiology: string;
  signsAndSymptoms: string[];
  cardiacManifestations: string;
  respiratoryManifestations: string;
  orthopedicManifestations: string;
  diagnosisAndTests: string[];
  differentialDiagnosis: string[];
  treatmentsAndManagement: string[];
  approvedTherapies: string[];
  ongoingResearch: string;
  faqs: DiseaseFAQ[];
  references: ScientificReference[];
  lastReviewed: string; // ISO YYYY-MM-DD
}
